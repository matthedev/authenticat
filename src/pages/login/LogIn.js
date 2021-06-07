import React from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios"
import { useForm } from "react-hook-form";
import "./login.module.css"

function App({history}) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => axios({
      method: 'post',
      url: 'https://reqres.in/api/login',
      data: {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka",
    }
}).then((response) => {
    console.log("tokentest", response.data.token)
    localStorage.setItem('token', response.data.token)
    history.push("/dashboard")
}, (error) => {
    console.log(error);
});

//   console.log(watch("example")); // watch input value by passing the name of it



  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
     <input defaultValue="" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}

export default withRouter(App);