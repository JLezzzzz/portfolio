import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
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
          return (
            <PersonalInfo/>
          );
        case 'qualification':
          return (
            <Qualification/>
          );
        case 'skills':
          return (
            <Skills/>
          );
        default:
          return null;
      }}

    return (

    //This is the pre-bio section
    <div className="bg-[#c2915e]">
      <div className="flex gap-10"> 
        <div className="text-center mt-4 outline-1 p-8 flex flex-col items-start">
          <div className="font-semibold">Junior Full stack developer</div>
          <div className="text-5xl font-bold mb-8 text-start">Hello, My name is Jet.<br/>Teeramaet Srimanon</div>
          <div className="text-start">An engineer student from Kasetsart university, switching the career to a software developer from JSD#9 by Generation Thailand.</div>
          <div className="flex gap-4 my-6 ">
            <button className="bg-[#005b49] text-white font-bold rounded-lg p-2">Download CV</button>
            <button className="bg-[#005b49] text-white font-bold rounded-lg p-2">Contact me</button>
          </div>
          <div className="flex gap-6 my-2 justify-between">
            <a href="https://github.com/JLezzzzz"><img src="/assets/images/github-icon.png" className="w-8"/></a>
            <a href="https://www.linkedin.com/in/teeramaet-srimanon-b9aa19242/"><img src="/assets/images/linkedin-square-icon.png" className="w-8"/></a>
          </div>
        </div>
        <div className="text-center mt-4 outline-1 p-8 flex flex-col items-start">
          <span>Go to see my projects</span>
          <Link to = "projects"><span className="hover:cursor-pointer">click here</span></Link>
        </div>
      </div>

      <div className="items-center bg flex flex-col mt-20 p-5 w-full bg-[#005b49]">
      <div className="text-5xl font-lg mb-8 text-start text-white font-bold">About Me</div>
        <div className="bg-[#005b49] justify-between outline-2 rounded-2xl m-2 flex px-4">
          <button onClick={() => setActiveTab('personal')} className={`m-3 py-2 px-6 text-white font-medium rounded-lg outline-2 outline-black hover:cursor-pointer hover:bg-emerald-300 ${activeTab === 'personal' ? 'bg-emerald-700 hover:bg-emerald-700' : 'bg-emerald-500'} `}>Personal info</button>
          <button onClick={() => setActiveTab('qualification')} className={`m-3 py-2 px-6 text-white font-medium rounded-lg outline-2 outline-black hover:cursor-pointer hover:bg-emerald-300 ${activeTab === 'qualification' ? 'bg-emerald-700 hover:bg-emerald-700' : 'bg-emerald-500'} `}>Qualification</button>
          <button onClick={() => setActiveTab('skills')} className={`m-3 py-2 px-6 text-white font-medium rounded-lg outline-2 outline-black hover:cursor-pointer hover:bg-emerald-300 ${activeTab === 'skills' ? 'bg-emerald-700 hover:bg-emerald-700' : 'bg-emerald-500'} `}>Skills</button>
          
        </div>
        <div className="flex bg-[#ffebcd] p-4 rounded-lg border w-[1200px] mx-auto">{renderContent()}</div>
      </div>

      <form method="POST" action="https://getform.io/f/6ca2ae1d-a5a5-476c-a1b0-3d092c548623" class="my-4 mx-auto max-w-[650px] min-[1335px]:mt-[5rem] sm:flex sm:flex-col sm:justify-center">
      <div class="flex flex-col">
        <label class="font-Caveat text-[#FFFFFF] text-xl" for="name">Your Name :</label>
        <input class="font-Caveat text-[#707070] bg-[#F5FCCD] rounded-lg p-[5px] py-[7px]  mt-1" type="text" id="name" placeholder="Name" name="name" fdprocessedid="138b4"/>
        </div>
        <div class="flex flex-col my-4">
          <label class="font-Caveat text-[#FFFFFF] text-xl" for="email">Your Email :</label>
          <input class="font-Caveat text-[#707070] bg-[#F5FCCD] rounded-lg p-[5px] py-[7px]  mt-1" type="email" id="email" placeholder="Email" name="email" fdprocessedid="1xxkmc"/>
          </div><div class="flex flex-col">
            <label for="message" class="font-Caveat text-[#FFFFFF] text-xl">Your Message :</label>
            <textarea class="font-Caveat text-[#707070] bg-[#F5FCCD] rounded-lg p-[5px] mt-1" name="message" id="message" rows="6" placeholder="Message"></textarea>
            </div>
            <button class="font-Mogra text-[#FFFFFF] bg-[#419197] rounded-xl px-4 py-3 my-5 mx-auto flex items-center hover:bg-navcolor hover:text-[#003229] duration-200" fdprocessedid="byd22l">Let's Collaborate</button>
        </form>
    </div>
    )
}