import React from 'react';
import Heading from './Heading';
import * as yup from "yup";
import { useForm } from "react-hook-form";



const schema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  password: yup
         .string()
         .min(4)
         .required("Password is required")

});



export default function LoginForm(props){
  const {register, handleSubmit, errors} = useForm({
    validationSchema: schema
  });

    function onSubmit(data){
      console.log("data", data);
    }

  function moveError(){

    return (
      <p>{errors.password.message} </p>
    )

  }

  return (
    <div  className="LoginForm">
       <Heading title="This is Login" />
       <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item form-username">

             <input name="userName"  placeholder="Username ...." ref={register({required: true})} />
             {errors.userName && <p>{errors.userName.message}</p>}

           </div>

           <div className="form-item form-password">

             <input name="password" placeholder="Password ...." ref={register({required: true, minLength: 4})} />
          
             {errors.password && moveError()}




           </div>
           <input className="form-submit" type="submit" />
       </form>
    </div>

  );
}
