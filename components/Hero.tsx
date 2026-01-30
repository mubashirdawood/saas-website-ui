import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-500/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />
        <div className="absolute top-40 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold mb-6 border border-brand-100 dark:border-brand-800">
            v2.0 is now live: Enhanced AI Capabilities
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Build Faster. Scale Smarter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-purple-600">
              Launch Confidently.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            The all-in-one platform for modern startups. Deploy, manage, and scale your applications with AI-driven insights and enterprise-grade security.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="w-full sm:w-auto gap-2 group">
              Get Started <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
              <Play size={18} fill="currentColor" /> View Demo
            </Button>
          </div>
        </motion.div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="rounded-xl bg-gray-900 p-2 shadow-2xl border border-gray-800 ring-1 ring-white/10 backdrop-blur-sm">
             <div className="rounded-lg overflow-hidden bg-gray-800 border border-gray-700 aspect-[16/9] relative group cursor-pointer">
                {/* Simulated Dashboard UI Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <img 
                        src="https://picsum.photos/1200/675?grayscale&blur=2" 
                        alt="Dashboard Preview" 
                        className="opacity-40 object-cover w-full h-full mix-blend-overlay transition-opacity duration-500 group-hover:opacity-20" 
                    />
                     <div className="absolute inset-0 flex items-center justify-center">
                         <span className="text-gray-500 font-mono text-sm">Interactive Dashboard Preview Loaded Below</span>
                     </div>
                </div>
                 {/* Floating Elements Animation */}
                 <div className="absolute top-10 left-10 right-10 bottom-10 border border-dashed border-gray-600 rounded opacity-20"></div>
             </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl blur opacity-20 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;