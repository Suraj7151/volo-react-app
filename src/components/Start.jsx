/* eslint-disable no-unused-vars */
import React from 'react';
import line1 from '../assets/Vector 305.png';
import line2 from '../assets/Vector 308.png';
import polygon from '../assets/Polygon 2.png';
import ellipse from '../assets/Ellipse 2893.png';
import navigation from '../assets/Navigation.png';
const Start = ()=>{

    return(
        <>
            <section className="flex justify-center ">
                <div>
                    <img src={line1} alt="" className='absolute right-0 top-0'/>
                    <div className='w-11 h-20 bg-[#FFAA54] p-6 rounded-full absolute right-[380px] top-28'>
                        <img src={polygon} alt="" className='w-6 h-6 absolute right-3 top-7'/>
                    </div>
                    <div className='w-40 h-40 rounded-full border-[30px] border-[#1B769D] absolute right-[324px] top-64'>
                        <img src={ellipse} alt="" className='absolute top-[284px] left-10'/>
                        
                    </div>
                    {/* <img src={ellipse} alt="" className='absolute right-20 bottom-12 '/>
                    <img src={line2} alt="" className='absolute right-0 bottom-[57px] '/> */}
                    <img src={ellipse} alt="" className='md:absolute md:right-[80px] md:bottom-[0px] '/>
                    <img src={line2} alt="" className='md:absolute md:right-[0px] md:bottom-[10px] '/>
                </div>
                <div className='border-2 border-black rounded-[67.5px] px-6  py-7 flex flex-col justify-around items-center absolute right-28 top-60'>
                    <img src={navigation} alt="" className='pb-2'/>
                    <p className='text-sm text-center font-medium'>Get <br /> Start</p>
                </div>
            </section>
        </>
    );
};

export default Start;