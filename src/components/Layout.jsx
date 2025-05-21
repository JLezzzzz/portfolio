import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <div className="min-h-screen bg-gray-300 flex flex-col">
        <nav className="text-black p-4 shadow-md border-b-2 border-black">
          <ul className="flex gap-4 justify-end mr-4">
            <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
            <li><Link to="/projects" className="hover:text-gray-600">My Projects</Link></li>
          </ul>
        </nav>

        <div className="mx-auto w-full h-full">
          <Outlet />
        </div>

      </div>
    );
  };

  export default Layout;