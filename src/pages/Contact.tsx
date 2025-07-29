// src/pages/Contact.tsx

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("VITE_WEB3FORMS_ACCESS_KEY is not set.");
      setStatus('Configuration error. Could not send form.');
      return;
    }
    const dataToSend = {
      access_key: accessKey,
      name: `${formData.firstName} ${formData.lastName}`,
      ...formData,
    };
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    // --- COLOR FIX: New background gradient ---
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 flex items-center justify-center p-6">
      
      {/* --- COLOR FIX: Updated glass card with a cyan border --- */}
      <div className="bg-slate-800/10 backdrop-blur-xl border border-cyan-400/20 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          
          <div className="lg:w-1/2 p-12 flex flex-col justify-center items-start">
            <h2 className="text-5xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-cyan-300 text-xl mb-8 font-medium">I'd like to hear from you!</p>
            <p className="text-gray-300 mb-12 leading-relaxed text-lg">
              If you have any inquiries or just want to say hi, please use the contact form!
            </p>
            
            <div className="flex items-center gap-4 mb-12">
              {/* --- COLOR FIX: Email icon gradient --- */}
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <a href="mailto:gautampankuta@gmail.com" className="text-gray-200 text-lg hover:text-white hover:underline">gautampankuta@gmail.com</a>
            </div>

            <div className="flex items-center gap-4">
              {/* --- COLOR FIX: LinkedIn icon gradient --- */}
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-sky-600 to-cyan-700 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-sky-500/50">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* --- COLOR FIX: GitHub icon gradient --- */}
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-slate-500/50">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-3 text-gray-300">First Name</label>
                  <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 hover:bg-white/20" placeholder="First Name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-3 text-gray-300">Last Name</label>
                  <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 hover:bg-white/20" placeholder="Last Name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3 text-gray-300">Email *</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 hover:bg-white/20" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-gray-300">Message</label>
                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none hover:bg-white/20" placeholder="Your message here..."></textarea>
              </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-sm text-gray-400 h-5">{status}</p>
                {/* --- COLOR FIX: Submit button gradient --- */}
                <button type="submit" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105">
                  Send
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;