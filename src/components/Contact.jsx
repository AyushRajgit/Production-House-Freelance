import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, message: '' });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ loading: true, message: '' });

  try {
    const response = await fetch('https://sheetdb.io/api/v1/ocnehep4fpkq9', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: formData })
    });

    const result = await response.json();
    console.log('SheetDB response:', result);

    if (response.ok) {
      setStatus({ loading: false, message: '✅ Thank you! We\'ll get back to you soon.' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } else {
      console.error('Error response from SheetDB:', result);
      setStatus({ loading: false, message: '❗ Something went wrong. Please check your sheet and try again.' });
    }
  } catch (error) {
    console.error('Network or fetch error:', error);
    setStatus({ loading: false, message: '⚠️ Network error. Please check your connection.' });
  }
};


  // Contact info
  const contactInfo = [
    {
      icon: MapPin,
      title: "Studio Location",
      details: ["F-882 Nandgram", "Ghaziabad, 201003", "Uttar Pradesh, India"]
    },
    {
      icon: Phone,
      title: "Phone & Email",
      details: ["+91 XXXXXXXXXX", "connect@goregaonproduction.com", "support@goregaonproduction.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Let's Create <span className="text-yellow-500">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with our team to discuss your project
            and discover how we can help you tell your story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-black rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-500">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 text-white"
                >
                  <option value="">Select a service</option>
                  <option value="film-production">Film Production</option>
                  <option value="commercial-video">Commercial Video</option>
                  <option value="documentary">Documentary</option>
                  <option value="music-video">Music Video</option>
                  <option value="corporate-video">Corporate Video</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project, timeline, and budget..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 text-white resize-vertical"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform ${status.loading
                    ? 'bg-yellow-400 cursor-not-allowed'
                    : 'bg-yellow-500 hover:bg-yellow-600 hover:scale-105'
                  } text-black`}
              >
                <Send size={20} />
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>

              {status.message && (
                <p className="text-center text-sm mt-2 text-gray-300">{status.message}</p>
              )}
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-black rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500/10 p-3 rounded-full">
                    <info.icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-300 mb-1">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Embedded map */}
            <div className="bg-black rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Find Our Studio</h3>
              <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
