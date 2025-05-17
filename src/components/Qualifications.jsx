import React from 'react'

function Qualifications() {
  return (
    <div className='flex flex-col items-center gap-8 w-[1000px]'>
      <div className='w-full p-5'>
        <h2 className='text-xl font-bold'>Qualification</h2>
        <div className='grid grid-cols-2 gap-4 mt-2'>
          <div>
            <h3 className='text-lg font-semibold'>Generation Thailand</h3>
            <p>Juniort Software Developer #9 bootcamp</p>
            <p>(Febuary 2025 - May 2025)</p>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-lg font-semibold'>Coursera</h3>
            <ul className='pl-5'>
              <li className='list-disc'>Introduction to Cloud Computing</li>
              <li className='list-disc'>Developing Front-End Apss with React</li>
              <li className='list-disc'>Introduction to Web Deployment with HTML, CSS, JavaScript</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Codeacademy</h3>
            <ul className='pl-5'>
              <li className='list-disc'>Learn SQL</li>
              <li className='list-disc'>Learn HTML</li>
              <li className='list-disc'>Learn CSS</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualifications