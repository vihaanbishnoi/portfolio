import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://via.placeholder.com/400x250/ec4899/ffffff?text=Task+App",
      technologies: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather, forecasts, and weather maps using multiple APIs and beautiful visualizations.",
      image: "https://via.placeholder.com/400x250/f97316/ffffff?text=Weather+App",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-purple-600 text-white px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded hover:opacity-90 transition-opacity text-sm"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="border border-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
