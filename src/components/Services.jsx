import React from 'react';
import { Video, Film, Music, Edit, Camera, Palette, Mic, Settings } from 'lucide-react';

const Services = () => {
  // Services data
  const services = [
    {
      icon: Film,
      title: "Film Production",
      description: "Complete film production services from concept to final cut, including scripting, directing, and cinematography.",
      features: ["Pre-production planning", "On-location shooting", "Professional crew", "Equipment rental"]
    },
    {
      icon: Video,
      title: "Commercial Videos",
      description: "High-impact commercial videos that drive engagement and boost brand awareness across all platforms.",
      features: ["Brand storytelling", "Product showcases", "Social media content", "TV commercials"]
    },
    {
      icon: Edit,
      title: "Post-Production",
      description: "Expert editing, color grading, and finishing services to bring your vision to life with cinematic quality.",
      features: ["Video editing", "Color correction", "Visual effects", "Motion graphics"]
    },
    {
      icon: Music,
      title: "Music Videos",
      description: "Creative music videos that capture the essence of your music and connect with your audience.",
      features: ["Concept development", "Choreography", "Special effects", "Multi-camera setup"]
    },
    {
      icon: Camera,
      title: "Documentary",
      description: "Compelling documentaries that tell powerful stories with journalistic integrity and artistic vision.",
      features: ["Research & interviews", "Archival footage", "Narrative structure", "Distribution strategy"]
    },
    {
      icon: Palette,
      title: "Animation & VFX",
      description: "Cutting-edge animation and visual effects that push the boundaries of what's possible on screen.",
      features: ["2D/3D animation", "Motion graphics", "CGI integration", "Digital compositing"]
    },
    {
      icon: Mic,
      title: "Audio Production",
      description: "Professional audio recording, mixing, and mastering services for pristine sound quality.",
      features: ["Sound design", "Audio mixing", "Dialogue editing", "Music composition"]
    },
    {
      icon: Settings,
      title: "Live Streaming",
      description: "Professional live streaming services for events, conferences, and real-time content delivery.",
      features: ["Multi-camera setup", "Live switching", "Real-time graphics", "Platform integration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive video production services tailored to bring your creative vision to life 
            with uncompromising quality and artistic excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-black rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
              {/* Service Icon */}
              <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-yellow-500" />
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Our <span className="text-yellow-500">Process</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From initial concept to final delivery, we follow a proven process that ensures 
              exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision, goals, and requirements" },
              { step: "02", title: "Planning", description: "Detailed pre-production planning and scheduling" },
              { step: "03", title: "Production", description: "Professional filming with our expert crew" },
              { step: "04", title: "Delivery", description: "Post-production magic and final delivery" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16 bg-black rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-6">
            Let's discuss how we can bring your creative vision to life with our expert team and state-of-the-art equipment.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get Free Consultation
          </button>
          
        </div> */}
      </div>
    </section>
  );
};

export default Services;