import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-t from-[#f7ede2] to-[#c2915e]">
      <div className="text-center text-4xl font-bold text-white mb-10">Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          image="/assets/images/customike.jpg"
          projectName="Customike? (Final group project)"
          stack="MERN"
          responsive="Desktop"
          github="https://github.com/JLezzzzz/seal-over-the-wall-frontEnd"
          deploy="https://seal-over-the-walls.vercel.app/"
        />
        <ProjectCard
          image="/assets/images/notesApp.jpg"
          projectName="Full stack notes application"
          stack="MERN"
          responsive="Desktop"
          github="https://github.com/JLezzzzz/noteApps_frontEnd"
          deploy="https://note-apps-front-end.vercel.app/"
        />
        <ProjectCard
          image="/assets/images/colma.jpg"
          projectName="Colma Academy"
          stack="HTML/CSS"
          responsive="Desktop/Mobile"
          github="https://github.com/JLezzzzz/29-jet-colmar"
          deploy="https://29-jet-colmar.vercel.app/"
        />
        <ProjectCard
          image="/assets/images/CRUD.jpg"
          projectName="CRUD assessment"
          stack="React"
          responsive="Desktop/Mobile"
          github="https://github.com/JLezzzzz/react_assessment_crud"
          deploy="https://react-assessment-crud.vercel.app/"
        />
        
      </div>
    </div>
  );
}