import React from 'react';
import { RiShareCircleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div className='font-custom text-white' id='projects'>
        <h1 className='text-4xl font-bold mx-5 md:mx-20 mt-16 mb-10'>Projects.</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between mx-5 md:mx-40 font-custom'>
        <div className='w-full md:w-80 h-[450px] bg-gradient-to-br from-gray-700 via-gray-500 to-gray-300 rounded-md mb-10 flex flex-col items-center pt-3 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out animate-shimmer'>
          <img src="pro.png" alt="Project Thumbnail" className='w-[95%] h-[60%] rounded-md shadow-lg' />
          <div className='flex flex-col ml-3 my-4'>
            <span className='font-bold text-2xl text-white '>Project ShowCase.</span>
            <span className='text-sm font-semibold text-gray-300 '>A platform that enables developers to upload, share, and showcase their projects, including both frontend and backend code with thumbnails and source links.</span>
            <div className='flex gap-3 mt-4'>
              <span className='text-white bg-green-600 px-2 font-semibold rounded-md text-sm shadow-md hover:bg-green-700 transition-colors duration-200'>
                <a href="https://projectshowcase-6mkz.onrender.com/" target='_blank' rel="noopener noreferrer" className='flex gap-1 items-center'><RiShareCircleFill/> Live</a>
              </span>
              <span className='text-white bg-red-600 px-2 font-semibold rounded-md text-sm shadow-md  hover:bg-red-700 transition-colors duration-200'>
                <a href="https://github.com/Anand19987i/ProjectShowcase" target='_blank' rel="noopener noreferrer" className='flex items-center gap-1'><FaGithub/> GitHub</a>
              </span>
            </div>
          </div>
        </div>
        <div className='w-full md:w-80 h-[450px] bg-gradient-to-br from-gray-700 via-gray-500 to-gray-300 rounded-md mb-10  flex flex-col items-center pt-3 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out animate-shimmer'>
          <img src="blurb.png" alt="Project Thumbnail" className='w-[95%] h-[60%] rounded-md shadow-lg' />
          <div className='flex flex-col ml-3 my-4'>
            <span className='font-bold text-2xl text-white '>Blurb - Social Media App.</span>
            <span className='text-sm font-semibold text-gray-300 '>A social media platform that allows users to share thoughts, ideas, and opinions through posts and discussions, inspired by Quora.</span>
            <div className='flex gap-3 mt-4'>
              <span className='text-white bg-green-600 px-2 font-semibold rounded-md text-sm shadow-md hover:bg-green-700 transition-colors duration-200'>
                <a href="https://blurb-azo3.onrender.com/" target='_blank' rel="noopener noreferrer" className='flex gap-1 items-center'><RiShareCircleFill/> Live</a>
              </span>
              <span className='text-white bg-red-600 px-2 font-semibold rounded-md text-sm  shadow-md hover:bg-red-700 transition-colors duration-200'>
                <a href="https://github.com/Anand19987i/blurb/" target='_blank' rel="noopener noreferrer" className='flex items-center gap-1'><FaGithub/> GitHub</a>
              </span>
            </div>
          </div>
        </div>
        <div className='w-full md:w-80 h-[450px] bg-gradient-to-br from-gray-700 via-gray-500 to-gray-300 rounded-md mb-10  flex flex-col items-center pt-3 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out animate-shimmer'>
          <img src="rec.png" alt="Project Thumbnail" className='w-[95%] h-[60%] rounded-md shadow-lg' />
          <div className='flex flex-col ml-3 my-4'>
            <span className='font-bold text-2xl text-white '>Recruitify - Job Portal.</span>
            <span className='text-sm font-semibold text-gray-300 '>A comprehensive job portal that connects employers with job seekers, allowing employers to post listings and candidates to find opportunities easily.</span>
            <div className='flex gap-3 mt-4'>
              <span className='text-white bg-green-600 px-2 font-semibold rounded-md text-sm shadow-md hover:bg-green-700 transition-colors duration-200'>
                <a href="https://recruitifyy.onrender.com/" target='_blank' rel="noopener noreferrer" className='flex gap-1 items-center'><RiShareCircleFill/> Live</a>
              </span>
              <span className='text-white bg-red-600 px-2 font-semibold rounded-md text-sm shad ow-md hover:bg-red-700 transition-colors duration-200'>
                <a href="https://github.com/Anand19987i/recruitify" target='_blank' rel="noopener noreferrer" className='flex items-center gap-1'><FaGithub/> GitHub</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -450px 0;
          }
          100% {
            background-position: 450px 0;
          }
        }

        .animate-shimmer {
          background-size: 800px 450px;
          background-image: linear-gradient(
            90deg,
            rgba(50, 50, 50, 0) 0%,
            rgba(50, 50, 50, 0.3) 50%,
            rgba(50, 50, 50, 0) 100%
          );
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
};

export default Projects;
