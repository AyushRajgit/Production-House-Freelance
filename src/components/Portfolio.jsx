import React, { useState } from 'react';
import { Play, ExternalLink, Calendar, Award } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Portfolio categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'documentary', name: 'Documentary' },
    { id: 'music-video', name: 'Music Videos' },
    { id: 'corporate', name: 'Corporate' }
  ];

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Midnight Chronicles",
      category: "documentary",
      image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
      client: "Netflix",
      award: "Best Documentary - Sundance",
      description: "A gripping documentary exploring urban nightlife culture across major cities."
    },
    {
      id: 2,
      title: "Stellar Dreams",
      category: "commercial",
      image: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
      client: "Tesla",
      award: "Gold - Cannes Lions",
      description: "Visually stunning commercial showcasing the future of electric vehicles."
    },
    {
      id: 3,
      title: "Echoes of Tomorrow",
      category: "music-video",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
      client: "Universal Music",
      award: "MTV Video Music Award",
      description: "Futuristic music video blending practical effects with cutting-edge CGI."
    },
    {
      id: 4,
      title: "Innovation Unveiled",
      category: "corporate",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
      client: "Microsoft",
      award: null,
      description: "Corporate video highlighting breakthrough technologies and company culture."
    },
    {
      id: 5,
      title: "Ocean's Voice",
      category: "documentary",
      image: "https://images.pexels.com/photos/1438248/pexels-photo-1438248.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
      client: "National Geographic",
      award: "Emmy Nomination",
      description: "Environmental documentary about ocean conservation and marine life."
    },
    {
      id: 6,
      title: "Luxury Redefined",
      category: "commercial",
      image: "https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2022",
      client: "Rolex",
      award: "Silver - D&AD",
      description: "Elegant commercial capturing the essence of timeless luxury and craftsmanship."
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Our <span className="text-yellow-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our award-winning collection of films, commercials, and documentaries 
            that have captivated audiences worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg bg-gray-900 shadow-2xl">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full transition-colors duration-300">
                      <Play size={20} />
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-black p-3 rounded-full transition-colors duration-300">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-yellow-500 font-semibold capitalize">{project.category.replace('-', ' ')}</span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Client: {project.client}</span>
                  {project.award && (
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Award size={16} />
                      <span className="text-xs">{project.award}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Ready to create something extraordinary together?
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div> */}
        
      </div>
    </section>
  );
};

export default Portfolio;