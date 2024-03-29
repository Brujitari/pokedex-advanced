import images from "utils/imgLoader";
import "../styles.scss";
import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGetter } from "store";
import { useLogin } from "hooks";

import Input from "components/input";
import Button from "components/button";

const Login = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null)
  const { handleSubmit, register } = useForm();
  const { user, setUser } = useGetter();
  const login = useLogin({ onSuccess: () => navigate("/pokedex") });

  const handleClick = () => {navigate("/register")};
  const handleButton = () => inputRef.current.click();
  const onSubmit = data => login(data)

  useEffect(() => {
    setUser();
  }, []);

  useEffect(() => {
    user && navigate("/pokedex");
  }, [user]);

  return (
    <section className="login">
      <section className='icon'>
        <img src={images.pokeballIcon} alt="pokeball icon" />
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="inputs">
        <Input type="text" placeholder="email" fn={() => register("email")}/>
        <Input type="password" placeholder="password" fn={() => register("password")}/>
        <input ref={inputRef} type="submit" style={{position: "absolute", visibility: "hidden"}}/>
      </form>

      <section className="buttons">
        <Button handleClick={handleButton} text="Login" />
        <p className="buttons__text">
          Don't have an account yet?{" "}
          <span className="buttons__link" onClick={handleClick}>
            Sign up here
          </span>
        </p>
      </section>

    </section>
  );
};

export default Login;
