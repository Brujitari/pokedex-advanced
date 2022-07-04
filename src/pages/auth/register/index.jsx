import "../styles.scss";
import React from 'react';
import images from "utils/imgLoader";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


import Input from "components/input";
import Button from "components/button";

function Register() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const submitRef = useRef(null);

  const handleClick = () => navigate("/login");
  const handleButton = () => submitRef.current.click();

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
        <Input type="password" placeholder="password" fn={() => register("password")} />
        <input
          ref={submitRef}
          style={{ position: "absolute", visibility: "hidden" }}
          type="submit"
        />
      </form>

      <section className='buttons'>
      <Button handleClick={handleButton} text="Sign up" />
        <p className="buttons__text">
          Already have an account?{" "}
          <span className="buttons__link" onClick={handleClick}>
            Log in here
          </span>
        </p>
      </section>
    </section>
  )
}

export default Register