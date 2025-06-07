import { Link } from "react-router-dom";
import React from "react";

function Navigation() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-blue-700">
          <Link to="/">Hotels.</Link>
        </h1>
        <ul className="flex gap-8 font-bold text-lg ">
          <li>
            <Link to="/home" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/destination" className="hover:underline">Destination</Link>
          </li>
          <li>
            <Link to="/travelpackages" className="hover:underline">Travel Packages</Link>
          </li>
          <li>
            <Link to="/hotels" className="hover:underline">Hotel</Link>
          </li>
        </ul>
        <Link to="/profile"><img src="src/assets/Profile.webp" alt="User Profile" className="w-10 h-10 rounded-full" /></Link>
      </div>
    </nav>
  );
}

export default Navigation;
