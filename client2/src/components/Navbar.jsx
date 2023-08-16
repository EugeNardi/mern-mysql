import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-orange-800 flex justify-between px-20 py-4">
      
      <Link to="/" className="text-white fond-bold">
         <h1>Bovine Trasability</h1>
      </Link>

      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="text-white px-2 py-1">Inicio</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/new" className="text-white px-2 py-1">Crear Registro</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
