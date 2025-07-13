import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_6juq8q6';
const TEMPLATE_ID = 'template_ysflw3e';
const PUBLIC_KEY = 'q51q1451XFyTuoO01';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kochuseyin@hotmail.fr',
      href: 'mailto:kochuseyin@hotmail.fr'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '(+90) 5415700509',
      href: 'tel:+905415700509'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'Huseyin-Koc',
      href: 'https://github.com/Huseyin-Koc'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'hüseyin-koç',
      href: 'https://www.linkedin.com/in/hüseyin-koç-96083a229/'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (err) {
      setIsSubmitting(false);
      setError('Failed to send message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 relative"
    >
      {/* Arka plan glow */}
      <span className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-primary-500/20 to-purple-500/20 blur-3xl opacity-60 z-0"></span>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Başlık ve açıklama */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Contact
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg"
          >
            You can use the form below to contact me or reach me directly via my contact information.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="space-y-8 w-full"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 8px 32px 0 rgba(80,0,255,0.15), 0 0 16px 4px #a78bfa",
                    borderColor: "#a78bfa",
                  }}
                  className="flex items-center gap-4 p-5 bg-white/10 border border-transparent rounded-xl glass-effect transition-all duration-300 w-full relative overflow-hidden group hover:border-gradient-to-r hover:from-primary-500 hover:to-purple-500"
                  style={{
                    borderImage: "linear-gradient(90deg, #38bdf8 0%, #a78bfa 100%) 1",
                  }}
                >
                  {/* Köşede gradient glow */}
                  <span className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary-500/30 to-purple-500/30 blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-300 pointer-events-none"></span>
                  {/* İkon kutusu */}
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary-600/80 to-purple-600/80 shadow-lg flex items-center justify-center">
                    <info.icon className="text-white" size={28} />
                  </div>
                  {/* Bilgi */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-base text-gray-300 font-mono">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name Surname
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border-2 border-transparent rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 glass-effect animated-gradient-border"
                    placeholder="Your Name Surname"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border-2 border-transparent rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 glass-effect animated-gradient-border"
                    placeholder="email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border-2 border-transparent rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 glass-effect animated-gradient-border"
                  placeholder="Subject of your message"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border-2 border-transparent rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 glass-effect animated-gradient-border resize-none"
                  placeholder="Write your message here..."
                />
              </motion.div>

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-center font-medium"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: "0 0 24px 4px #a78bfa88" }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting || isSubmitted
                    ? 'bg-green-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 to-purple-600 hover:shadow-xl'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className="flex items-center"
                    >
                      <CheckCircle size={20} />
                    </motion.span>
                    <span>Message Sent!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;