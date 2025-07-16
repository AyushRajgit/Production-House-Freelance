import React from 'react';
import { Film, Instagram, Youtube, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact Us', href: '#contact' }
    ],
    Services: [
      { name: 'Film Production', href: '#services' },
      { name: 'Commercial Video', href: '#services' },
      { name: 'Documentary', href: '#services' },
      { name: 'Post Production', href: '#services' }
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Film className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold font-serif">Goregaon&lt;/&gt;Production</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A production house producing cinematic masterpieces that move hearts, spark minds, and leave lasting impact on audience by bringing stories to life with passion and precision.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-yellow-500" />
                <span className="text-gray-400 text-sm">F-888, Nandgram Ghaziabad, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-500" />
                <span className="text-gray-400 text-sm">+91 XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-500" />
                <span className="text-gray-400 text-sm">goregaonproduction.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links with smooth scroll */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-yellow-500">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                      className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer remains unchanged */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center">
              © 2025 Goregaon Productions — All rights reserved.
              <br />
              <span className="text-xs">Made with ❤️ by Ayush Raj</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
