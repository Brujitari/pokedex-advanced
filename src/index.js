import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Context, { useGetter } from "store";
import { usePokedex, useUser } from 'hooks';

import Main from "pages";
import Login from "pages/auth/login";
import Register from "pages/auth/register";

const App = () => {
  const [pokedex, setPokedex] = usePokedex();
  const [user, setUser] = useUser();

  return (
    <Context.Provider value={{ user, setUser, pokedex, setPokedex }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="profile" element={<p>h</p>} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

