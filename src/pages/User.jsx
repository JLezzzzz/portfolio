import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { Form } from "react-router-dom";
import axios from "axios";

export default function User() {
    const navigate = useNavigate();
    const userNavigate = () => {
        navigate("/user")
    };
    const adminNavigate = () => {
        navigate("/admin")
    };

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let members = await axios.get("https://jsd5-mock-backend.onrender.com/members")
                setData(members.data)
                console.log(data)

            } catch (err) {
                setError ("Failed to retrieve the data")
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])

    return (
    <>
        <div className="text-center items-center pb-8 flex flex-col">
            <h1 className="text-5xl font-bold mb-8">Generation Thailand<br/>Home - User Section</h1>
            <div className="flex justify-center gap-24 mt-4 mb-16">
                <button onClick={userNavigate} className="px-4 py-2 h-[56px] w-[200px] bg-white text-black rounded-md font-semibold hover:bg-gray-600 transition">
                    User Home Section
                </button>
                <button onClick={adminNavigate} className="px-4 py-2 h-[56px] w-[200px] bg-white text-black rounded-md font-semibold hover:bg-gray-600 transition">
                    Admin Home Section
                </button>
            </div>

        <table className="outline-1 w-auto">
            <tr className="font-semibold h-[36px]">
                <th className="w-[200px] border-x-1">Name</th>
                <th className="w-[200px] border-x-1">Last Name</th>
                <th className="w-[200px] border-x-1">Position</th>
                
            </tr>
            {data.map((member) => (
                <tr className="font-semibold h-[36px]" key={member.id}>
                    <td className="w-[200px] border-x-1 border-y-1 text-center bg-white">{member.name}</td>
                    <td className="w-[200px] border-x-1 border-y-1 text-center bg-white">{member.lastname}</td>
                    <td className="w-[200px] border-x-1 border-y-1 text-center bg-white">{member.position}</td>
                </tr>
            ))}
        </table>
        </div>
    </>
    )
}