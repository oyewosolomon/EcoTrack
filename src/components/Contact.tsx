import React, { useState } from 'react';
import { 
  MessageSquare, 
  Calendar, 
  Send,
  CheckCircle,
  Facebook,
  X,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    farmSize: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="relative py-24 overflow-hidden" id='contact'>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form - Left Side */}
          <div className="bg-white rounded-2xl p-8">
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-600">
                  We've received your request and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-rows-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  {formStatus === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Schedule Demo</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Side - Visual content replacing contact cards */}
          <div className="space-y-8">
            {/* Image Section */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gray-100">
              {/* Replace with your actual image */}
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: "url('/images/c.jpg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
                    <p className="text-white/90">
                      We're here to answer your questions and discuss how we can help.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl  hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Live Chat</h4>
                <p className="text-sm text-gray-600">Instant messaging support</p>
              </div>
              <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1">FAQs</h4>
                <p className="text-sm text-gray-600">Find quick answers</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;