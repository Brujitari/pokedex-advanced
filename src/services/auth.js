import { catcher } from "./utils";

const register = (client) => async (data) =>
  catcher(client.post)("/auth/register", data);

  const auth = (client) => ({
    register: register(client),
  });
  
  export default auth;