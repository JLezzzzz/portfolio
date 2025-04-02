import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <div className="min-h-screen bg-gray-300 flex flex-col">
        <nav className="text-black p-4 shadow-md border-b-2 border-black">
          <ul className="flex gap-4 justify-end mr-4">
            <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
            <li><Link to="/owner" className="hover:text-gray-600">Owner</Link></li>
          </ul>
        </nav>

        <div className="p-6 mx-auto w-full bg-gray-300 outline-1">
          <Outlet />
        </div>

      </div>
    );
  };

  export default Layout;