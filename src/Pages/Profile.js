import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  const  [dataUser, setDataUSer]=useState([]);
  const getDataUser=async()=>{
      try{
          const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
          setDataUSer(data);
          console.log(data);
      }
      catch(e){console.log(e)}
  }
  useEffect(()=>{
      getDataUser()
  },[]
)
let {id} = useParams()
  return (
    <>
      <div>This is a Profile page</div>
      <button onClick={()=>navigate('/')}>GO TO HOME</button>
      {dataUser?.map(data=> data.id == id && <div>
          <h2>this is my name : {data.name}</h2>
          <h3>this is my email : {data.email}</h3>
          <h3>this is my website{data.website}</h3>
      </div>)}
    </>
  );
};

export default Profile;
