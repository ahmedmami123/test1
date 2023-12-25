import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch=useDispatch();
  const isAuth =localStorage.getItem("token");
  // let navigate=useNavigate();
  const [register, setRegister] = useState({
    name:"",
    Lastname:"",
    email:"",
    password:"",
  })

  return (
    <div>
      <div className="register">
        
        <input type="text" placeholder="name" onChange={(e)=>setRegister({...register,name:e.target.value})}/>
        <input type="text" placeholder="lastname"  onChange={(e)=>setRegister({...register,Lastname:e.target.value})}/>
        <input type="email" placeholder="email" onChange={(e)=>setRegister({...register,email:e.target.value})}/>
        <input type="password" placeholder="password" onChange={(e)=>setRegister({...register,password:e.target.value})} />
      </div>
      <div className="login">
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
      </div>
    </div>
  );
};

export default Register;
