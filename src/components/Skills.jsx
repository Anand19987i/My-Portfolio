import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', logo: 'javascript.png' },
    { name: 'HTML', logo: 'html.png' },
    { name: 'CSS', logo: 'css.png' },
    { name: 'React', logo: 'reactjs.png' },
    { name: 'Tailwind', logo: 'tailwind.png' },
    { name: 'Bootstrap', logo: 'bootstrapp.png' },
    { name: 'Redux', logo: 'redux.png' },
    { name: 'Node.js', logo: 'nodejs.png' },
    { name: 'MongoDB', logo: 'mongodb.png' },
    { name: 'Git', logo: 'git.png' },
    { name: 'Docker', logo: 'docker.png' },
    { name: 'C++', logo: 'cpp.png' }
  ];

  return (
    <div className="py-16 font-custom" id='skills'>
      <h1 className="text-4xl font-bold mx-20 mb-10 text-white">Skills.</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 mx-10 md:mx-20 lg:mx-40">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-xl transition-tranform duration-300 ease-in-out cursor-pointer hover:-translate-y-2"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-16 h-16 mb-4"
            />
            <span className="text-white text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
