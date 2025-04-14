
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, Gamepad2, Menu, X } from "lucide-react";
import { useState } from 'react';
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 py-4 backdrop-blur-md bg-gaming-dark/80 border-b border-gaming-purple/20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-8 w-8 text-gaming-purple" />
          <h1 className="text-2xl font-bold gaming-gradient-text">Quest Forge</h1>
        </div>

        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gaming-light hover:text-gaming-purple transition-colors">Home</a>
            <a href="#" className="text-gaming-light hover:text-gaming-purple transition-colors">Discover</a>
            <a href="#" className="text-gaming-light hover:text-gaming-purple transition-colors">Categories</a>
            <a href="#" className="text-gaming-light hover:text-gaming-purple transition-colors">Library</a>
          </nav>
        )}

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search games..." 
              className="pl-10 pr-4 py-2 rounded-full bg-gray-800/50 border border-gaming-purple/30 
                         focus:outline-none focus:border-gaming-purple transition-all w-48 lg:w-64"
            />
          </div>
          <Button className="gaming-button hidden md:flex">Sign In</Button>
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-gaming-dark/95 z-40 animate-slide-in">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search games..." 
                className="pl-10 pr-4 py-2 rounded-full bg-gray-800/50 border border-gaming-purple/30 
                           focus:outline-none focus:border-gaming-purple transition-all w-full"
              />
            </div>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-lg text-gaming-light hover:text-gaming-purple transition-colors py-2">Home</a>
              <a href="#" className="text-lg text-gaming-light hover:text-gaming-purple transition-colors py-2">Discover</a>
              <a href="#" className="text-lg text-gaming-light hover:text-gaming-purple transition-colors py-2">Categories</a>
              <a href="#" className="text-lg text-gaming-light hover:text-gaming-purple transition-colors py-2">Library</a>
            </nav>
            <Button className="gaming-button w-full">Sign In</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
