import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Play, X, Calendar, Award } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [playingProject, setPlayingProject] = useState(null);

  // Function to convert Google Drive URL to a playable format
  const convertToPlayableUrl = (url) => {
    if (url.includes('drive.google.com')) {
      const fileId = url.match(/\/d\/(.*?)\//)?.[1];
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
    }
    return url;
  };

  // Portfolio categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'documentary', name: 'Documentary' },
    { id: 'shortcontent', name: 'Short Reels' },
    { id: 'music-video', name: 'Music Videos' },
    { id: 'corporate', name: 'Corporate' }
  ];

  // Portfolio projects data (same as yours)
  const projects = [
    {
      id: 1,
      title: "Stellar Dreams",
      category: "Short Reels",
      videoUrl: "https://drive.google.com/file/d/1et1pe2zaXNPlsZ82G2dEtXrVCqRY5Pgd/view?usp=drive_link",
      image: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
      client: "Tesla",
      award: "Gold - Cannes Lions",
      description: "Visually stunning commercial showcasing the future of electric vehicles."
    },
    {
      id: 2,
      title: "Echoes of Tomorrow",
      category: "music-video",
      videoUrl: "https://drive.google.com/file/d/1et1pe2zaXNPlsZ82G2dEtXrVCqRY5Pgd/view?usp=drive_link",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
      client: "Universal Music",
      award: "MTV Video Music Award",
      description: "Futuristic music video blending practical effects with cutting-edge CGI."
    },
    {
      id: 3,
      title: "Innovation Unveiled",
      category: "corporate",
      videoUrl: "https://drive.google.com/file/d/1et1pe2zaXNPlsZ82G2dEtXrVCqRY5Pgd/view?usp=drive_link",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
      client: "Microsoft",
      award: null,
      description: "Corporate video highlighting breakthrough technologies and company culture."
    },
    {
      id: 4,
      title: "Ocean's Voice",
      category: "documentary",
      videoUrl: "https://drive.google.com/file/d/1e7HnBeHTAgAGiPggw1ISIylnqt9pz25Y/view?usp=drive_link",
      image: "https://images.pexels.com/photos/1438248/pexels-photo-1438248.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
      client: "National Geographic",
      award: "Emmy Nomination",
      description: "Environmental documentary about ocean conservation and marine life."
    },
    {
      id: 5,
      title: "Ocean's Voice",
      category: "documentary",
      videoUrl: "https://drive.google.com/file/d/1Ds7Rgvf_UYLJ_xc3JKNmfhkKQGag_PNI/view?usp=drive_link",
      image: "https://images.pexels.com/photos/1438248/pexels-photo-1438248.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
      client: "National Geographic",
      award: "Emmy Nomination",
      description: "Environmental documentary about ocean conservation and marine life."
    },
    {
      id: 6,
      title: "Ocean's Voice",
      category: "documentary",
      videoUrl: "https://drive.google.com/file/d/1JgETs1-o8H9It07WbOwetIW38bzHbVfI/view?usp=sharing",
      image: "https://images.pexels.com/photos/1438248/pexels-photo-1438248.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
      client: "National Geographic",
      award: "Emmy Nomination",
      description: "Environmental documentary about ocean conservation and marine life."
    },
    {
      id: 7,
      title: "Luxury Redefined",
      category: "Short Reelsl",
      videoUrl: "https://drive.google.com/file/d/125sSgGkcIo8-mNEpHq5BJ-AskB6TfEiw/view?usp=drive_link",
      image: "https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2022",
      client: "Rolex",
      award: "Silver - D&AD",
      description: "Elegant commercial capturing the essence of timeless luxury and craftsmanship."
    },
    {
      id: 8,
      title: "Luxury Redefined",
      category: "Short Reels",
      videoUrl: "https://drive.google.com/file/d/125sSgGkcIo8-mNEpHq5BJ-AskB6TfEiw/view?usp=drive_link",
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
    <section id="portfolio" className="py-20 bg-black relative">
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
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${selectedCategory === category.id
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
                {project.videoUrl && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full transition-colors duration-300"
                      onClick={() => setPlayingProject(project)}
                    >
                      <Play size={25} />
                      <span className="text-base font-semibold">Play</span>
                    </button>
                  </div>
                )}
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
      </div>

      {/* Video Modal */}
      {playingProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setPlayingProject(null)} // close when clicking outside
        >
          <div
            className="relative w-full max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Video Player Container */}
            <div className="w-full pt-[56.25%] relative rounded-lg overflow-hidden shadow-lg">
              {/* Close Button (inside here so it overlays the iframe) */}
              <button
                className="absolute top-2 right-2 text-gray-300 hover:text-white p-2 z-10"
                onClick={() => setPlayingProject(null)}
              >
                <X size={32} />
              </button>

              {/* Video */}
              <iframe
                src={convertToPlayableUrl(playingProject.videoUrl)}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full absolute top-0 left-0 rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Portfolio;
