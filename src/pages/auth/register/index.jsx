import "../styles.scss";
import React from 'react';
import images from "utils/imgLoader";
import { useForm } from "react-hook-form"

import Input from "components/input";

function Register() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className='register'>
      <section className='icon'>
        <img src={images.pokeballIcon} alt="pokeball icon" />
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="inputs">
        <Input placeholder="email" fn={() => register("email")} />
        <Input placeholder="username" fn={() => register("username")} />
        <Input placeholder="password" fn={() => register("password")} />
      </form>

      <section className='buttons'>

      </section>
    </section>
  )
}

export default Register