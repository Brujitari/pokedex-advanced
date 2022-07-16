import axios from "axios";
import auth from "./auth";

const instance = axios.create({
    baseURL: "http://localhost:3002",
    withCredentials: true,
  });

const services = {
    auth: auth(instance),
  };

  export default services;