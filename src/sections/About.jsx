import React from 'react'

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating beautiful and functional web experiences.
            Here's my journey so far.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Bachelor's in Computer Science</h4>
                <p className="text-gray-400">University Name</p>
                <p className="text-sm text-gray-500">2020 - 2024</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">High School Diploma</h4>
                <p className="text-gray-400">School Name</p>
                <p className="text-sm text-gray-500">2018 - 2020</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Work Experience</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold">Frontend Developer</h4>
                <p className="text-gray-400">Company Name</p>
                <p className="text-sm text-gray-500">2024 - Present</p>
                <p className="text-sm text-gray-300 mt-2">
                  Developing responsive web applications using React and modern technologies.
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold">Intern Developer</h4>
                <p className="text-gray-400">Startup Name</p>
                <p className="text-sm text-gray-500">2023 - 2024</p>
                <p className="text-sm text-gray-300 mt-2">
                  Built web components and assisted in full-stack development.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Tailwind</span>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-pink-600 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-pink-600 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-pink-600 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">Git</span>
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">VS Code</span>
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
