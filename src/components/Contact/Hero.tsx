import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clickIcon from '@/assets/clickwhite.png';

const ContactHero: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Valid email required';
    if (!form.message.trim()) errs.message = 'Message cannot be empty';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const apiUrl = import.meta.env.VITE_API_URL || '';
    try {
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
        }),
      });
      if (response.ok) {
        setSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
          setForm({ name: '', email: '', phone: '', company: '', message: '' });
          setSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || `Server error ${response.status}`);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitting(false);
      const msg = error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly.';
      alert(msg);
    }
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const formVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(105deg, #ec3f24 50%, #7300bf 70%, #0a0a90 100%)'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center mt-28 md:mt-20 lg:mt-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariant}
              className="text-white text-left"
            >
              <div className="mb-12 md:mb-6 lg:mb-6 xl:mb-8 2xl:mb-12">
                <motion.h1 
                  className="text-5xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Get In Touch
                  
                </motion.h1>
                <br className='2xl:hidden' />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-0 md:space-y-2 lg:space-y-2 xl:space-y-3 2xl:space-y-4"
                >
                  <p className="text-xl sm:text-xl md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl text-white/90  font-semibold">
                    Your Trusted
                  </p>
                  <p className="text-xl sm:text-xl md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl text-white/90 leading-tight font-semibold">
                    Delivery Partner
                  </p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-8 md:space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-8"
              >
                <div className="border-l-4 border-white/50 pl-6 md:pl-4 lg:pl-4 xl:pl-5 2xl:pl-6">
                  <p className="text-base sm:text-lg md:text-xs lg:text-sm xl:text-sm 2xl:text-xl text-white/80 leading-relaxed md:leading-snug lg:leading-normal xl:leading-relaxed">
                    Reach out to discuss how our on-demand expert Pods can transform your IT delivery, reduce risks, and help you achieve your business goals. Let's unleash your delivery potential together.
                  </p>
                </div>
                
                {/* Contact Information */}
                <div className="space-y-6 md:space-y-3 lg:space-y-4 xl:space-y-4 2xl:space-y-6">
                  <div className="flex items-center space-x-4 md:space-x-3 lg:space-x-3 xl:space-x-3 2xl:space-x-4">
                    <div className="w-8 h-8 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-4 2xl:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-sm text-white/70">Email</p>
                      <a href="mailto:info@cloudsurge.uk" className="text-sm sm:text-base md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-semibold text-white hover:text-white/80 transition-colors duration-300 cursor-pointer">info@cloudsurge.uk</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 md:space-x-3 lg:space-x-3 xl:space-x-3 2xl:space-x-4">
                    <div className="w-8 h-8 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-4 2xl:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-sm text-white/70">Phone</p>
                      <p className="text-sm sm:text-base md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-semibold text-white">0121 816 1121</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 md:space-x-3 lg:space-x-3 xl:space-x-3 2xl:space-x-4">
                    <div className="w-8 h-8 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-4 2xl:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-xs 2xl:text-sm text-white/70">Address</p>
                      <p className="text-sm sm:text-base md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-semibold text-white">7 St. James Place, Birmingham B7 4JE United Kingdom</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={formVariant}
              className="w-full md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-full"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-3 lg:p-3 xl:p-4 2xl:p-8 mt-10 md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-10 mb-16 md:mb-0 shadow-2xl border border-white/20">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#ef4123]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/80">Thank you for reaching out. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-2 lg:space-y-3 xl:space-y-3 2xl:space-y-6">
                    <div className="text-center mb-6 md:mb-2 lg:mb-3 xl:mb-4 2xl:mb-8">
                      <h2 className="text-2xl md:text-lg lg:text-lg xl:text-xl 2xl:text-3xl font-bold text-white mb-2 md:mb-1 lg:mb-1 xl:mb-2 2xl:mb-2 flex items-center justify-center">
                        Get In Touch
                        <motion.img 
                          src={clickIcon} 
                          alt="Click Icon" 
                          className="w-8 h-8 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-10 2xl:h-10 inline-block ml-3 md:ml-2 lg:ml-2 xl:ml-3 2xl:ml-3"
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                      </h2>
                      <p className="text-white/80 text-sm md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-base">Fill out the form below and we'll respond within 24 hours</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 md:gap-3 lg:gap-3 xl:gap-4 2xl:gap-6">
                      <div>
                        <label className="block text-white/90 text-sm md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold mb-2 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 md:px-2 md:py-1.5 lg:px-2.5 lg:py-1.5 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 rounded-xl text-sm md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-base bg-white/20 border-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 ${
                            errors.name ? 'border-red-400' : 'border-white/30 focus:border-white/60'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-white/90 text-sm md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold mb-2 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 md:px-2 md:py-1.5 lg:px-2.5 lg:py-1.5 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 rounded-xl text-sm md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-base bg-white/20 border-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 ${
                            errors.email ? 'border-red-400' : 'border-white/30 focus:border-white/60'
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 md:gap-3 lg:gap-3 xl:gap-4 2xl:gap-6">
                      <div>
                        <label className="block text-white/90 text-sm md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold mb-2 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 md:px-2 md:py-1.5 lg:px-2.5 lg:py-1.5 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 rounded-xl text-sm md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-base bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 transition-all duration-300"
                          placeholder="+44 123 456 7890"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white/90 text-sm md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold mb-2 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 md:px-2 md:py-1.5 lg:px-2.5 lg:py-1.5 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 rounded-xl text-sm md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-base bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 transition-all duration-300"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold mb-2 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 md:px-2 md:py-1.5 lg:px-2.5 lg:py-1.5 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 rounded-xl text-sm md:text-[10px] lg:text-[11px] xl:text-xs 2xl:text-base bg-white/20 border-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none ${
                          errors.message ? 'border-red-400' : 'border-white/30 focus:border-white/60'
                        }`}
                        placeholder="Tell us about your project or how we can help..."
                      />
                      {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white text-[#ef4123] font-bold py-4 md:py-2 lg:py-2 xl:py-2.5 2xl:py-4 px-8 md:px-4 lg:px-5 xl:px-6 2xl:px-8 text-base md:text-xs lg:text-xs xl:text-sm 2xl:text-base rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
