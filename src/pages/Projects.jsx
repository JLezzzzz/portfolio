import React from "react";
import ProjectCard from "../components/ProjectCard";


export default function Projects() {

    return (
    <div>
      <div className="text-center outline-1 w-full p-4 mb-10">
        Project page
      </div>
      <div className="grid grid-cols-3 outline-4 p-10">

        <div className="w-[500px] h-[500px] outline-1">
          <ProjectCard image = "/assets/images/customike.jpg" projectName= "Customike? (Final group project)" stack="MERN" responsive="Desktop" github="https://github.com/JLezzzzz/seal-over-the-wall-frontEnd" deploy="https://seal-over-the-walls.vercel.app/"/>
        </div>
        <div className="w-[500px] h-[500px] outline-1">
          <ProjectCard image = "/assets/images/colma.jpg" projectName= "Colma Academy" stack="HTML/CSS" responsive="Desktop/Mobile" github="https://github.com/JLezzzzz/29-jet-colmar" deploy="https://29-jet-colmar.vercel.app/"/>
        </div>
        <div className="w-[500px] h-[500px] outline-1">
          <ProjectCard image = "/assets/images/CRUD.jpg" projectName= "CRUD assessment" stack="React" responsive="Desktop/Mobile" github="https://github.com/JLezzzzz/career-changer-react-assessment" deploy="https://career-changer-react-assessment-omega-umber.vercel.app/"/>
        </div>
      </div>
    </div>
    )
}