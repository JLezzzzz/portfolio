import axios from "axios";
import React, { useEffect,useState } from "react";
import {useNavigate} from "react-router-dom";
import { Form } from "react-router-dom";

export default function Admin() {
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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");


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

    const clearStuff = () => {
        setFirstName("")
        setLastName("")
        setPosition("")
    }
    const createUser = async (e) => {
        try {
            e.preventDefault()
            let payload = {name: firstName, lastname: lastName, position: position}
            if (payload.name === "" && payload.lastname === "" && payload.position === "") {
                alert ("Do not put an empty value.")
            }
            let newUser = await axios.post("https://jsd5-mock-backend.onrender.com/members",
                payload)
            console.log(newUser)
        } catch(err) {
            setError ("Eieie")
            console.log(err)

        } finally {
            fetchUsers();
            clearStuff();
        }
    }

    const deleteUser = async (targetId) => {
        try {
            let deleted = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${targetId}`)
            console.log(deleted)
        } catch(err) {
            setError("Error delete")
            console.log(err)
        } finally {
            fetchUsers()
        }

    }

    useEffect(() => {
        fetchUsers()
    }, [])



    return (
    <>
        <div className="text-center items-center pb-8 flex flex-col">

            <h1 className="text-5xl font-bold mb-8">Generation Thailand<br/>Home - Admin Section</h1>
            <div className="flex justify-center gap-24 mt-4">
                <button onClick={userNavigate} className="px-4 py-2 h-[56px] w-[200px] bg-white text-black rounded-md font-semibold hover:bg-gray-600 transition">
                    User Home Section
                </button>
                <button onClick={adminNavigate} className="px-4 py-2 h-[56px] w-[200px] bg-white text-black rounded-md font-semibold hover:bg-gray-600 transition">
                    Admin Home Section
                </button>
            </div>
        </div>

        <div className="flex flex-col items-center">
            <div className="mb-12 w-[1077px] h-[100px]">
                <span className="px-4 text-2xl text-black rounded-md font-bold">Create User Here</span>
                <Form onSubmit={createUser} method="post" className="flex gap-12 mt-4 justify-center">
                <input
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    className="p-2 bg-gray-100 rounded-md w-[300px] h-[56px] text-black "
                    placeholder="Name"/>
                <input
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    className="p-2 bg-gray-100 rounded-md w-[300px] h-[56px] text-black "
                    placeholder="Last Name"/>
                <input
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                    type="text"
                    className="p-2 bg-gray-100 rounded-md w-[300px] h-[56px] text-black "
                    placeholder="Position"/>
                    <button type="submit" className="bg-[#5E5BFF] w-[63px] h-[48px] rounded-md text-white font-semibold hover:font-extrabold hover:cursor-pointer">Save</button>
                </Form>
            </div>

            <table className="outline-1 w-auto">
            <tr className="font-semibold h-[36px]">
                <th className="w-[200px] border-x-1">Name</th>
                <th className="w-[200px] border-x-1">Last Name</th>
                <th className="w-[200px] border-x-1">Position</th>
                <th className="w-[200px] border-x-1">Action</th>
            </tr>
            {data.map((member) => (
                <tr className="font-semibold h-[36px]" key={member.id}>
                    <td className="w-[200px] border-x-1 border-y-1 text-center bg-white">{member.name}</td>
                    <td className="w-[200px] border-x-1 border-y-1 text-center bg-white">{member.lastname}</td>
                    <td className="w-[200px] border-x-1 border-y-1 text-center bg-white">{member.position}</td>
                    <td className="w-[200px] border-x-1 border-y-1 text-center bg-white"><button onClick={ ()=> deleteUser(member.id)} className="bg-red-400 text-white px-2 w-[128px] h-[26px] rounded hover:font-bold hover:bg-red-500 hover:cursor-pointer">Delete</button></td>
                </tr>
                ))}
            </table>
            <button className="bg-blue-400 text-black font-bold mt-8 w-[800px] h-[32px] rounded hover:font-bold hover:bg-blue-500 hover:cursor-pointer">Edit member information</button>
            {loading && <p className="text-center bg-white mt-4">Fetching data...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
        </div>

    </>
    )
}