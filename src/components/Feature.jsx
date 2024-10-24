/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../assets/Frame 1000002749.png'
const Feature = () => {
  return (
    <section className=" bg-[#D9D9D9] text-center relative w-[650px] h-[420px] rounded-3xl drop-shadow-custom">
      <div className='flex bg-[#686868] absolute bottom-0 w-full justify-around items-center py-6 rounded-3xl'>
        <p className=" text-white text-[16px] mb-4 w-[280px] text-left font-medium">
            320+ Programs On Vault Mean Endless Discovery And Instant Solutions For All Of Your Needs
        </p>
        <div className="">
            <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
