import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fireDb from '../pages/Firebase'
import './View.css'
const View = () => {
    const [user,setuser]=useState({})
    const {id}=useParams();
    useEffect(()=>{
        fireDb.child(`contacts/${id}`).get().then((snapshot)=>{
            if (snapshot.exists()){
                setuser({...snapshot.val()});
            }else{
                setuser({})
            }
        
        })
        },[id])
        console.log(user,'user');
  return (
    <div>View</div>
  )
}

export default View