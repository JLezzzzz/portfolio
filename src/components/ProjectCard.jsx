import React from 'react';

function ProjectCard({ image, projectName, stack, responsive, github, deploy }) {
  return (
    <div className='flex flex-col items-center justify-center p-4 bg-amber-100 gap-4 rounded-lg w-full h-full text-2xl'>
      <div>
        <img 
          src={image} 
          alt={projectName} 
          className='max-w-xs max-h-52 object-contain rounded-md' 
        />
      </div>
      <div className='flex flex-col items-center gap-1 text-center'>
        <div><span className='font-bold'>Project Name: </span>{projectName}</div>
        <div><span className='font-bold'>Tech Stack: </span>{stack}</div>
        <div><span className='font-bold'>Responsive: </span>{responsive}</div>
      </div>
      <div className='flex gap-6 justify-center'>
        <a href={github} target="_blank">
          <button className='hover:cursor-pointer bg-amber-200 rounded-2xl py-1 px-4 font-bold transition-transform duration-500 hover:scale-105'>
            Github
          </button>
        </a>
        <a href={deploy} target="_blank">
          <button className='hover:cursor-pointer bg-amber-200 rounded-2xl py-1 px-4 font-bold transition-transform duration-500 hover:scale-105'>
            Deploy link
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;