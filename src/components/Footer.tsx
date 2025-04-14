
import React from 'react';
import { Gamepad2, Mail, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gaming-dark/80 border-t border-gaming-purple/20 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-7 w-7 text-gaming-purple" />
              <h3 className="text-xl font-bold gaming-gradient-text">Quest Forge</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Discover, track, and share your gaming adventures with the ultimate gaming companion app.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gaming-purple/20 flex items-center justify-center 
                                    hover:bg-gaming-purple/40 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gaming-purple/20 flex items-center justify-center 
                                    hover:bg-gaming-purple/40 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gaming-purple/20 flex items-center justify-center 
                                    hover:bg-gaming-purple/40 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gaming-purple/20 flex items-center justify-center 
                                    hover:bg-gaming-purple/40 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Discover</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Library</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Wishlist</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Action</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Adventure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">RPG</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Sports</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-5 w-5 text-gaming-purple" />
              <span className="text-gray-400">support@questforge.com</span>
            </div>
            <div className="gaming-card p-4">
              <h5 className="font-medium mb-2">Subscribe to our newsletter</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 rounded bg-gray-800/70 border border-gaming-purple/20 
                            focus:outline-none focus:border-gaming-purple flex-grow"
                />
                <button className="gaming-button px-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Quest Forge. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-gaming-purple transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gaming-purple transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gaming-purple transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
