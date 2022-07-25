import axios from "axios";
import auth from "./auth";
import user from "./user";
import pokemons from "./pokemons";

const pokeapi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
})

const instance = axios.create({
    baseURL: "http://localhost:3002",
    withCredentials: true,
  });

const services = {
    auth: auth(instance),
    user: user(instance),
    pokemons: pokemons(pokeapi)
  };

  export default services;