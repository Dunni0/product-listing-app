import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function SharedComp() {
  return (
    <div>
      <NavLink to="/">
        <button className="button">
            Home 
        </button>
      </NavLink>
      <Outlet />
    </div>
  );
}

export default SharedComp;
