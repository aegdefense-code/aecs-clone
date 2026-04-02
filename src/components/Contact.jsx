import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Message sent successfully!");
  };
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-primary font-semibold tracking-wide uppercase">Get In Touch</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Discuss Your Next Project?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our engineering team is ready to analyze your requirements and provide innovative, scalable solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input {...register("firstName", { required: true })} id="firstName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm px-4 py-3 border" placeholder="John" />
                  {errors.firstName && <span className="text-red-500 text-xs">This field is required</span>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input {...register("lastName", { required: true })} id="lastName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm px-4 py-3 border" placeholder="Doe" />
                  {errors.lastName && <span className="text-red-500 text-xs">This field is required</span>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Business Email</label>
                <input type="email" {...register("email", { required: true })} id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm px-4 py-3 border" placeholder="john@company.com" />
                {errors.email && <span className="text-red-500 text-xs">This field is required</span>}
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Required</label>
                <select {...register("service")} id="service" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm px-4 py-3 border bg-white">
                  <option value="manufacturing">Product Manufacturing</option>
                  <option value="fea">Finite Element Analysis</option>
                  <option value="npd">New Product Development</option>
                  <option value="testing">Testing & Certification</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message Details</label>
                <textarea {...register("message", { required: true })} id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm px-4 py-3 border" placeholder="Tell us about your project..."></textarea>
                {errors.message && <span className="text-red-500 text-xs">This field is required</span>}
              </div>

              <button type="submit" className="w-full btn-primary text-lg">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <MapPin className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900">Office</h3>
                  <p className="mt-2 text-gray-600">
                    CC NO/54,2593-6 (2nd FLOOR, STP Rd,<br />
                    Kadavanthra P.O, Bose Nagar, Elamkulam,<br />
                    Kochi, Kerala 682020, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <Phone className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900">Phone & Support</h3>
                  <p className="mt-2 text-gray-600">
                    +91 99615 85261<br />
                    <span className="text-sm text-gray-400">Mon-Fri: 9:00 AM - 6:00 PM IST</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <Mail className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900">Email Inquiries</h3>
                  <a href="mailto:info@aecs-india.com" className="mt-2 block text-brand-primary hover:underline">
                    info@aecs-india.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Connect With Us on Social Media</h4>
                <p className="text-sm text-gray-500">Stay updated with our latest projects and technical insights.</p>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-[#0077B5] transition-colors border border-gray-100">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-[#E4405F] transition-colors border border-gray-100">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-[#FF0000] transition-colors border border-gray-100">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-[#000000] transition-colors border border-gray-100">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.29 19.497h2.039L6.486 3.24H4.298l13.313 17.41z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
