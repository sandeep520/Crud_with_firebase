import React ,{useState,useEffect}from 'react'
import './AddEdit.css'
import fireDb from '../pages/Firebase'
import { toast } from 'react-toastify'
import { useHistory, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const intialState ={
    name :'',
    email:'',
    contact :''
}

const AddEdit = () => {
    const[state,setState]=useState(intialState);
    const[data,setData]=useState({});
     const {name,email,contact}=state;
     const {id}=useParams();
     /// Edit the data ////
     useEffect(() => {
        fireDb.child("crud-app").on("value", (snapshot) => {
          if (snapshot.val() !== null) {
            setData({ ...snapshot.val() });
          } else {
            setData({});
          }
        });
        ///cleanup function
        return () => {
          setData({});
        };
      }, [id]);

///  Edit data 
      useEffect(()=>{
          if(id){
              setState({...data[id]})

          }else{
              setState({...intialState})
          }
          return()=>{
              setState({...intialState})
          }

      },[id,data])


     const history =useNavigate();
    const handleInputChange=(e)=>{
        const {name,value} =e.target;
        setState({...state,[name]:value})
    }

    const handlerSubmit =(e)=>{
        e.preventDefault();
        if(!name || !email || !contact){
            toast.error("please provide value in each input field");

        }else{
            fireDb.child("contacts").push(state,(err)=>{
                if(err){
                    toast.error(err);
                }else{
                    toast.success("contact Added successfully")
                }
            });
            setTimeout(()=> history('/'),500);
        }

    }
  return (
    <div style={{marginTop :'100px'}}>
       <form
       style={{
           margin :'auto',
           padding :'15px',
           maxWidth :'400px',
           alignContent :'center'
       }}
       onSubmit ={handlerSubmit}
       >
           <label htmlFor='name' >Name</label>
           <input type='text'
           id='name'
           name='name'
           placeholder='yourname...'
           value={name || " "}
           onChange={handleInputChange}
            />
             <label htmlFor='email' >Email</label>
           <input type='email'
           id='email'
           name='email'
           placeholder='youremail...'
           value={email || ""}
           onChange={handleInputChange}
            />
             <label htmlFor='contact' >Contact</label>
           <input type='number'
           id='contact'
           name='contact'
           placeholder='your contact...'
           value={contact || ""}
           onChange={handleInputChange}
            />
            <input type='submit' value={id ? 'update':'save'}/>

       </form>
    </div>
  )
}

export default AddEdit