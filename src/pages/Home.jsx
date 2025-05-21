import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import Qualification from "../components/Qualifications";
import Skills from "../components/Skills";
import { Link } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('personal');

    const renderContent = () => {
        switch (activeTab) {
            case 'personal':
                return <PersonalInfo />;
            case 'qualification':
                return <Qualification />;
            case 'skills':
                return <Skills />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-gradient-to-t from-[#f7ede2] to-[#c2915e] min-h-screen p-8">
            {/* Pre-bio Section */}
            <div className="flex gap-10 mb-8">
                <div className="text-center p-8 flex flex-col items-start bg-white shadow-md rounded-xl">
                    <div className="font-semibold text-lg">Junior Full Stack Developer</div>
                    <div className="text-5xl font-bold mb-4">Hello, My name is Jet.<br/>Teeramaet Srimanon</div>
                    <p className="text-gray-700">
                        An engineering student from Kasetsart University, switching careers to software development from JSD#9 by Generation Thailand.
                    </p>
                    <div className="flex gap-4 my-6">
                        <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-lg px-4 py-2 transition duration-300 hover:scale-105">Download CV</button>
                        <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-lg px-4 py-2 transition duration-300 hover:scale-105">Contact Me</button>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://github.com/JLezzzzz" target="_blank">
                            <img src="/assets/images/github-icon.png" className="w-8 hover:scale-110 transition"/>
                        </a>
                        <a href="https://www.linkedin.com/in/teeramaet-srimanon-b9aa19242/" target="_blank">
                            <img src="/assets/images/linkedin-square-icon.png" className="w-8 hover:scale-110 transition"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-xl">
                    <span className="text-2xl font-semibold">Click to see my projects</span>
                    <Link to="projects">
                        <img className="h-12 w-12 hover:scale-110 transition" src="/assets/images/right-arrow.svg" alt="Go to Projects"/>
                    </Link>
                </div>
            </div>

            {/* About Me Section */}
            <div className="bg-emerald-600 text-white p-8 rounded-xl shadow-md">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <div className="flex gap-4 mb-4">
                    {['personal', 'qualification', 'skills'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 px-6 rounded-lg transition ${
                                activeTab === tab
                                    ? 'bg-emerald-800'
                                    : 'bg-emerald-500 hover:bg-emerald-700'
                            }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                    {renderContent()}
                </div>
            </div>

            {/* Contact Form */}
            <form 
                method="POST" 
                action="https://getform.io/f/6ca2ae1d-a5a5-476c-a1b0-3d092c548623"
                className="mt-12 mx-auto max-w-lg bg-white p-6 rounded-xl shadow-lg"
            >
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">Let's Collaborate</h3>
                <div className="flex flex-col mb-4">
                    <label className="text-gray-600 mb-2" htmlFor="name">Your Name:</label>
                    <input 
                        className="p-3 border rounded-md" 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Name"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-gray-600 mb-2" htmlFor="email">Your Email:</label>
                    <input 
                        className="p-3 border rounded-md" 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-gray-600 mb-2" htmlFor="message">Your Message:</label>
                    <textarea 
                        className="p-3 border rounded-md" 
                        id="message" 
                        name="message" 
                        rows="5" 
                        placeholder="Message"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full py-3 mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-lg transition hover:scale-105"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}