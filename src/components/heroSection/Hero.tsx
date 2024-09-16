import React from 'react';
import our_team from '../../assets/our_team.jpg';
import woman1 from '../../assets/woman1.jpg';
import man from '../../assets/man.jpg';
import woman2 from '../../assets/woman2.jpg';
import sketch from '../../assets/sketch.jpg'
import { AiFillPieChart } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { BsBasket3Fill } from "react-icons/bs";


const Hero: React.FC = () => {
  return (
    <div className=' bg-white flex flex-col items-center  mx-20 '>
      {/* first sec */}
      <div className='flex items-center justify-between w-full px-20'>
      <div className='max-w-lg'>
          <h1 className="text-4xl font-bold">
            The Art and Science <br />
            <div className='relative flex'>
              <img
                src={woman1}
                alt='photo'
                className='w-8 h-8 rounded-full absolute top-2'
              />
              <img
                src={man}
                alt='photo'
                className='w-8 h-8 rounded-full absolute top-2 left-6'
              />
              <img
                src={woman2}
                alt='photo'
                className='w-8 h-8 rounded-full absolute top-2 left-11'
              />
              <span className="ml-20">of Crafting</span>
            </div>
            <h1>Exceptional Designs</h1>
          </h1>
          <p className='text-sm mt-4'>
            Transforming ideas into stellar designs requires a dynamic blend <br />
            of creativity, technical expertise, and user-focused thinking.
          </p>
         
        </div>

        <div className='pt-6 flex items-center bg-gray-300 h-auto'>
          <img
            src={our_team}
            alt='Photo'
            className='w-60 h-80 rounded-full mr-8'
          />
        </div>
      </div>

      {/* second sec */}
      <div className='flex items-center justify-between w-full px-20 -mt-14'>
      <div >
          <a
            href="https://resida-nine.vercel.app/"
            className="text-sm font-bold py-2 mb-4 px-6 rounded-full bg-gray-700 hover:bg-gray-500 text-gray-200 mt-6 inline-block"
          >
            Discover
          </a>

          <div className='mt-4'>
  <div className="mb-4">
    <h6 className='flex justify-between items-center text-sm'>
      <span className='flex items-center space-x-3'>
        <AiFillPieChart /> 
        <span>PITCH DECKS</span>
      </span>
      <FaArrowRight className='ml-12' />
    </h6>
    <p className='ml-8 text-sm'>The latest trends</p>
  </div>

  <div className="mb-4">
    <h6 className='flex justify-between items-center text-sm'>
      <span className='flex items-center space-x-3'>
        <FaGlobe /> 
        <span>AI PRESENTATIONS</span>
      </span>
      <FaArrowRight className='ml-12' />
    </h6>
    <p className='ml-8 text-sm'>1000+ examples</p>
  </div>

  <div>
    <h6 className='flex justify-between items-center text-sm'>
      <span className='flex items-center space-x-3'>
        <BsBasket3Fill /> 
        <span>E-COMMERCE</span>
      </span>
      <FaArrowRight className='ml-12' />
    </h6>
    <p className='ml-8 text-sm'>Transforming ideas <br /> into stellar designs</p>
  </div>
</div>
          </div>
          <div className='flex justify-end gap-8 w-full -mt-10'>
          <div className='bg-gray-900 rounded-2xl text-white pl-8 pr-8 '>
          <h2 className='mt-4'>TESTIMONIALS</h2>
          <div className='mt-4'>
            <h5>UX decisions</h5>
            <div className='relative w-full flex items-center'>
            <div className='bg-gray-400 h-2 rounded-full w-[150px]'>
              <div className='bg-blue-300 h-full rounded-full w-[90%]'></div>
            </div>
            <div className=' ml-2 text-sm'>90+</div>
            </div>
            
          </div>

          <div className='mt-4'>
            <h5>Business projects</h5>
            <div className='relative w-full flex items-center'>
            <div className='bg-gray-400 h-2 rounded-full w-[150px]'>
              <div className='bg-yellow-300 h-full rounded-full w-[60%]'></div>
            </div>
            <div className='ml-2 text-sm'>60+</div>
            </div>
            
          </div>

          <div className='mt-4 mb-5'>
            <h5>Inovative solutions</h5>
            <div className='relative w-full flex  items-center'>
            <div className='bg-gray-400 h-2 rounded-full w-[150px] '>
              <div className='bg-white h-full rounded-full  w-[30%]  '></div>
            </div>
            <div className=' ml-2 text-sm'>30+</div>
            </div>
            
          </div>
          </div>

          {/* sketch sec */}
          <div>
            <img src={sketch} alt='photo' className='w-40 h-50'/>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Hero;

