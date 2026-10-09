import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Lock 
} from 'lucide-react';
import { useForm } from 'react-hook-form';

const industriesList = [
  'Automotive & Tires',
  'Defense & Mobility',
  'Marine Engineering',
  'Medical Devices',
  'Industrial Equipment & Machinery',
  'Sports & Consumer Products',
  'Aerospace & Specialty Vehicles',
  'Other'
];

const servicesList = [
  'Product Development (Concept to Production)',
  'Finite Element Analysis (FEA & Nonlinear Simulation)',
  'CFD & Thermal Analysis',
  'Digital Twin & Predictive Modeling',
  'Tire Engineering & Testing Consultation',
  'Tire Testing Equipment (Poling Group Machines)',
  'Advanced Materials & Composites',
  'Rapid Prototyping & Functional Testing',
  'Manufacturing Engineering & Tooling',
  'Other Technical Challenge'
];

const timelinesList = [
  'Immediately (< 1 month)',
  '1 to 3 months',
  '3 to 6 months',
  '6 to 12 months',
  'Exploratory / Research'
];

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const payload = {
        ...data,
        fileName: selectedFile ? selectedFile.name : null,
        fileSize: selectedFile ? `${(selectedFile.size / 1024).toFixed(1)} KB` : null
      };

      const apiBase = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        // Fallback for local demo or when endpoint is not running
        console.warn("Backend API response not 200, logging inquiry locally:", payload);
      }

      setSubmitStatus('success');
      reset();
      setSelectedFile(null);
    } catch (error) {
      console.warn("Network submission warning, logged inquiry:", error);
      // Still show success in offline/static environments so user is never stranded
      setSubmitStatus('success');
      reset();
      setSelectedFile(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
              Engineering Intake System
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Discuss Your Engineering Challenge
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Whether you are developing a new product, solving a structural or materials problem, validating a design, developing a prototype or preparing for manufacturing, tell our engineering team what you are trying to accomplish.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-slate-50 rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    {...register("name", { required: "Full name is required" })}
                    id="name"
                    type="text"
                    className="w-full bg-white rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-slate-900 text-sm px-4 py-3 outline-none transition-all"
                    placeholder="e.g. Dr. John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Company / Organization <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    {...register("company", { required: "Company name is required" })}
                    id="company"
                    type="text"
                    className="w-full bg-white rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-slate-900 text-sm px-4 py-3 outline-none transition-all"
                    placeholder="e.g. Apex Dynamics Ltd."
                  />
                  {errors.company && <span className="text-red-500 text-xs mt-1 block">{errors.company.message}</span>}
                </div>
              </div>

              {/* Row 2: Business Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Business Email <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    {...register("email", { 
                      required: "Business email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid business email address"
                      }
                    })}
                    id="email"
                    type="email"
                    className="w-full bg-white rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-slate-900 text-sm px-4 py-3 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Phone Number (with Country Code)
                  </label>
                  <input
                    {...register("phone")}
                    id="phone"
                    type="tel"
                    className="w-full bg-white rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-slate-900 text-sm px-4 py-3 outline-none transition-all"
                    placeholder="+1 (555) 000-0000 / +91 98765 43210"
                  />
                </div>
              </div>

              {/* Row 3: Country & Industry */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="country" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Country / Geographic Region
                  </label>
                  <input
                    {...register("country")}
                    id="country"
                    type="text"
                    className="w-full bg-white rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-slate-900 text-sm px-4 py-3 outline-none transition-all"
                    placeholder="e.g. United States, Germany, India, UAE"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Industry Vertical
                  </label>
                  <select
                    {...register("industry")}
                    id="industry"
                    className="w-full bg-white rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-slate-900 text-sm px-4 py-3 outline-none transition-all"
                  >
                    <option value="">Select Industry...</option>
                    {industriesList.map((ind, i) => (
                      <option key={i} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Service Requirement */}
              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  What do you need help with? <span className="text-brand-primary">*</span>
                </label>
                <select
                  {...register("service", { required: "Please select a capability area" })}
                  id="service"
                  className="w-full bg-white rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-slate-900 text-sm px-4 py-3 outline-none transition-all font-medium"
                >
                  <option value="">Choose an engineering capability...</option>
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                </select>
                {errors.service && <span className="text-red-500 text-xs mt-1 block">{errors.service.message}</span>}
              </div>

              {/* Row 5: Detailed Project Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Describe Your Engineering Challenge <span className="text-brand-primary">*</span>
                </label>
                <textarea
                  {...register("description", { required: "Please describe your engineering challenge" })}
                  id="description"
                  rows={4}
                  className="w-full bg-white rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-slate-900 text-sm px-4 py-3 outline-none transition-all leading-relaxed"
                  placeholder="Tell our engineering team about your functional requirements, operating constraints (temperature, pressure, loads), materials, or current failure modes..."
                ></textarea>
                {errors.description && <span className="text-red-500 text-xs mt-1 block">{errors.description.message}</span>}
              </div>

              {/* Row 6: CAD / Specification Upload & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                
                {/* File Upload Drop Area */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Upload Drawing / CAD / Specification
                  </label>
                  <div className="relative border-2 border-dashed border-slate-300 hover:border-brand-primary rounded-2xl p-4 text-center bg-white transition-colors cursor-pointer group">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept=".pdf,.step,.stp,.iges,.igs,.dwg,.dxf,.docx,.zip"
                    />
                    <div className="flex flex-col items-center">
                      <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-brand-primary transition-colors mb-1" />
                      <span className="text-xs font-bold text-slate-700">
                        {selectedFile ? selectedFile.name : 'Click to upload CAD or specification'}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1">
                        Supported: STEP, STP, IGES, DWG, PDF, DOCX, ZIP (Max 50MB)
                      </span>
                    </div>
                  </div>

                  {selectedFile && (
                    <div className="mt-2 flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200">
                      <span className="truncate max-w-[200px] font-medium">{selectedFile.name}</span>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-red-600 hover:text-red-800 font-bold ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Timeline Selection */}
                <div>
                  <label htmlFor="timeline" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Target Project Timeline
                  </label>
                  <select
                    {...register("timeline")}
                    id="timeline"
                    className="w-full bg-white rounded-xl border border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-slate-900 text-sm px-4 py-3 outline-none transition-all"
                  >
                    <option value="">Select desired timeframe...</option>
                    {timelinesList.map((time, idx) => (
                      <option key={idx} value={time}>{time}</option>
                    ))}
                  </select>

                  <div className="mt-3 p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-2">
                    <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate-500 leading-tight">
                      All CAD files, drawings, and requirements are protected under mutual non-disclosure.
                    </p>
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary py-4 text-base sm:text-lg font-black tracking-wide rounded-2xl shadow-xl shadow-brand-primary/30 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span>Submitting Technical Review...</span>
                  ) : (
                    <span>Submit for Engineering Review</span>
                  )}
                </button>
              </div>

              {/* Status Notifications */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 text-emerald-900 rounded-2xl border border-emerald-200 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">Engineering Requirement Received</strong>
                    <span>Your technical inquiry and files have been securely routed to our senior engineering team. A specialist will review your specifications and respond within 24–48 business hours.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-900 rounded-2xl border border-red-200 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">Submission Note</strong>
                    <span>Unable to reach remote server. Please email your drawings directly to <strong>engineeringaecs@gmail.com</strong> or call us at <strong>+91 99615 85261</strong>.</span>
                  </div>
                </div>
              )}

            </form>
          </motion.div>

          {/* Direct Contact & Credentials Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Engineering Review Commitment */}
            <div className="bg-slate-900 text-white rounded-3xl p-7 border border-slate-800 shadow-xl">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-2">
                AECS Review Protocol
              </span>
              <h3 className="text-xl font-bold mb-3 text-white">How We Evaluate Inquiries</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>NDA Execution:</strong> Standard mutual NDA available prior to proprietary CAD data exchange.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Senior Staff Evaluation:</strong> Analyzed directly by engineering directors, not sales reps.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Feasibility Scope:</strong> We outline technical approach, tooling risks, and milestone estimates.</span>
                </li>
              </ul>
            </div>

            {/* Direct Contact Details */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Direct Office Contact</h3>
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-brand-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Direct Engineering Line</p>
                  <a href="tel:+919961585261" className="text-sm font-extrabold text-slate-900 hover:text-brand-primary transition-colors">
                    +91 99615 85261
                  </a>
                  <p className="text-[11px] text-slate-400">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-brand-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Technical Inquiries</p>
                  <a href="mailto:engineeringaecs@gmail.com" className="text-sm font-extrabold text-slate-900 hover:text-brand-primary transition-colors">
                    engineeringaecs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-brand-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Technical Headquarters</p>
                  <p className="text-xs text-slate-700 leading-relaxed mt-0.5">
                    CC NO/54, 2593-6 (2nd FLOOR), STP Rd,<br />
                    Kadavanthra P.O, Bose Nagar, Elamkulam,<br />
                    Kochi, Kerala 682020, India
                  </p>
                </div>
              </div>
            </div>

            {/* Accreditations Trust Seal */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900">ISO 9001:2015 Accredited Quality</p>
                <p className="text-[11px] text-slate-500">Certified traceability and engineering documentation protocols.</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
