import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Cpu, 
  Code, 
  Database, 
  Globe, 
  Award, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  ChevronRight,
  Menu,
  X,
  Layers,
  Zap,
  Users,
  Trophy
} from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-slate-900 tracking-tight">
          Snaha<span className="text-blue-600">Paul</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#cv" 
            className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100 absolute top-full left-0 right-0 shadow-lg py-6 px-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#cv" 
            className="w-full py-3 bg-slate-900 text-white text-center rounded-lg font-medium flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-slate-900 mb-2">{children}</h2>
    {subtitle && <p className="text-slate-500 max-w-2xl">{subtitle}</p>}
    <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
              Available for Projects
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-10 leading-tight">
              Snaha Paul
            </h1>
            <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed">
              I am a Computer Science and Engineering student with a strong interest in IoT, embedded systems, and software development. I enjoy building real-world technology solutions using sensors, microcontrollers, and cloud platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-100 transition-all">
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 shadow-2xl relative z-10">
              <img 
                src="/profile.jpg" 
                alt="Snaha Paul" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-3xl -z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-slate-100 rounded-3xl -z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>About Me</SectionHeading>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed">
                I am an undergraduate student pursuing a B.Sc. in Computer Science & Engineering. My journey in technology is driven by a fascination with how hardware and software interact to solve complex problems.
              </p>
              <ul className="space-y-4">
                {[
                  "Undergraduate student, B.Sc. in Computer Science & Engineering",
                  "Interested in IoT, Embedded Systems, and Software Development",
                  "Experience in Arduino, ESP32, Sensor Integration, and Cloud Database",
                  "Passionate about solving real-world problems using technology"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={14} className="text-blue-600" />
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 mb-1">10+</h3>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Projects Built</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 mb-1">5.00</h3>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">SSC & HSC GPA</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 col-span-full sm:col-span-1">
                <h3 className="text-3xl font-bold text-slate-900 mb-1">AIUB</h3>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="My technical expertise across various domains of technology.">
            Skills & Expertise
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Programming", 
                icon: <Code className="text-blue-600" />, 
                skills: ["C", "C++", "Python", "Java"] 
              },
              { 
                title: "IoT Development", 
                icon: <Cpu className="text-blue-600" />, 
                skills: ["Arduino", "ESP32", "Sensor Integration"] 
              },
              { 
                title: "Protocols", 
                icon: <Zap className="text-blue-600" />, 
                skills: ["HTTP", "MQTT", "UART", "I2C"] 
              },
              { 
                title: "Database", 
                icon: <Database className="text-blue-600" />, 
                skills: ["SQL", "NoSQL", "Firebase", "Supabase"] 
              },
              { 
                title: "Web Development", 
                icon: <Globe className="text-blue-600" />, 
                skills: ["HTML", "CSS", "JavaScript", "React"] 
              },
              { 
                title: "Soft Skills", 
                icon: <Users className="text-blue-600" />, 
                skills: ["Problem Solving", "Teamwork", "Leadership"] 
              },
            ].map((category, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-lg border border-slate-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="A selection of my recent work in IoT and software development.">
            Featured Projects
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "IoT Device Monitoring System",
                desc: "A comprehensive system for real-time monitoring of IoT devices with device-to-cloud communication capabilities.",
                tech: ["ESP32", "MQTT", "Firebase", "React"],
                link: "/IoT Device Monitoring System.jpg"
              },
              {
                title: "Sensor-Based Data Collection System",
                desc: "An automated system designed to collect environmental data using various sensors and log them for analysis.",
                tech: ["Arduino", "Sensors", "SD Module", "Python"],
                link: "/Sensor-Based Data Collection System.jpg"
              },
              {
                title: "IoT Dashboard Web Application",
                desc: "A responsive web dashboard for visualizing real-time sensor data with interactive charts and controls.",
                tech: ["React", "Chart.js", "WebSockets", "Tailwind"],
                link: "/IoT Dashboard Web Application.jpg"
              },
              {
                title: "Daily Task Management",
                desc: "A productivity application for managing daily tasks with priority levels, categories, and progress tracking.",
                tech: ["React", "LocalStorage", "Tailwind CSS", "Context API"],
                link: "/Daily Task Management.jpg"
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  <img 
                    src={project.link}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-all"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors"
                  >
                    View on GitHub <Github size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>Experience</SectionHeading>
          <div className="space-y-8">
            {[
              {
                role: "IoT & Embedded Systems Project Developer",
                company: "Academic & Personal Projects",
                period: "2023 - Present",
                points: [
                  "Worked on device-to-device and device-to-cloud communication protocols.",
                  "Integrated various sensors (DHT11, Ultrasonic, MQ series) with microcontrollers.",
                  "Optimized power consumption for battery-operated IoT nodes."
                ]
              },
              {
                role: "Web Application Developer",
                company: "Freelance / Projects",
                period: "2024 - Present",
                points: [
                  "Built dashboards for real-time data visualization using React and Chart.js.",
                  "Implemented secure authentication and database management with Firebase.",
                  "Designed responsive and user-friendly interfaces with Tailwind CSS."
                ]
              }
            ].map((exp, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100 text-slate-500 text-sm font-bold rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>Education</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                degree: "B.Sc. in Computer Science & Engineering",
                school: "AIUB",
                result: "CGPA: 3.71",
                icon: <GraduationCap className="text-blue-600" />
              },
              {
                degree: "HSC – Science",
                school: "Mymensingh Government College",
                result: "GPA 5.00",
                icon: <BookOpen className="text-blue-600" />
              },
              {
                degree: "SSC – Science",
                school: "Mukul Niketon High School",
                result: "GPA 5.00",
                icon: <BookOpen className="text-blue-600" />
              }
            ].map((edu, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {edu.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{edu.degree}</h3>
                <p className="text-slate-600 mb-4">{edu.school}</p>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-md">
                  {edu.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Achievements & Certifications</h2>
            <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "IoT Course Certification",
              "Web Development Workshop",
              "Firebase / Supabase Database & Authentication",
              "Git & GitHub Certification",
              "Academic Scholarship (SSC & HSC GPA 5.00)"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-blue-400" />
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>Extracurricular Activities</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "ICT Olympiad Participant", icon: <Trophy /> },
              { title: "Executive Member – Science Club", icon: <Users /> },
              { title: "Class Representative – AIUB", icon: <Users /> },
              { title: "Financial Literacy Program Participant (bKash)", icon: <Layers /> }
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                  {activity.icon}
                </div>
                <span className="text-lg font-semibold text-slate-700">{activity.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Feel free to reach out for collaborations or just a friendly hello.">
            Get In Touch
          </SectionHeading>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Me</h4>
                  <p className="text-xl font-bold text-slate-900">snaha.paul@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Call Me</h4>
                  <p className="text-xl font-bold text-slate-900">+880 1XXX XXXXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-xl font-bold text-slate-900">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="pt-8 flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all">
                  <Github size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <form className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-slate-900 tracking-tight">
              Snaha<span className="text-blue-600">Paul</span>
            </a>
          </div>
          <div className="flex gap-8">
            <a href="#about" className="text-sm font-medium text-slate-500 hover:text-slate-900">About</a>
            <a href="#projects" className="text-sm font-medium text-slate-500 hover:text-slate-900">Projects</a>
            <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-slate-900">Contact</a>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Snaha Paul. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
