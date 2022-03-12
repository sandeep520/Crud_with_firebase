// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Card from "./Card";

// const Music = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState(null);
//   console.log(data);

//   useEffect(() => {
//     axios
//       .get(
//         "https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json"
//       )
//       .then((res) => {
//           console.log(res);
//         !search
//           ? setData(res.data)
//           : setData(res.data.filter((songs) => songs.singer === search));
//       });
//   },[search]);
//   const onSubmit = e =>{
//     e.preventDefault();
//     setSearch(search);
//   }
//   return <div>
//        <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//             <h3 className="navbar-brand">Telugu Skillhub Music World <span style={{color:"blue"}}>𝄞</span>	</h3>
//             <form className="d-flex" onSubmit={onSubmit} >
//             <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
//             <input className="btn btn-outline-success" type="submit" value="Search" />
//             </form>
//         </div>
//     </nav>
//     {/* <Card songs={data} /> */}
//   </div>;
// };

// export default Music;
