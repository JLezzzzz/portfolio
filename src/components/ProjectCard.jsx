import React from 'react';

function ProjectCard({ image, projectName, stack, responsive, github, deploy }) {
  return (
    <div className='flex flex-col items-center justify-between p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105'>
      <img 
        src={image} 
        alt={projectName} 
        className='w-full h-52 object-cover rounded-md mb-4'
      />
      <div className='flex flex-col items-center gap-2'>
        <h3 className='text-2xl font-semibold text-gray-800'>{projectName}</h3>
        <p className='text-gray-600'><span className='font-bold'>Tech Stack: </span>{stack}</p>
        <p className='text-gray-600'><span className='font-bold'>Responsive: </span>{responsive}</p>
      </div>
      <div className='flex gap-4 mt-4'>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button className='px-4 py-2 text-white bg-emerald-600 rounded-md shadow-md hover:bg-emerald-700 transition duration-300'>
            GitHub
          </button>
        </a>
        <a href={deploy} target="_blank" rel="noopener noreferrer">
          <button className='px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition duration-300'>
            Visit Site
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;