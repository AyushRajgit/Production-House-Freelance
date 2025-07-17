import React from 'react';
import { Quote, Star } from 'lucide-react';
import Givashu from '../assets/Clients-Image/Givashu.png';
import Dhaagey from '../assets/Clients-Image/Dhaagey.webp';
import AamAadmiParty from '../assets/Clients-Image/AamAadmiParty.jpg';
import GoyalSaree from '../assets/Clients-Image/GoyalSaree.jpeg';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      name: "Givashu",
      role: "Marketing Manager",
      company: "Givashu Agrotech",
      image: Givashu,
      rating: 5,
      testimonial: "Cinematic Studios transformed our product launch with a visually stunning commercial that perfectly captured our brand essence. Their attention to detail and creative vision exceeded all expectations."
    },
    {
      name: "Dhaagey",
      role: "Creative Producer",
      company: "Dhaagey Productions",
      image: Dhaagey,
      rating: 5,
      testimonial: "Working with this team was an absolute pleasure. They delivered a documentary that not only met our technical requirements but told a compelling story that resonated with millions of viewers."
    },
    {
      name: "AAP",
      role: "Brand Manager",
      company: "Aam Aadmi Party",
      image: AamAadmiParty,
      rating: 5,
      testimonial: "The music video they created for our artist broke all previous engagement records. Their innovative approach and flawless execution made our vision come alive in ways we never imagined."
    },
    {
      name: "Mr. Goyal",
      role: "CEO",
      company: "Goyal Saree Palace Private Limited",
      image: GoyalSaree,
      rating: 5,
      testimonial: "Professional, creative, and efficient. Cinematic Studios delivered our corporate video on time and within budget while maintaining the highest production standards. Highly recommended!"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            What Our <span className="text-yellow-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and satisfied clients 
            have to say about our work and collaboration.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 relative">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote size={60} className="text-yellow-500" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed font-light text-lg italic">
                "{testimonial.testimonial}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-yellow-500 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        {/* <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Trusted by <span className="text-yellow-500">Industry Leaders</span>
            </h3>
            <p className="text-gray-300">
              We've had the privilege of working with some of the most recognized brands in the world.
            </p>
          </div> */}

          {/* Client Logos */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {["Netflix", "Tesla", "Microsoft", "Universal"].map((client, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-yellow-500">{client}</h4>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Join Our Happy Clients</h3>
          <p className="text-gray-300 mb-6">
            Ready to create something amazing together? Let's discuss your project.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;