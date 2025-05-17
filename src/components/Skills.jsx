import React from 'react';

function Skills() {
  return (
    <div className='flex flex-col items-center gap-8 w-[1000px]'>
      <div className='w-full p-5'>
        <h2 className='text-xl font-bold'>Skills</h2>
        <div className='grid grid-cols-2 gap-4 mt-2 mx-auto'>
          <div>
            <h3 className='text-lg font-semibold'>Programming Language</h3>
            <ul className='pl-5'>
              <li className='list-disc'>Javascript</li>
              <li className='list-disc'>Typescript (On going)</li>
              <li className='list-disc'>Go (On road map)</li>
              <li className='list-disc'>C# (On road map)</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Front-End</h3>
            <ul className='pl-5'>
              <li className='list-disc'>HTML, CSS, Javascript</li>
              <li className='list-disc'>React</li>
              <li className='list-disc'>Tailwind</li>
              <li className='list-disc'>Material UI</li>
              <li className='list-disc'>Shadcn</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Back-End</h3>
            <ul className='pl-5'>
              <li className='list-disc'>Node.js</li>
              <li className='list-disc'>Express.js</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Database & DevOps</h3>
            <ul className='pl-5'>
              <li className='list-disc'>MongoDB</li>
              <li className='list-disc'>SQLite</li>
              <li className='list-disc'>Git/GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Tools</h3>
            <ul className='pl-5'>
              <li className='list-disc'>Figma</li>
              <li className='list-disc'>Postman</li>
              <li className='list-disc'>Swagger</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Soft Skills</h3>
            <ul className='pl-5'>
              <li className='list-disc'>Leader qualification</li>
              <li className='list-disc'>Objective handling and time management</li>
              <li className='list-disc'>Team collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;