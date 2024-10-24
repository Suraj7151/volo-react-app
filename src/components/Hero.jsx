/* eslint-disable no-unused-vars */
import React from 'react';
import ellipse from '../assets/Ellipse 2895.png';

const Hero = () => {
  return (
    <section className="font-syne bg-white py-10  text-left ">
      <div className="max-w-3xl relative">
        <div className="flex items-center space-x-2">
            <img src={ellipse} alt="" className='w-[19px] h-[19px]'/>
            <p className=" font-medium text-xl">Get Exclusive</p>
        </div>
        <h4 className="text-9xl font-medium mb-6">Enhance Your <br /> Process</h4>
        <button className="bg-[#1B9D20] w-48 drop-shadow-2xl text-white py-4 rounded-[57.5px] shadow-lg absolute top-[210px] left-72">
          7-Day Trial
        </button>
      </div>
      {/* Add design elements below if needed */}
    </section>
  );
};

export default Hero;