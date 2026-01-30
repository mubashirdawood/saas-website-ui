import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Sign Up',
    description: 'Create your account in seconds. No credit card required for the starter plan.',
    icon: UserPlus
  },
  {
    id: 2,
    title: 'Configure',
    description: 'Connect your repositories and configure your deployment settings with our CLI.',
    icon: Settings
  },
  {
    id: 3,
    title: 'Launch & Scale',
    description: 'Deploy with a single push. We handle the infrastructure, scaling, and security.',
    icon: Rocket
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
            style={{ 
                backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', 
                backgroundSize: '32px 32px' 
            }}
        ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            From code to global scale
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Three simple steps to deploy your application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -z-10"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-50 dark:border-gray-900 shadow-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 z-10 relative">
                  <step.icon size={28} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;