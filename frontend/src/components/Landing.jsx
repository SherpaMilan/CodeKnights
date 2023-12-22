import React from 'react'
import landingImage from '../assets/landing.svg';
import bg from '../assets/bg.avif';

const Landing = () => {
  return (
    <div className='relative flex flex-col mx-auto h-screen justify-center text-center items-center'>
        <div className="absolute text-2xl left-8 top-8 font-bold z-10">
          <highlight>Code</highlight>Knights
        </div>
        <div className='text-5xl font-bold w-2/3'>
            The leading platform offering <highlight>reliable </highlight>
             and <highlight>consensus based</highlight> data verification!
        </div>
        <img src={landingImage} alt=""
          className='w-1/3 h-auto aspect-auto'
        />
        <button className="text-[#6C63FF] font-bold border-2
           border-gray-500 p-2 w-1/6 rounded-lg m-3
           hover "
        >
          Get Started!
        </button>
        <img src={bg} alt="" className="absolute bg-cover bg-center bg-no-repeat h-screen w-full -z-10 opacity-50"/>
    </div>
  )
}

export default Landing