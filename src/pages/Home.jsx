import React from "react";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const userNavigate = () => {
        navigate("/user")
    };
    const adminNavigate = () => {
        navigate("/admin")
    };

    return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-8">Generation Thailand<br/>React - Assessment</h1>
      <div className="flex justify-center gap-24 mt-4">
      <button onClick={userNavigate} className="px-4 py-2 h-[56px] w-[200px] bg-white text-black rounded-md font-semibold hover:bg-gray-600 transition">
        User Home Section
      </button>
      <button onClick={adminNavigate} className="px-4 py-2 h-[56px] w-[200px] bg-white text-black rounded-md font-semibold hover:bg-gray-600 transition">
        Admin Home Section
      </button>
      </div>
    </div>
    )
}