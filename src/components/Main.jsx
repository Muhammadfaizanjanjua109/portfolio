'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Briefcase, User, Mail, GitHub, LinkedIn, ExternalLink, LinkedinIcon, Github, MailIcon, CodeIcon, BriefcaseIcon, GithubIcon, ServerIcon, ClockIcon } from 'lucide-react';

const Main = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const skills = [
    // Frontend Frameworks & Libraries
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'Vue.js', level: 85, category: 'Frontend' },
    { name: 'Next.js', level: 88, category: 'Frontend' },
   
    // State Management
    { name: 'Redux', level: 85, category: 'State Management' },
    { name: 'Pinia', level: 80, category: 'State Management' },
    { name: 'Vuex', level: 82, category: 'State Management' },
    { name: 'Context API', level: 85, category: 'State Management' },
   
    // Backend & Database
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'GraphQL', level: 78, category: 'Backend' },
    { name: 'RESTful APIs', level: 85, category: 'Backend' },
    
    // Languages
    { name: 'JavaScript', level: 90, category: 'Languages' },
    { name: 'TypeScript', level: 85, category: 'Languages' },
    { name: 'HTML/CSS', level: 90, category: 'Languages' },
   
    // CSS Frameworks & Tools
    { name: 'Tailwind CSS', level: 88, category: 'Styling' },
    { name: 'Material-UI', level: 85, category: 'Styling' },
    { name: 'Shade-Cn', level: 85, category: 'Styling' },
    { name: 'Radix-UI', level: 85, category: 'Styling' },
    { name: 'Styled Components', level: 82, category: 'Styling' },
    { name: 'SASS/SCSS', level: 85, category: 'Styling' },
   
    // DevOps & Tools
    { name: 'Git', level: 88, category: 'Tools' },
    { name: 'Vitest', level: 80, category: 'Testing' },
   
    // Build Tools
    { name: 'Webpack', level: 80, category: 'Build Tools' },
    { name: 'Vite', level: 85, category: 'Build Tools' },
    
    // Additional Skills
    { name: 'Responsive Design', level: 90, category: 'Web Development' },
    { name: 'Performance Optimization', level: 85, category: 'Web Development' },
    { name: 'SEO', level: 75, category: 'Web Development' },
    { name: 'WebSockets', level: 80, category: 'Web Development' }
   ];
  const handleSkipLink = (e) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };
  const projects = [
    {
      title: 'Network Monitoring Dashboard',
      company: 'OpenNMS',
      role: 'Vue.js Developer',
      description: 'Led the development of a real-time network monitoring dashboard using Vue.js and TypeScript. Implemented complex data visualization features, real-time alerts, and system health monitoring components.',
      technologies: ['Vue.js', 'TypeScript', 'D3.js', 'GraphQL', 'Jest'],
      duration: '2023 - Present',
      link: '#'
    },
    {
      title: 'TeleHealth / Telxy',
      company: 'BellMedex',
      role: 'Frontend Developer',
      description: 'Built a comprehensive telehealth platform enabling virtual consultations, appointment scheduling, and electronic health records management. Implemented responsive design and real-time chat features.',
      technologies: ['React', 'Redux', 'WebRTC', 'Socket.io', 'Tailwind CSS'],
      duration: '2022 - 2023',
      link: '#'
    },
    {
      title: 'EHR Management System',
      company: 'BellMedex',
      role: 'Frontend Developer',
      description: 'Developed a modern electronic health records system with advanced patient data management, appointment scheduling, and billing integration. Implemented role-based access control and HIPAA compliance features.',
      technologies: ['React', 'TypeScript', 'Material-UI', 'Redux', 'RESTful APIs'],
      duration: '2022',
      link: '#'
    },
    {
      title: 'Enterprise Resource Management',
      company: 'Joyn Digital',
      role: 'MERN Stack Developer',
      description: 'Built a full-stack enterprise resource planning system with inventory management, employee tracking, and financial reporting features. Implemented real-time updates and data synchronization.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Docker'],
      duration: '2021 - 2022',
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      company: 'Freelance',
      role: 'Full Stack Developer',
      description: 'Developed a scalable e-commerce platform with features including product management, shopping cart, payment integration, and order tracking. Implemented responsive design and SEO optimization.',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS', 'Tailwind CSS'],
      duration: '2021',
      link: '#'
    },
    {
      title: 'Real Estate Management System',
      company: 'Freelance',
      role: 'Full Stack Developer',
      description: 'Created a comprehensive real estate management platform featuring property listings, virtual tours, tenant management, and automated rent collection. Implemented advanced search and filtering capabilities.',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express', 'AWS S3'],
      duration: '2021',
      link: '#'
    },
    {
      title: 'Learning Management System',
      company: 'Freelance',
      role: 'Frontend Developer',
      description: 'Built an interactive learning management system with course creation, student progress tracking, and assessment tools. Implemented video streaming and real-time collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebRTC', 'Redux'],
      duration: '2020',
      link: '#'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 md:p-8">
      {/* Header */}
      <a 
        href="#main-content"
        onClick={handleSkipLink}
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white"
      >
        Skip to main content
      </a>
      <header className="max-w-6xl mx-auto mb-12 md:mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Muhammad Faizan
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Full Stack Developer
        </motion.p>
      </header>

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto mb-8 md:mb-12">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:space-x-8">
          {['about', 'skills', 'projects'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`text-lg capitalize px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === section 
                  ? 'text-blue-400 bg-gray-800/50 shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
        {activeSection === 'about' && (
  <motion.div
    key="about"
    {...fadeInUp}
    transition={{ duration: 0.3 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
  >
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate Full Stack Developer with a mission to transform 
          innovative ideas into robust, user-centric digital solutions. 
          Specializing in the MERN stack (MongoDB, Express, React / Vue, Node.js), 
          I bring a holistic approach to web development that bridges 
          creativity with technical excellence.
        </p>
        <p className="text-gray-300 leading-relaxed">
          More than just writing code, I'm committed to solving real-world 
          problems through technology. Each project is an opportunity to 
          push boundaries, optimize performance, and create meaningful 
          digital experiences that make a difference.
        </p>
      </div>
      <div className="flex space-x-4 pt-4">
        <a 
          href="https://github.com/Muhammadfaizanjanjua109" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors bg-gray-800 px-4 py-2 rounded-md"
        >
          <GithubIcon size={20} />
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/follow-muhammadfaizan/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors bg-gray-800 px-4 py-2 rounded-md"
        >
          <LinkedinIcon size={20} />
          LinkedIn
        </a>
      </div>
    </div>
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">Professional Highlights</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <CodeIcon className="text-blue-400" />
          <span className="text-gray-300">
            Full Stack Development (MERN/MEVN Stack)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <BriefcaseIcon className="text-blue-400" />
          <span className="text-gray-300">
            Web Application Architecture
          </span>
        </div>
        <div className="flex items-center gap-3">
          <MailIcon className="text-blue-400" />
          <span className="text-gray-300">
            muhammadfaizanjanjua109@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ServerIcon className="text-blue-400" />
          <span className="text-gray-300">
            Performance Optimization Specialist
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ClockIcon className="text-blue-400" />
          <span className="text-gray-300">
            Available for New Projects
          </span>
        </div>
      </div>
    </div>
  </motion.div>
)}

          {activeSection === 'skills' && (
            <motion.div
              key="skills"
              {...fadeInUp}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div 
                      className="bg-blue-400 rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeSection === 'projects' && (
            <motion.div
              key="projects"
              {...fadeInUp}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:bg-gray-700/50 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.company}</p>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <a 
                    href={project.link}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>{project.role}</span>
                    <ExternalLink size={16} />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}

        
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Main;