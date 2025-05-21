import React from 'react';

function PersonalInfo() {
  return (
    <div className='flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-md'>
      <div className='w-full'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>About Me</h2>
        <p className='text-gray-700 mb-2'>
          Hi, I'm Jet! I'm a Junior Software Developer with a background in engineering and a passion for building systems and designing solutions. 
          I bring 2 years of experience as a Sales Engineer, where I developed strong collaboration and independent working skills.
        </p>
        <p className='text-gray-700'>
          Currently, I'm enrolled in the Junior Software Developer bootcamp by Generation Thailand and also actively self-studying to deepen my 
          full-stack development skills. I'm a lifelong learner, driven to grow and thrive in the tech industry.
        </p>
      </div>
      <div className='w-full mt-4'>
        <h3 className='text-2xl font-semibold text-gray-800'>Contact Information</h3>
        <ul className='mt-2 text-gray-700 space-y-1'>
          <li>Teeramaet Srimanon</li>
          <li>089 482 1873 (+66)</li>
          <li>Teeramaet.w@gmail.com</li>
          <li>49/547 Nimatmai road, Sam Wa Tawan-Ok, KlongSamWa Bangkok 10510</li>
          <li>Kasetsart University - Aerospace Engineering</li>
        </ul>
      </div>
    </div>
  );
}

export default PersonalInfo;