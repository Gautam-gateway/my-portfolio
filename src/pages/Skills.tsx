// src/pages/Skills.tsx

import React from 'react';

// --- Reusable Skill Card Component ---
// The styling and hover effects on this component are already perfect for an individual card.
interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg 
                   transition-all duration-300 ease-in-out
                   hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative flex items-start gap-4">
        <div className="bg-sky-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 
                        rounded-full p-3 transition-colors duration-300 
                        group-hover:bg-white dark:group-hover:bg-sky-500 dark:group-hover:text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};


// --- Main Skills Page Component ---
const Skills = () => {
  const skillsData = [
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-7h3m-3 6h3M9 5a2 2 0 00-2 2v2a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2H9z"></path></svg>,
      title: "AI & Machine Learning",
      description: "Core expertise in Python, NLP, and Deep Learning. Proficient with frameworks like PyTorch, Scikit-learn, and Pandas to build and train intelligent models from complex datasets."
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10h6c2 0 2.343 2.343 2.343 2.343m-9.343-2.343A8 8 0 0117.657 18.657m0 0A8 8 0 016.343 7.343m11.314 11.314a8 8 0 01-11.314 0"></path></svg>,
      title: "Generative AI & LLMs",
      description: "Specialized in creating advanced AI solutions using Generative AI. Experienced with LangChain and LangGraph for building complex agentic workflows and language model applications."
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l-4 4-4-4M6 16l-4-4 4-4"></path></svg>,
      title: "Full Stack Development",
      description: "Building complete web applications to deploy ML models. Skilled in React for dynamic front-ends and Django for robust back-ends. Solid foundation in HTML, CSS, & JavaScript."
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m-16 0h16m-16 0v1.5c0 1.933 2.686 3.5 6 3.5s6-1.567 6-3.5V7"></path></svg>,
      title: "Data & Visualization",
      description: "Managing and querying databases like MySQL and SQLite. Skilled in transforming data into clear insights using Matplotlib, Seaborn, Tableau, and Power BI."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 pb-24">
      
      {/* Top Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 dark:from-sky-800 dark:via-blue-900 dark:to-indigo-950 pt-32 pb-48 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold">My Professional Skillset</h1>
        <p className="mt-4 text-xl text-sky-200">A showcase of my core competencies and technical abilities.</p>
      </div>

      {/* --- THE FIX IS HERE --- */}
      {/* This container now creates a two-column grid for the individual skill cards, */}
      {/* instead of being a single large card itself. */}
      <div className="relative container mx-auto px-4 -mt-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Skills;