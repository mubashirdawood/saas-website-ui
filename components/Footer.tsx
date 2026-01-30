import React from 'react';
import { Hexagon, Twitter, Github, Linkedin, Disc as Discord } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-brand-600 dark:text-brand-400">
                <Hexagon size={28} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Nexus</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm">
              Making cloud deployment accessible for everyone. Build, ship, and scale with confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"><Discord size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Features</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Integrations</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Changelog</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Careers</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Contact</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 dark:hover:text-brand-400">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Nexus Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-500">
             <span>Made with ❤️ for Startups</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;