import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  PhoneCall, 
  MessageCircle, 
  Wrench, 
  Droplets, 
  Bath, 
  Search, 
  Settings, 
  Container,
  Clock,
  ThumbsUp,
  Award,
  CheckCircle2,
  MapPin,
  Menu,
  X,
  Star,
  Calendar
} from 'lucide-react';

const phoneNumber = "0971649956";
const displayPhone = "097 1649956";
const whatsappUrl = `https://wa.me/260971649956`;

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Booking', href: '#booking' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Banner */}
      <div className="bg-brand-blue text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><MapPin size={16} className="text-brand-orange" /> Serving Lusaka & Surrounding Areas</span>
            <span className="flex items-center gap-1.5"><Clock size={16} className="text-brand-orange" /> Available 24 Hours A Day</span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <span className="flex items-center gap-1.5 text-brand-orange"><Award size={16} /> Best Plumbers in Lusaka</span>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? 'bg-white shadow-lg py-3' : 'bg-white/95 md:bg-white/80 backdrop-blur-md py-4 md:py-5'
        } ${!isScrolled && 'md:top-[36px]'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 z-50">
            <div className="bg-brand-orange text-white p-2 rounded-lg">
              <Droplets size={28} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-brand-blue leading-none">Lusaka Smart</h1>
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase">Plumbers</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-700 hover:text-brand-orange font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <PhoneCall size={20} />
              {displayPhone}
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-blue z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <motion.div 
          initial={false}
          animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden bg-white border-t border-slate-100 absolute top-full left-0 right-0 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-slate-800 p-2 hover:bg-slate-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center justify-center gap-2 bg-brand-blue text-white p-4 rounded-xl font-bold mt-2"
            >
              <PhoneCall size={20} className="text-brand-orange" />
              Call {displayPhone}
            </a>
          </div>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 bg-brand-blue">
          <img 
            src="https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Professional plumber fixing pipes" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 px-4 py-1.5 rounded-full font-semibold mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
              </span>
              Available 24 Hours – We Respond Fast!
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              24/7 Emergency Plumbing Services in Lusaka
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Fast, reliable, and affordable plumbing you can trust — anytime, day or night. We fix your leaks, pipes, and drains with guaranteed satisfaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${phoneNumber}`} 
                className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition-all hover:-translate-y-1"
              >
                <PhoneCall size={24} />
                Call Now
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                WhatsApp Now
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-brand-orange" /> Serving Lusaka homes & businesses
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-brand-orange" /> Same Day Service
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-brand-orange" /> Licensed & Insured
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Professional Plumbing Solutions</h3>
            <p className="text-slate-600 leading-relaxed">
              From minor leaks to major installations, our expert plumbers in Lusaka have the tools and experience to handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Settings, title: "Emergency Plumbing", desc: "Available 24/7 for burst pipes, overflows, and complete plumbing breakdowns." },
              { icon: Wrench, title: "Pipe Repairs", desc: "Expert detection and repair of leaking, broken, or frozen pipes to prevent water damage." },
              { icon: Droplets, title: "Drain Cleaning", desc: "Professional clearing of blocked drains, sinks, and toilets using advanced equipment." },
              { icon: Search, title: "Leak Detection", desc: "Advanced non-destructive leak detection to find hidden issues behind walls or underground." },
              { icon: Bath, title: "Bathroom Installations", desc: "Complete bathroom renovations, plumbing fitting, shower, and sink installations." },
              { icon: Container, title: "Water Tank Installation", desc: "Supply, installation, and maintenance of water, borehole, and booster pump systems." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-50 text-brand-blue mb-6 rounded-2xl flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-orange-500/30">
                  <service.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <a href="#contact" className="text-brand-orange font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Request Service <span className="text-lg">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">The Most Trusted Plumbers in Lusaka</h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                When you face a plumbing emergency, you need a team that acts fast and gets the job done right the first time. We pride ourselves on unmatched reliability and high-quality workmanship.
              </p>
              
              <div className="space-y-4">
                {[
                  "24/7 Availability for all emergencies", 
                  "Fast Response Time within Lusaka", 
                  "Highly Experienced & Certified Technicians",
                  "Affordable & Transparent Pricing",
                  "Professional Advanced Equipment",
                  "Reliable, Honest, and Clean Service"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-brand-orange/20 p-1 rounded-full">
                      <CheckCircle2 className="text-brand-orange" size={24} />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-3 bg-white text-brand-blue hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-transform hover:-translate-y-1">
                  <Clock className="text-brand-orange" size={24} />
                  Book Same-Day Service
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-brand-orange/30 rounded-3xl transform rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Plumbing professional" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/5] object-center z-10"
                referrerPolicy="no-referrer"
              />
              {/* Trust Badge overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white text-brand-blue p-6 rounded-2xl shadow-2xl z-20 w-64">
                <div className="flex gap-1 mb-2 text-brand-orange">
                  {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                </div>
                <p className="font-bold text-lg">Top Rated in Zambia</p>
                <p className="text-sm text-slate-500">Trusted by hundreds of local customers & businesses.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-3">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Professional Plumbing Gallery</h3>
            <p className="text-slate-600 leading-relaxed">
              Take a look at some of our recent installations, upgrades, and repair projects across Lusaka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1520699049698-acd2fcc01009?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1607472586893-edb57cb31359?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1616422285121-7da757effece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ].map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all"
              >
                <img 
                  src={img} 
                  alt={`Plumbing work sample ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Search size={32} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Booking Section */}
      <section id="booking" className="py-24 bg-white relative">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-xl lg:p-16 p-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
              <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-3">Schedule Service</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Book an Appointment</h3>
              <p className="text-slate-600 leading-relaxed">
                Need routine maintenance or non-emergency repairs? Pick a date and time that works best for you, and we'll confirm your appointment shortly.
              </p>
            </div>
            
            {isBookingSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-2xl mx-auto relative z-10"
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle2 size={64} className="text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-green-800 mb-2">Booking Confirmed!</h4>
                <p className="text-green-700 mb-6">
                  Thank you for booking with Lusaka Smart Plumbers. We have received your request and will contact you shortly to confirm the details.
                </p>
                <button 
                  onClick={() => setIsBookingSubmitted(false)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-colors inline-block"
                >
                  Book Another Service
                </button>
              </motion.div>
            ) : (
              <form 
                className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
                onSubmit={(e) => { e.preventDefault(); setIsBookingSubmitted(true); }}
              >
                {/* Contact Details */}
                <div className="space-y-6">
                  <h4 className="font-bold text-brand-blue text-lg border-b border-slate-200 pb-2">1. Contact Details</h4>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input type="text" required placeholder="E.g. Jane Doe" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" required placeholder="097 1234567" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Address in Lusaka</label>
                    <input type="text" required placeholder="House No, Street, Area" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all bg-white" />
                  </div>
                </div>

                {/* Service & Time */}
                <div className="space-y-6">
                  <h4 className="font-bold text-brand-blue text-lg border-b border-slate-200 pb-2">2. Appointment Details</h4>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Select Service</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all bg-white text-slate-700">
                      <option value="">-- Choose a Service --</option>
                      <option value="pipe-repair">Pipe Repairs</option>
                      <option value="drain-cleaning">Drain Cleaning</option>
                      <option value="leak-detection">Leak Detection</option>
                      <option value="bathroom-install">Bathroom Installation</option>
                      <option value="water-tank">Water Tank / Geyser</option>
                      <option value="general-inspection">General Inspection / Maintenance</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                      <input type="date" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all bg-white text-slate-700" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time</label>
                      <input type="time" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all bg-white text-slate-700" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2">
                      <Calendar size={20} />
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">What Our Clients Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Chanda M.",
                role: "Homeowner in Makeni",
                text: "Quick response and very professional. Fixed my burst pipe in no time during a Sunday night! Highly recommend these guys for emergencies."
              },
              {
                name: "David K.",
                role: "Business Manager",
                text: "Best plumbers in Lusaka. We use them for all our commercial property maintenance. Always on time, honest diagnosing, and fair pricing."
              },
              {
                name: "Sarah T.",
                role: "Resident in Kabulonga",
                text: "They installed our water tank and booster pump perfectly. The team was incredibly clean, respectful of our property, and left everything spotless."
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 text-brand-orange mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-brand-blue text-lg">{review.name}</h4>
                  <p className="text-slate-500 text-sm">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* Contact Info & Map */}
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col text-white">
              <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
              <h3 className="text-3xl font-bold mb-6">Need a Plumber Now?</h3>
              <p className="text-slate-300 mb-10 leading-relaxed">
                Don't wait for the damage to get worse. Reach out to Lusaka Smart Plumbers immediately. We guarantee a fast response.
              </p>

              <div className="space-y-6 flex-grow mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/20 p-3 rounded-xl text-brand-orange shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-slate-400">Lusaka, Zambia<br/>(Providing city-wide coverage)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/20 p-3 rounded-xl text-brand-orange shrink-0">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">24/7 Phone</h4>
                    <a href={`tel:${phoneNumber}`} className="text-2xl font-bold text-white hover:text-brand-orange transition-colors">
                      {displayPhone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/20 p-3 rounded-xl text-brand-orange shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Availability</h4>
                    <p className="text-brand-orange font-bold">24 Hours / 7 Days a Week</p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="w-full h-48 rounded-xl overflow-hidden flex-shrink-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123145.41846506456!2d28.208470550000003!3d-15.416622800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f374744743ab%3A0x633fe67645f7c320!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1714594000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lusaka Map"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 p-10 md:p-16 bg-slate-50 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-brand-blue mb-8">Request a Service Callback</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="E.g. 097 1234567"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all text-slate-700 bg-white"
                  >
                    <option>Emergency Plumbing</option>
                    <option>Leak Repair</option>
                    <option>Blocked Drain</option>
                    <option>Water Tank / Geyser</option>
                    <option>Bathroom Fitting</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message Description</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly describe the plumbing issue..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-colors shadow-lg mt-2"
                >
                  Send Request
                </button>
                <div className="text-center mt-4 text-sm text-slate-500 font-medium">
                  Limited availability – book your service now
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-orange text-white p-1.5 rounded-md">
                <Droplets size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white leading-none">Lusaka Smart</h1>
                <span className="text-brand-orange font-bold text-xs tracking-widest uppercase">Plumbers</span>
              </div>
            </div>
            <p className="text-sm mb-6 max-w-sm">
              Your trusted partner for all residential and commercial plumbing needs in Lusaka, Zambia. Available 24/7 for emergencies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                <ThumbsUp size={18} />
              </a>
              <span className="text-xs self-center">Follow us on Facebook for updates</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Emergency Plumber Lusaka</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Pipe Leak Repair</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Drain Blockages</a></li>
              <li><a href="#gallery" className="hover:text-brand-orange transition-colors">Our Work Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Emergency Contact</h4>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-sm mb-2 text-slate-300">Call Now for Immediate Assistance</p>
              <a href={`tel:${phoneNumber}`} className="text-2xl font-bold text-brand-orange hover:text-white transition-colors block mb-4">
                {displayPhone}
              </a>
              <p className="text-xs">We aim to respond to all emergency calls in Lusaka within the shortest time possible.</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Lusaka Smart Plumbers. All rights reserved. Servicing Lusaka, Zambia.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></span>
      </a>
    </div>
  );
}
