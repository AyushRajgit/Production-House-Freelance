import React, { useState } from 'react';
import { X, Film, User, Phone, Mail, Building } from 'lucide-react';

const EntryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    purpose: 'general-inquiry',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/gjesndyfhspqo';

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit form data to SheetDB
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback('');

    console.log('📤 Submitting data:', formData);

    try {
      const response = await fetch(SHEETDB_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData })
      });

      const result = await response.json();
      console.log('✅ SheetDB response:', result);

      if (response.ok) {
        localStorage.setItem('visitorInfo', JSON.stringify(formData));
        localStorage.setItem('hasVisited', 'true');
        setFeedback('✅ Thank you! You may now enter.');
        setTimeout(() => {
          setFeedback('');
          onClose();
        }, 1000);
      } else {
        console.error('❗ SheetDB error:', result);
        setFeedback('❗ Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('⚠️ Network error:', error);
      setFeedback('⚠️ Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don’t render when modal is closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>

      {/* Modal */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-500 p-2 rounded-full">
                <Film className="h-6 w-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Welcome to Goregaon-Production</h2>
                <p className="text-sm text-gray-300">Please provide your details to continue</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              <User className="inline h-4 w-4 mr-2" /> Full Name *
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              <Phone className="inline h-4 w-4 mr-2" /> Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              <Mail className="inline h-4 w-4 mr-2" /> Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              <Building className="inline h-4 w-4 mr-2" /> Company/Organization
            </label>
            <input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company name (optional)"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          {/* Purpose */}
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-300 mb-2">
              Purpose of Visit
            </label>
            <select
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="general-inquiry">General Inquiry</option>
              <option value="project-quote">Project Quote</option>
              <option value="collaboration">Collaboration</option>
              <option value="portfolio-review">Portfolio Review</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 disabled:bg-yellow-600 disabled:cursor-not-allowed transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center space-x-2 transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Film className="h-5 w-5" />
                <span>Enter Goregaon-Production</span>
              </>
            )}
          </button>

          {/* Feedback */}
          {feedback && <p className="text-center text-sm mt-2 text-gray-300">{feedback}</p>}

          {/* Privacy */}
          <p className="text-xs text-gray-400 text-center mt-4">
            Your information is secure and will only be used to enhance your experience.
          </p>
        </form>
      </div>
    </div>
  );
};

export default EntryModal;
