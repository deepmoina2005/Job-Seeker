// import React, { useContext, useEffect, useState } from 'react'
// import { Context } from "../../main";
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import ResumeModal from "./ResumeModel"

// const MyApplication = () => {
//   const {application, setApplication} = useState([]);
//   const {modelOpen, setOpenModel} = useState([]);
//   const {imageUrl, setImageUrl} = useState([]);
//   const { user, isAuthorized} = useContext(Context);

//   const navigateTo = useNavigate()
//   useEffect(()=>{
//     try {
//       if(user && user.role === "Employer"){
//         axios.get("", {withCredentials: true}).then(res=>{
//           setApplication(res.data.application);
//         })
//       } else {
//         axios.get("", {withCredentials: true}).then(res=>{
//           setApplication(res.data.application);
//         })
//       }
//     } catch (error) {
//       toast.error(error.response.data.message)
//     }
//   },[isAuthorized])
//   return (
    
//   )
// }

// export default MyApplication

import React from 'react'

const MyApplication = () => {
  return (
    <div>MyApplication</div>
  )
}

export default MyApplication