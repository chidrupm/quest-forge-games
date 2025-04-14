
import React from 'react';
import { Button } from "@/components/ui/button";
import { Trophy, Star, TrendingUp } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gaming-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gaming-blue/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gaming-purple/10 border border-gaming-purple/20">
              <TrendingUp className="h-4 w-4 text-gaming-purple" />
              <span className="text-sm font-medium">Trending this week</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover & Track Your
              <span className="block gaming-gradient-text">Gaming Adventures</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg">
              Explore new worlds, track your progress, and connect with fellow gamers
              on the ultimate gaming platform.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="gaming-button">Explore Games</Button>
              <Button className="gaming-outline-button">Create Account</Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-gaming-accent" />
                <span className="text-sm font-medium">2,500+ Games</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-gaming-accent" />
                <span className="text-sm font-medium">Top Rated</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[16/9] rounded-lg overflow-hidden border-2 border-gaming-purple/30 shadow-2xl shadow-gaming-purple/20 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Gaming experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">Epic Adventure</h3>
                  <p className="text-sm text-gray-300">Start your journey today</p>
                </div>
                <div className="bg-gaming-purple/80 px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 p-4 rounded-lg gaming-card animate-pulse-glow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gaming-blue/20 flex items-center justify-center">
                  <Star className="h-5 w-5 text-gaming-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">New Release</p>
                  <p className="font-semibold">Mystic Realms</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 p-4 rounded-lg gaming-card animate-pulse-glow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gaming-purple/20 flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-gaming-purple" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Top Rated</p>
                  <p className="font-semibold">Galaxy Quest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
