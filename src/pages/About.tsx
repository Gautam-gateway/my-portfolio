// src/pages/About.tsx

import aboutPageImage from '../assets/About_image.jpeg';

const About = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      
      <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-6xl h-full flex flex-col md:flex-row overflow-hidden">
        
        {/* --- THE FIX IS HERE (PART 1) --- */}
        {/* This container's job is now just to center the smaller image within its column. */}
        <div className="w-full md:w-2/5 flex items-center justify-center p-8">
          {/* --- THE FIX IS HERE (PART 2) --- */}
          {/* We apply specific, smaller dimensions and make the image a circle. */}
          <img
            src={aboutPageImage}
            alt="A visual representation for the About Me section"
            className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover shadow-2xl"
          />
        </div>

        {/* Column 2: The Text Content (No changes needed here) */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center overflow-y-auto no-scrollbar">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-sky-500 dark:text-sky-400">Who I Am</h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a passionate AI and Machine Learning Engineer based in India. I thrive on turning complex problems into elegant, automated solutions and have a deep interest in the ethical application of artificial intelligence.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-sky-500 dark:text-sky-400">My Background</h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Over the past two years, I have honed my skills in Python, TensorFlow, and PyTorch, working on projects ranging from predictive analytics to natural language processing and production-ready ML systems.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-sky-500 dark:text-sky-400">My Passion</h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                I am driven by a passion for continuous learning and innovation. Outside of coding, I enjoy trekking and exploring new music, always seeking new algorithms, techniques, and tools to stay at the forefront of AI.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;