import React from 'react';

function PersonalInfo() {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='w-full p-5'>
        <h2 className='text-xl font-bold'>About Me</h2>
        <p className='mt-2'>
          Hi, I'm Jet! I'm a Junior Software Developer with a background in engineering and a passion for building systems and designing solutions. I bring 2 years of experience as a Sales Engineer, where I developed strong collaboration and independent working skills.
        </p>
        <p>
          Currently, I'm enrolled in the Junior Software Developer bootcamp by Generation Thailand and also actively self-studying to deepen my full-stack development skills. I'm a lifelong learner, driven to grow and thrive in the tech industry.
        </p>
      </div>
      <div className='outline-1 p-4'>
        <h3 className='text-lg font-semibold'>Contact informations</h3>
        <ul className='grid grid-cols-2 gap-2 pl-5'>
          <li className='list-disc'>Teeramaet Srimanon</li>
          <li className='list-disc'>089 482 1873 (+66)</li>
          <li className='list-disc'>Teeramaet.w@gmail.com</li>
          <li className='list-disc'>49/547 Nimatmai road, Sam Wa Tawan-Ok, KlongSamWa Bangkok 10510</li>
          <li className='list-disc'>Kasetsart University<br/>- Aerospace Engineering</li>
        </ul>
      </div>
    </div>
  );
}

export default PersonalInfo;
