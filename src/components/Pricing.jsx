/* eslint-disable no-unused-vars */
import React from 'react';
import line2 from '../assets/Vector 307.png';
import line3 from '../assets/Vector 306.png';
import box1 from '../assets/Group 1000002868.png'
import box2 from '../assets/Rectangle 6528.png'
import circle from '../assets/Group 1000002873.png'
const Pricing = ()=>{

    return(
        <>
            <section className='relative'>
                <div className='relative'>
                    <img src={line2} alt="" className='md:absolute md:top-[480px] md:right-[340px]'/>
                    <img src={line3} alt="" className='md:absolute md:top-[584px] md:-left-[6px]'/>
                </div>
                
                <div className="relative flex top-[530px] right-32">
                    <div className="flex relative">
                            <div className='h-56 w-44 absolute right-28 bottom-16'>
                                <img src={box1} alt="" />
                            </div>
                            <div className='flex flex-col justify-center space-y-8 items-center w-48 h-60 rounded-3xl bg-[#220F0F] z-10'>
                                {/* <p className='text-white absolute text-center'>74%</p> */}
                                    <div className='relative'>
                                        <img src={circle} alt=""/>
                                        <p className='absolute top-12 left-12 font-medium text-xl text-white'>74%</p>
                                    </div>
                                    <p className='font-poppins text-white font-medium text-[15px]'>Your Goal</p>
                            </div>
                    </div>
                    <div >
                        <div className='font-poppins w-32 h-32 bg-[#1B9D20] rounded-full relative left-14 -top-8 text-white flex flex-col justify-center items-center'>
                            <p className='font-medium text-2xl'>$14.99</p>
                            <p className='font-medium text-[16px]'>Month</p>
                        </div>
                    </div>
                </div>
                <div className='absolute -bottom-12 -left-12 '>
                    <div className='w-11 h-20 bg-[#FFAA54] p-6  rounded-full'>

                    </div>
                </div>
                <div className='absolute bottom-0 left-36 w-44'>
                    <p className='font-medium text-lg'>Many programs one Subscription</p>
                </div>
            </section>
        </>
    );
};
export default Pricing;