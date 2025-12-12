export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section - Split Screen */}
      <section 
        id="hero" 
        className="min-h-screen flex items-center px-4 md:px-8"
        aria-label="Introduction"
      >
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="animate-fadeInUp space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for work
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              William Haraldsson
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Building modern web applications with clean code and user-focused design. 
              Passionate about creating efficient, scalable solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium"
                aria-label="See my projects"
              >
                See Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition-colors duration-300 font-medium"
                aria-label="Contact me"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="animate-fadeIn animation-delay-400 flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl border border-gray-700 shadow-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <p className="text-gray-400 text-sm">Lägg din bild här:<br/>public/images/william.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 px-4 bg-gray-900/50"
        aria-labelledby="about-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h2 
            id="about-heading"
            className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-3"
          >
            <span className="text-blue-500">//</span>About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-300 text-lg space-y-4 leading-relaxed">
              <p>
                I'm a passionate full stack developer with a strong focus on creating efficient, 
                scalable, and user-friendly web applications. With expertise in modern JavaScript 
                frameworks and cloud technologies, I bring ideas to life through clean code and 
                thoughtful design.
              </p>
              <p>
                My journey in software development has equipped me with a diverse skill set, 
                ranging from frontend frameworks to backend architectures and DevOps practices. 
                I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>
            <div className="text-gray-300 text-lg space-y-4 leading-relaxed">
              <p>
                When I'm not coding, I enjoy contributing to open-source projects and exploring 
                new technologies that can solve real-world problems more effectively.
              </p>
              <p>
                I thrive in collaborative environments where innovation and quality are valued, 
                and I'm always excited to take on new challenges that push the boundaries of 
                what's possible with modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className="py-20 px-4"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h2 
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-3"
          >
            <span className="text-blue-500">//</span>SKILLS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend</h3>
              <ul className="space-y-2 text-gray-300" role="list">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 / CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Backend</h3>
              <ul className="space-y-2 text-gray-300" role="list">
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>REST APIs</li>
                <li>PostgreSQL / MongoDB</li>
                <li>Authentication</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 text-green-400">DevOps</h3>
              <ul className="space-y-2 text-gray-300" role="list">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>Vercel / AWS</li>
                <li>CI/CD Pipelines</li>
                <li>Linux Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        className="py-20 px-4 bg-gray-900/50"
        aria-labelledby="experience-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h2 
            id="experience-heading"
            className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-3"
          >
            <span className="text-blue-500">//</span>EXPERIENCE
          </h2>
          <div className="space-y-8">
            {/* Experience 1 */}
            <article className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Senior Full Stack Developer
              </h3>
              <p className="text-gray-400 mb-3">Company Name • 2022 - Present</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside" role="list">
                <li>Led development of scalable web applications serving 100K+ users</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Architected microservices infrastructure using Docker and Kubernetes</li>
              </ul>
            </article>

            {/* Experience 2 */}
            <article className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Frontend Developer
              </h3>
              <p className="text-gray-400 mb-3">Another Company • 2020 - 2022</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside" role="list">
                <li>Built responsive web applications using React and TypeScript</li>
                <li>Improved page load performance by 40% through optimization</li>
                <li>Collaborated with designers to implement pixel-perfect UI</li>
                <li>Integrated REST APIs and managed application state</li>
              </ul>
            </article>

            {/* Experience 3 */}
            <article className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Junior Developer
              </h3>
              <p className="text-gray-400 mb-3">Startup Inc • 2019 - 2020</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside" role="list">
                <li>Developed features for e-commerce platform using MERN stack</li>
                <li>Participated in agile development process and daily standups</li>
                <li>Fixed bugs and improved codebase quality</li>
                <li>Learned best practices in software development</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="py-20 px-4 overflow-hidden"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-3 px-4"
          >
            <span className="text-blue-500">//</span>MINA PROJEKT
          </h2>
          <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800 px-4">
            {/* Project 1 */}
            <article className="bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-[1.02] min-w-[380px] md:min-w-[480px] snap-center flex-shrink-0 backdrop-blur-sm">
              <div className="relative h-56 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-6xl">🛍️</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  E-Commerce Platform
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  A full-featured online store with payment integration, inventory management, 
                  and real-time order tracking. Built with modern technologies for optimal performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-medium">PostgreSQL</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium">Stripe</span>
                </div>
                <a 
                  href="https://github.com/imatonk/project1" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  aria-label="View E-Commerce Platform on GitHub"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Project 2 */}
            <article className="bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-[1.02] min-w-[380px] md:min-w-[480px] snap-center flex-shrink-0 backdrop-blur-sm">
              <div className="relative h-56 bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center">
                <div className="text-6xl">✅</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Task Management App
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Collaborative task manager with real-time updates, team workspaces, 
                  and smart notifications. Designed for productivity and seamless teamwork.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium">MongoDB</span>
                  <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-xs font-medium">Socket.io</span>
                </div>
                <a 
                  href="https://github.com/imatonk/project2" 
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  aria-label="View Task Management App on GitHub"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Project 3 */}
            <article className="bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-[1.02] min-w-[380px] md:min-w-[480px] snap-center flex-shrink-0 backdrop-blur-sm">
              <div className="relative h-56 bg-gradient-to-br from-green-500/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl">🌤️</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Weather Dashboard
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Real-time weather application with forecasts, interactive maps, 
                  and location-based insights. Clean UI with smooth animations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-medium">Tailwind</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium">OpenWeather API</span>
                  <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-xs font-medium">Vercel</span>
                </div>
                <a 
                  href="https://github.com/imatonk/project3" 
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
                  aria-label="View Weather Dashboard on GitHub"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 px-4 bg-gray-900/50"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-5xl mx-auto">
          <h2 
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-3"
          >
            <span className="text-blue-500">//</span>CONTACT
          </h2>
          <div className="text-center">
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:William_haraldsson@outlook.com" 
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium"
              aria-label="Send email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <a 
              href="https://github.com/imatonk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 font-medium"
              aria-label="Visit GitHub profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/william-haraldsson-82266a24b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors duration-300 font-medium"
              aria-label="Visit LinkedIn profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} William Haraldsson. All rights reserved.</p>
      </footer>
    </main>
  );
}
