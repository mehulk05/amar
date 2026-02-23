import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, ShieldCheck, TrendingUp, 
  MapPin, Phone, Mail, User, CheckCircle2, 
  ArrowRight, Shield, Landmark, Star, PlayCircle, BarChart3,
  Award, Clock, Target, Globe, Key
} from 'lucide-react';

export default function MarketingPortfolio() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const object = {
      ...formData,
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "c4e88c75-1189-4d97-ae12-6b3843897a51",
      source: "Marketing Landing Page"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(object)
      });
      const result = await response.json();
      
      if (result.success) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        setFormData({ name: '', phone: '', email: '', service: '' });
      } else {
        alert("There was an issue submitting your inquiry. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-500 selection:text-slate-900 overflow-x-hidden">
      
      {/* ── HIGH CONVERSION URGENCY BAR ── */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 py-2.5 px-4 text-center text-sm font-bold flex items-center justify-center gap-2 shadow-md relative z-50">
        <Star className="w-4 h-4 fill-slate-900" />
        <span>Limited Time: Free 30-Minute Financial Audit for First-Time Clients!</span>
        <a href="#inquiry" className="underline decoration-slate-900/40 hover:decoration-slate-900 transition-colors ml-2 hidden sm:inline">Claim Yours →</a>
      </div>

      {/* ── BRANDING NAV BAR ── */}
      <nav className="absolute top-10 left-0 w-full z-50 px-6 lg:px-12 flex justify-between items-center">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3 border border-slate-700/50 bg-slate-900/40 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl">
            <Building2 className="w-6 h-6 text-amber-500" />
            <span className="text-xl font-bold text-white tracking-tight font-serif italic">WealthBridge Advisory</span>
          </div>
          <a href="#inquiry" className="hidden sm:inline-flex px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-full backdrop-blur-md transition-all">
            Contact Us
          </a>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-36 pb-32 lg:pt-48 lg:pb-40 bg-slate-950 text-white overflow-hidden">
        {/* Background Textures & Lighting */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-b from-blue-900/40 via-slate-900/20 to-transparent pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div initial="hidden" animate="show" variants={stagger} className="lg:w-3/5 text-center lg:text-left">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-amber-500 text-xs sm:text-sm font-bold tracking-wide uppercase mb-8 backdrop-blur-sm">
              <Award className="w-4 h-4" />
              Financial Advisory & Wealth Planning
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight mb-4 leading-[1.1]">
              Navigate Your <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 italic font-serif font-light">Financial Future</span><br className="hidden lg:block"/>
              with Confidence.
            </motion.h1>

            <motion.div variants={fadeUp} className="text-2xl font-semibold text-slate-300 mb-6 font-serif">
              Sambhvani Amarkumar
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Trusted financial advisor and wealth planner based in Ahmedabad — bridging the gap between your current financial status and your future aspirations, with integrity and precision.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#inquiry" className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 flex items-center justify-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="text-sm text-slate-400 font-medium flex items-center gap-2 px-4 py-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Response within 24h
              </div>
            </motion.div>
            
            {/* Social Proof Bar */}
            <motion.div variants={fadeUp} className="mt-14 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-80">
              <div className="flex flex-col text-left">
                <span className="text-2xl font-black text-white">Integrity First</span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Client-Centric</span>
              </div>
              <div className="w-px h-8 bg-slate-800"></div>
              <div className="flex flex-col text-left">
                <span className="text-2xl font-black text-white">360°</span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Financial Health</span>
              </div>
              <div className="w-px h-8 bg-slate-800 hidden sm:block"></div>
              <div className="items-center gap-2 hidden sm:flex">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-sm font-medium text-white">Ahmedabad Based</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8 }} className="lg:w-2/5 w-full max-w-md relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-800 relative shadow-2xl ring-1 ring-white/10 group cursor-pointer border-4 border-slate-700/50">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-gradient-to-br from-slate-800 to-slate-900 transition-transform duration-700 group-hover:scale-105">
                <User className="w-32 h-32 mb-6 text-slate-700 relative z-0" />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors z-10"></div>
                <PlayCircle className="w-16 h-16 text-white/90 drop-shadow-xl z-20 group-hover:scale-110 transition-transform" />
                <p className="z-20 mt-4 font-bold text-white tracking-wide uppercase text-sm drop-shadow-md">Click to Upload Profile Photo</p>
                <div className="absolute inset-4 border-2 border-dashed border-amber-500/30 rounded-2xl z-0"></div>
              </div>
            </div>
            
            {/* Floating Trust Element */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 p-4 rounded-2xl shadow-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold leading-tight">Financial Advisor</p>
                <p className="text-xs text-slate-400 font-medium tracking-wide">WealthBridge Advisory</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES (Content Matched) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">What We Offer</div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 font-serif">Our Comprehensive <em className="italic text-amber-600">Services</em></h2>
            <p className="text-xl text-slate-600 font-medium">A 360-degree approach to financial health, across three core pillars — designed to serve every dimension of your financial life.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1 */}
            <motion.div whileHover={{ y: -8 }} className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-5xl font-serif text-slate-200 font-light tracking-tighter">01</div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 font-serif">Investment Management</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Maximize your wealth with data-driven strategies and personalized portfolio management.</p>
              
              <ul className="space-y-3 mb-8">
                {["Mutual Funds — SIP & Lumpsum", "Stocks & Equity Markets", "Demat Account Management", "Fixed Deposits", "Pre-Owned Policy Investment"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div whileHover={{ y: -8 }} className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden ring-1 ring-slate-800 flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-6 opacity-10"><Shield className="w-32 h-32" /></div>
              <div className="relative z-10 w-full h-full flex flex-col">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-slate-800 text-amber-400 rounded-2xl flex items-center justify-center">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div className="text-5xl font-serif text-slate-800 font-light tracking-tighter">02</div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 font-serif">Comprehensive Insurance</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">Robust coverage for individuals and businesses — protecting what matters most.</p>
                  
                  <ul className="space-y-3 mb-8">
                    {["Life & Health Insurance", "Workmen's Compensation", "Motor & Travel Coverage", "Fire & Marine Protection"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div whileHover={{ y: -8 }} className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <Landmark className="w-8 h-8" />
                </div>
                <div className="text-5xl font-serif text-slate-200 font-light tracking-tighter">03</div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 font-serif">Loan & Funding Solutions</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Flexible financing to fuel personal milestones and business growth.</p>
              
              <ul className="space-y-3 mb-8">
                {["School & Education Funding", "Home, Car & Personal Loans", "Business & Commercial Loans", "Mortgage (LAP, LRD, NRI)"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY US SECTION ── */}
      <section className="py-24 bg-slate-100 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-16">
            <div className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Our Advantage</div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-serif text-center md:text-left">
              Why Choose <em className="italic text-amber-600">WealthBridge?</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Why 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 font-serif">Personalized Planning</h3>
              <p className="text-slate-600 leading-relaxed">We don't believe in "one size fits all." Every plan is built around your specific goals, timeline, and risk profile.</p>
            </div>
            
            {/* Why 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 font-serif">Local Expertise, Global Standards</h3>
              <p className="text-slate-600 leading-relaxed">Deeply rooted in Ahmedabad, Gujarat, we deliver world-class financial practices right at your doorstep.</p>
            </div>

            {/* Why 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 font-serif">One-Stop Shop</h3>
              <p className="text-slate-600 leading-relaxed">From protecting your health to funding your business or school — all financial needs under one trusted roof.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONVERTING FORM SECTION ── */}
      <section id="inquiry" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-12">
            <div className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-serif mb-6">
              Begin Your <em className="italic text-amber-600">Financial Journey</em>
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">Interested in a financial consultation? Our team will connect with you within 24 hours to discuss your requirements and tailor a plan just for you.</p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row ring-1 ring-slate-900/5">
            
            {/* Form Left Info */}
            <div className="md:w-5/12 bg-slate-900 p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5"><Building2 className="w-48 h-48" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-8 font-serif">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-1"><User className="w-5 h-5 text-amber-400" /></div>
                    <div>
                      <div className="text-xs text-amber-500 font-bold uppercase tracking-wider mb-1">Advisor</div>
                      <div className="font-semibold text-lg tracking-wide">Sambhvani Amarkumar</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-1"><Phone className="w-5 h-5 text-amber-400" /></div>
                    <div>
                      <div className="text-xs text-amber-500 font-bold uppercase tracking-wider mb-1">Phone</div>
                      <div className="font-semibold text-lg tracking-wide">+91 96645 94861</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-1"><Mail className="w-5 h-5 text-amber-400" /></div>
                    <div>
                      <div className="text-xs text-amber-500 font-bold uppercase tracking-wider mb-1">Email</div>
                      <div className="font-semibold text-lg tracking-wide">amar.sam2020@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-1"><MapPin className="w-5 h-5 text-amber-400" /></div>
                    <div>
                      <div className="text-xs text-amber-500 font-bold uppercase tracking-wider mb-1">Location</div>
                      <div className="font-semibold text-lg tracking-wide">Ahmedabad, Gujarat</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 flex items-center gap-3 text-slate-400 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium text-sm">Fill in the form and our team will reach out within 24 hours.</span>
              </div>
            </div>

            {/* Form Right Inputs */}
            <div className="md:w-7/12 p-10 lg:p-12 bg-slate-50">
              <h3 className="text-2xl font-black text-slate-900 mb-2 font-serif">Request a Consultation</h3>
              <p className="text-slate-500 mb-8 text-sm">Secure and confidential inquiry form.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Contact Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm" placeholder="your@email.com" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Service of Interest *</label>
                  <select name="service" value={formData.service} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm appearance-none">
                    <option value="" disabled>Select a service...</option>
                    <option value="Mutual Funds / SIP">Mutual Funds / SIP</option>
                    <option value="Stocks & Equity">Stocks & Equity</option>
                    <option value="Life & Health Insurance">Life & Health Insurance</option>
                    <option value="School Funding">School Funding</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Home / Personal Loan">Home / Personal Loan</option>
                    <option value="Mortgage Solutions">Mortgage Solutions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={isLoading} className={`w-full text-white font-black text-sm uppercase tracking-widest py-4 px-8 rounded-xl transition-all shadow-xl flex justify-center items-center gap-2 ${isLoading ? 'bg-slate-400 cursor-not-allowed shadow-none' : 'bg-slate-900 hover:bg-amber-500 shadow-slate-900/20 hover:shadow-amber-500/40'}`}>
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
                
                <p className="text-center text-xs text-slate-400 mt-4 font-medium flex justify-center items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> 100% Confidential
                </p>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-amber-900/30 relative">
        <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="font-serif italic text-xl font-bold text-amber-500 flex items-center gap-2">
              <Building2 className="w-5 h-5" /> WealthBridge Advisory
            </div>
            <div className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">Invest Smart • Grow Secure</div>
          </div>
          <p className="text-sm font-medium">© {new Date().getFullYear()} WealthBridge Advisory. <br className="md:hidden"/> Ahmedabad, Gujarat.</p>
        </div>
      </footer>

      {/* Toast Notification */}
      {showToast && (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-6 right-6 z-50 bg-slate-900 border-l-4 border-amber-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle2 className="w-6 h-6 text-emerald-400" /></div>
          <div>
            <h4 className="font-black text-sm">Inquiry Received!</h4>
            <p className="text-slate-300 text-sm font-medium mt-0.5">We'll contact you within 24 hours.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
