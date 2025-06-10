import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import Qualification from "../components/Qualifications";
import Skills from "../components/Skills";


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
        <div className="bg-gradient-to-t from-[#f7ede2] to-[#c2915e] min-h-screen p-8 scroll-smooth w-full">
            {/* Pre-bio Section */}
            <div className="flex mb-8 gap-10 w-full">
                    <div className="flex bg-white w-4/5 rounded-xl justify-between shadow-md">
                        <div className="p-8 flex flex-col items-start rounded-xl">
                            <div className="font-semibold text-lg">Junior Full Stack Developer</div>
                            <div className="text-start text-5xl font-bold mb-4">Hello, My name is Jet.<br/>Teeramaet Srimanon</div>
                            <p className="text-gray-700">
                                Junior software developer with a strong engineering background and two years of experience in data center sales. <br/> I bring a unique combination of technical problem-solving skills, and effective communication abilities.
                            </p>
                            <div className="flex gap-4 my-6">
                                <a download href="/assets/CV_Teeramaet Srimanon 31May.pdf" className =" bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-lg px-4 py-2 transition duration-300 hover:scale-105">Download CV</a>
                                <a href="#contact" className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-lg px-4 py-2 transition duration-300 hover:scale-105">Contact Me</a>
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

                        <div className="flex items-center justify-center p-10">
                            <div
                            onClick={() => navigate("/projects")}
                            className ="bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-full px-6 py-2 transition duration-300 hover:scale-105 h-20 flex items-center justify-center hover:cursor-pointer">
                                Click here to see my projects
                            </div>
                        </div>
                    </div>

                    {/* Image section */}
                        <div className="flex items-center">
                            <img
                                src="/assets/images/jsdProfile.JPG"
                                alt="ownerImage"
                                className="max-h-90 w-auto object-cover rounded-md"
                            />
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
                id="contact"
                method="POST"
                action="https://formsubmit.co/teeramaet.w@gmail.com"
                className="mt-12 mx-auto max-w-lg bg-white p-6 rounded-xl shadow-lg "
                >
                <input type="hidden" name="_subject" value="New message from portfolio site!" />
                <input type="hidden" name="_template" value="box" />

                <h3 className="text-3xl font-semibold text-gray-800 mb-4">Let's Collaborate</h3>

                <div className="flex flex-col mb-4">
                    <label className="text-gray-600 mb-2" htmlFor="name">Your Name:</label>
                    <input 
                    className="p-3 border rounded-md" 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Name"
                    required
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
                    required
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
                    required
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full py-3 mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-lg transition hover:scale-105"
                >
                    Send a message to my email
                </button>
            </form>
        </div>
    );
}