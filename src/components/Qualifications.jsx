import React from 'react';

function Qualifications() {
  return (
    <div className='flex flex-col items-center gap-6 bg-white p-6 rounded-xl shadow-md'>
      <div className='w-full'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Qualification</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Generation Thailand</h3>
            <p className='text-gray-600'>Junior Software Developer #9 bootcamp</p>
            <p className='text-gray-600'>(February 2025 - May 2025)</p>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Coursera</h3>
            <ul className='text-gray-600 pl-5 list-disc'>
              <li>Introduction to Cloud Computing</li>
              <li>Developing Front-End Apps with React</li>
              <li>Introduction to Web Deployment with HTML, CSS, JavaScript</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-800'>Codecademy</h3>
            <ul className='text-gray-600 pl-5 list-disc'>
              <li>Learn SQL</li>
              <li>Learn HTML</li>
              <li>Learn CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;