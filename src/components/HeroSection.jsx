import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; // Corrected from FaSquareXTwitter to FaTwitter
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react';

const HeroSection = () => {
    return (
        <div className='flex flex-col md:flex-row my-10 justify-center font-custom' id="about">
            {/* Text Section */}
            <div className='text-white font-bold my-8 text-center md:text-left md:mr-8'>
                <span className='text-3xl sm:text-4xl md:text-5xl'>
                    Hi, I'm Anand Pandey
                </span>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    Building FullStack Web Applications
                </h1>
                <p className='text-lg font-normal text-white mt-4'>
                    Passionate about creating scalable solutions
                </p>
                <span className='block text-lg sm:text-xl font-normal text-white mt-2'>
                    Always learning and evolving with new technologies and frameworks.
                </span>
                <div className="flex gap-5 my-6 justify-center md:justify-start text-3xl">
                    <span className="cursor-pointer transition-all hover:-translate-y-1">
                        <a href="https://www.github.com/Anand19987i" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </span>
                    <span className="cursor-pointer transition-all hover:-translate-y-1">
                        <a href="https://www.linkedin.com/in/anand-pandey-5b5875253/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </span>
                    <span className="cursor-pointer transition-all hover:-translate-y-1">
                        <a href="https://x.com/AnandPande57144" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>
                    </span>
                    <span className="cursor-pointer transition-all hover:-translate-y-1">
                        <a href="https://leetcode.com/u/Cipherdex/" target="_blank" rel="noopener noreferrer">
                            <SiLeetcode />
                        </a>
                    </span>
                </div>
            </div>

            {/* Image Section */}
            <div className='w-full md:w-1/2 h-auto rounded-md'>
                <img src="carbon.png" alt="Carbon Logo" className='w-full h-auto rounded-md hover:animate-pulse cursor-pointer' />
            </div>
        </div>
    );
}

export default HeroSection;
