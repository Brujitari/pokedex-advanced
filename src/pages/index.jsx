import React from 'react';
import { Outlet } from "react-router-dom";


function Main() {
  return (
    <div>
        <p>Pokédex</p>
        <Outlet/>
    </div>
  )
}

export default Main