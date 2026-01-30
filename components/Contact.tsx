import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-800">
          
          {/* Info Side */}
          <div className="p-8 md:p-10 bg-brand-600 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
              <p className="text-brand-100 mb-8">
                Have questions about our enterprise plans? Need help with integration? Our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-brand-200" />
                  <span>mubashirdawood05@gmail.com</span>
                </div>
                        <div className="flex items-center gap-4">
                  <Mail className="text-brand-200" />
                  <span>+92 328 8640289</span>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare className="text-brand-200" />
                  <span>Live Chat Available 24/7</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 md:mt-0">
               <div className="flex gap-4">
                  {/* Social placeholders */}
                  <div className="w-8 h-8 rounded bg-brand-500/50 flex items-center justify-center cursor-pointer hover:bg-brand-500 transition-colors">X</div>
                  <div className="w-8 h-8 rounded bg-brand-500/50 flex items-center justify-center cursor-pointer hover:bg-brand-500 transition-colors">In</div>
                  <div className="w-8 h-8 rounded bg-brand-500/50 flex items-center justify-center cursor-pointer hover:bg-brand-500 transition-colors">Fb</div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-10 md:w-3/5">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">We'll get back to you within 24 hours.</p>
                <Button variant="outline" className="mt-8" onClick={() => setIsSubmitted(false)}>Send another</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="Mubashir "
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="123@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;