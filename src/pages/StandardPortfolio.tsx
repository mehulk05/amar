import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, ShieldCheck, TrendingUp, HandCoins, 
  MapPin, Phone, Mail, User, CheckCircle2, 
  ArrowRight, Shield, Landmark, BookOpen, Car, Flame,
  Briefcase, HeartHandshake
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const object = {
      ...formData,
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "c4e88c75-1189-4d97-ae12-6b3843897a51"
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 px-6">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center shadow-md">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="self-center text-xl md:text-2xl font-bold whitespace-nowrap text-slate-900 tracking-tight">
              WealthBridge <span className="text-blue-600 font-medium">Advisory</span>
            </span>
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors">Why Us</a>
          </div>
          <div className="flex space-x-3">
            <a href="#inquiry" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-blue-500/30">
              Free Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 mx-auto max-w-7xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] opacity-60 z-0 pointer-events-none" />
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
          <motion.div 
            initial="hidden" animate="show" variants={staggerContainer}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Invest Smart • Grow Secure
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Bridge the gap to your <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                financial aspirations.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to WealthBridge Advisory, your trusted partner in navigating the complexities of the financial world. Led by <strong className="text-slate-900">Sambhvani Amarkumar</strong>, a seasoned Financial Advisor and Wealth Planner, we provide a bridge between your current financial status and your future aspirations. Based in Ahmedabad, we serve a diverse clientele with a commitment to integrity, growth, and security.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#services" className="inline-flex justify-center items-center py-3.5 px-7 text-base font-medium text-white rounded-xl bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Explore Services
              </a>
              <a href="#inquiry" className="inline-flex justify-center items-center py-3.5 px-7 text-base font-medium text-slate-800 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-full relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-200 relative shadow-2xl ring-1 ring-slate-900/5 group">
              {/* PLACEHOLDER FOR PROFILE IMAGE */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-gradient-to-br from-slate-100 to-slate-200">
                <User className="w-24 h-24 mb-4 text-slate-300" />
                <p className="text-sm font-medium uppercase tracking-widest text-slate-500">Insert Profile Photo</p>
                <div className="absolute inset-0 border-4 border-dashed border-slate-300/50 rounded-[2rem] m-4"></div>
              </div>
              
              {/* Overlay Decor */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute top-8 -left-8 w-24 h-24 bg-cyan-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 lg:bottom-10 -left-6 lg:-left-12 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Expert</p>
                <p className="text-sm text-slate-500 font-medium">Wealth Planner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Offerings</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Comprehensive Services</h3>
            <p className="text-lg text-slate-600">We provide a 360-degree approach to financial health, categorized into three core pillars to secure your current needs and future ambitions.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Investment Management</h4>
              <p className="text-slate-600 mb-6 font-medium">Maximize your wealth with data-driven strategies and personalized portfolio management.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <HandCoins className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Mutual Funds:</strong> Tailored SIP and Lumpsum options.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Landmark className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Stocks & Market:</strong> Expert guidance for equity markets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Demat Management:</strong> Seamless shareholding handling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Fixed Deposits & Policies:</strong> Secure returns & secondary market.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Shield className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Comprehensive Insurance</h4>
                <p className="text-slate-600 mb-6 font-medium">Protect what matters most with robust coverage plans for individuals and businesses.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <HeartHandshake className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700"><strong>Life & Health:</strong> Safeguard family & medical contingencies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700"><strong>Workmen's Comp:</strong> Cover legal liabilities for employees.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700"><strong>Motor & Travel:</strong> Vehicle coverage and journey safety.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Flame className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700"><strong>Fire & Marine:</strong> critical protection for industrial risks.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Loan & Funding</h4>
              <p className="text-slate-600 mb-6 font-medium">Fuel your personal and professional growth with flexible financing options.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>School Funding:</strong> Infrastructure & operational scaling support.</span>
                </li>
                <li className="flex items-start gap-3">
                  <User className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Retail Loans:</strong> Home, Personal, Car, and Education loans.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Business & Commercial:</strong> WC, Project Finance, Mortgages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Asset Finance:</strong> Machinery, Equipment, and shares funding.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">The WealthBridge Difference</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose WealthBridge?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <User className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Personalized Planning</h4>
              <p className="text-slate-400 text-sm leading-relaxed">We don't believe in "one size fits all." Every financial plan is meticulously built around your specific goals, life stage, and comfort with risk.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Local Expertise, Global Standards</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Deeply rooted in Ahmedabad, Gujarat, we bring world-class financial practices and ethical standards directly to your doorstep.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <Landmark className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">One-Stop Shop</h4>
              <p className="text-slate-400 text-sm leading-relaxed">From protecting your health to funding your business or school, we seamlessly manage all your complex financial needs under one secure roof.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry & Contact Section */}
      <section id="inquiry" className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            
            {/* Contact Details Left Side */}
            <div className="lg:w-2/5 p-10 lg:p-14 bg-gradient-to-br from-blue-700 to-blue-900 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Get In Touch</h3>
                <p className="text-blue-200 mb-10">Reach out today to discuss your financial roadmap.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <User className="w-6 h-6 text-blue-300 shrink-0" />
                    <div>
                      <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Advisor</p>
                      <p className="font-medium text-lg">Sambhvani Amarkumar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-300 shrink-0" />
                    <div>
                      <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Phone</p>
                      <p className="font-medium text-lg">+91 78638 31851</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-300 shrink-0" />
                    <div>
                      <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Email</p>
                      <p className="font-medium text-lg">wealthbridgeadvisory5@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-300 shrink-0" />
                    <div>
                      <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Location</p>
                      <p className="font-medium text-lg">Ahmedabad, Gujarat</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-blue-500/30 relative z-10">
                <p className="text-blue-200 text-sm">WealthBridge Advisory<br/>Invest Smart • Grow Secure.</p>
              </div>
            </div>

            {/* Inquiry Form Right Side */}
            <div className="lg:w-3/5 p-10 lg:p-14">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Interested in a Financial Consultation?</h3>
              <p className="text-slate-600 mb-8">Please provide your details below. Our team will reach out to you within 24 hours to discuss your requirements.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Contact Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service of Interest</label>
                  <textarea 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Briefly describe the Service you are interested in (e.g., School Funding, Life Insurance, Mutual Funds)..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className={`w-full text-white font-medium py-4 px-8 rounded-xl transition-all shadow-lg flex justify-center items-center gap-2 ${isLoading ? 'bg-blue-400 cursor-not-allowed shadow-none' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30'}`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <Building2 className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold text-white tracking-tight">WealthBridge Advisory</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} WealthBridge Advisory. All rights reserved.</p>
        </div>
      </footer>

      {/* Toast Notification */}
      {showToast && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50 bg-slate-900 border-l-4 border-emerald-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3"
        >
          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
          <div>
            <h4 className="font-bold text-sm">Inquiry Received</h4>
            <p className="text-slate-300 text-sm">We'll reach out to you within 24 hours.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
