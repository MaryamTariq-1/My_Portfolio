import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="text-gray-900 bg-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 shadow-sm" style={{ background: 'linear-gradient(to right, #b1b5ff, #f3f6fa)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Maryam Tariq</div>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-8 font-medium text-sm">
            {["Home", "About", "Experience", "Projects", "Skills", "Education", "Contact"].map((item, index) => (
                <li key={index}>
                <a
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-blue-500 transition ${
                    item === "Home" ? "text-blue-600 font-semibold" : "text-gray-800"
                    }`}
                >
                    {item}
                </a>
                </li>
            ))}
            </ul>

            {/* Contact Me Button */}
            <a
            href="#contact"
            className="hidden md:inline-block text-white font-semibold px-6 py-2 rounded-full"
            style={{
                background: 'linear-gradient(to right, #9F7AEA, #4299E1)', // Purple to blue
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
            >
            Contact Me
            </a>
        </div>
        </nav>

    {/*Hero section*/}
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-6 pt-28">
    <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT: Text */}
        <div className="flex-1" data-aos="fade-right">
        <p className="text-indigo-500 text-lg mb-2">Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-4">Maryam Tariq</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Machine Learning & Web Developer</h2>
        <p className="text-base text-gray-600 mb-8 max-w-md">
            I love building smart applications that solve real-world problems, blending ML intelligence with beautiful frontend design.
        </p>
        <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition">Get In Touch →</a>
            <a href="/Maryam_CV.pdf" download className="border border-indigo-500 text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition">Download CV ⬇️</a>
        </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex-1 relative" data-aos="fade-left">
        <div className="relative w-72 h-72 mx-auto md:mx-0">
            <img src="/profile.jpg" alt="Maryam Tariq" className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg" />
            {/* Tech Tags */}
            <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 bg-white border px-3 py-1 rounded-full text-xs shadow text-indigo-600 font-medium">React</span>
            <span className="absolute bottom-0 left-0 transform -translate-x-4 translate-y-4 bg-white border px-3 py-1 rounded-full text-xs shadow text-pink-600 font-medium">Java</span>
            <span className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2 bg-white border px-3 py-1 rounded-full text-xs shadow text-green-600 font-medium">Node.js</span>
        </div>
        </div>
    </div>
    </section>


      {/* About */}
      <section id="about" className="bg-indigo-50" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-6">About Me</h2>
          <p className="text-lg mb-4">
            I’m <span className="font-semibold text-indigo-600">Maryam Tariq</span>, a Computer Science student and <span className="text-indigo-600">ML & Web Developer</span>. I love solving real-world problems through smart applications.
          </p>
          <p className="text-base text-gray-700">
            Currently interning at <span className="font-semibold text-indigo-600">CodexCue</span>, working on ML models, hyperparameter tuning, and NLP tasks. Passionate about impactful, data-driven solutions.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-12">My Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {["HTML", "CSS", "JavaScript", "React", "ML"].map((skill, index) => (
              <div key={index} className="bg-indigo-50 hover:bg-indigo-100 p-6 rounded-xl shadow text-center">
                <div className="text-3xl text-indigo-600 mb-2">⚙️</div>
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[{
              title: 'AtmosMonitor',
              desc: 'Real-time air quality monitoring platform using MERN + ML.',
              github: 'https://github.com/yourusername/atmosmonitor',
              live: 'https://yourproject.vercel.app',
              stack: ['MongoDB', 'React']
            }, {
              title: 'Spam Classifier',
              desc: 'ML model to classify spam emails using sklearn.',
              github: 'https://github.com/yourusername/spam-classifier',
              live: '',
              stack: ['Python', 'Scikit-Learn']
            }].map((proj, i) => (
              <div key={i} className="bg-indigo-50 hover:bg-indigo-100 p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">{proj.title}</h3>
                <p className="text-gray-700 mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.stack.map((tech, j) => (
                    <span key={j} className="bg-white text-indigo-700 border border-indigo-200 text-sm font-medium px-3 py-1 rounded-full shadow-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-6 text-base font-medium">
                  <a href={proj.github} target="_blank" className="text-indigo-600 hover:text-indigo-800">GitHub</a>
                  {proj.live && <a href={proj.live} target="_blank" className="text-green-600 hover:text-green-800">Live</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-indigo-50" data-aos="fade-up">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">Contact Me</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg" />
            <textarea rows="5" placeholder="Your Message" className="w-full p-4 border border-gray-300 rounded-lg"></textarea>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 border-t border-gray-200 text-center" data-aos="fade-up">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/yourusername" target="_blank" className="text-gray-600 hover:text-indigo-600 text-2xl">🐱</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-gray-600 hover:text-indigo-600 text-2xl">💼</a>
        </div>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} <span className="font-semibold text-indigo-600">Maryam Tariq</span>. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
