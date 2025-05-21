import React from 'react';

function Skills() {
  return (
    <div className='flex flex-col items-center gap-6 bg-white p-6 rounded-xl shadow-md'>
      <div className='w-full'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Skills</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Programming Languages</h3>
            <ul className='text-gray-600 pl-5 list-disc'>
              <li>JavaScript</li>
              <li>TypeScript (On going)</li>
              <li>Go (On road map)</li>
              <li>C# (On road map)</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Front-End</h3>
            <ul className='text-gray-600 pl-5 list-disc'>
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Tailwind</li>
              <li>Material UI</li>
              <li>Shadcn</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Back-End</h3>
            <ul className='text-gray-600 pl-5 list-disc'>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Database & DevOps</h3>
            <ul className='text-gray-600 pl-5 list-disc'>
              <li>MongoDB</li>
              <li>SQLite</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Tools</h3>
            <ul className='text-gray-600 pl-5 list-disc'>
              <li>Figma</li>
              <li>Postman</li>
              <li>Swagger</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Soft Skills</h3>
            <ul className='text-gray-600 pl-5 list-disc'>
              <li>Leadership</li>
              <li>Objective handling and time management</li>
              <li>Team collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;