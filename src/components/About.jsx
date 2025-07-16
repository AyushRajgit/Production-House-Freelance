import React from 'react';
import { Award, Users, Film, Star } from 'lucide-react';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "15+ years crafting visual stories that resonate with audiences worldwide."
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Producer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Award-winning producer specializing in documentary and commercial content."
    },
    {
      name: "Elena Vasquez",
      role: "Head of Post-Production",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Master of color grading and visual effects with Hollywood experience."
    }
  ];

  // Company stats
  const stats = [
    { icon: Film, number: "200+", label: "Projects Completed" },
    { icon: Award, number: "15", label: "Industry Awards" },
    { icon: Users, number: "50+", label: "Happy Clients" },
    { icon: Star, number: "10", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            About <span className="text-yellow-500">Our Story</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in 2014, Cinematic Studios has been at the forefront of visual storytelling, 
            creating compelling content that bridges the gap between imagination and reality.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-yellow-500">Our Mission</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We believe every story deserves to be told with passion, precision, and cinematic excellence. 
              Our team combines cutting-edge technology with artistic vision to create content that not only 
              entertains but inspires and moves audiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From concept to final cut, we're committed to delivering productions that exceed expectations 
              and leave lasting impressions. Our collaborative approach ensures that every project reflects 
              our clients' unique vision while maintaining our signature cinematic quality.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Film production behind the scenes"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-yellow-500/10 rounded-lg"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Meet Our <span className="text-yellow-500">Creative Team</span></h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The talented individuals behind every masterpiece, bringing decades of combined experience 
            and unwavering passion for visual storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-xl font-bold mb-2">{member.name}</h4>
              <p className="text-yellow-500 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;