import React from "react";
import { CreateUser } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

const InsertQuery = () => {

  const [createUser,{error}]  =useMutation(CreateUser)
  const[first_name,setFirst_Name]=React.useState('')
  const[last_name,setLast_Name]=React.useState('')
  const[gender,setGender]=React.useState('')
  const[email,setEmail]=React.useState('')
  const[password,setPassword]=React.useState('')


  const submitFun = (e) => {
    e.preventDefault();
    createUser({
        variables:{
            first_name:first_name,
            last_name:last_name,
            email:email,
            gender:gender,
            password:password
        }
    });
    if(error){
        console.log(error)
    }
  };
  return (
    <div>
      <form onSubmit={submitFun}>
        <input type="text" onChange={(e)=>setFirst_Name(e.target.value)} placeholder="first name"></input>
        <input type="text"  onChange={(e)=>setLast_Name(e.target.value)} placeholder="last name"></input>
        <input type="text" onChange={(e)=>setGender(e.target.value)} placeholder="gender"></input>
        <input type="text"  onChange={(e)=>setEmail(e.target.value)}placeholder="email"></input>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="password"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InsertQuery;
