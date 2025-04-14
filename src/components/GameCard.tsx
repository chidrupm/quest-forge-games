
import React from 'react';
import { Star, Heart } from "lucide-react";

export interface GameCardProps {
  id: number;
  title: string;
  imageUrl: string;
  genre: string;
  rating: number;
  price: string;
  isNew?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ 
  title, 
  imageUrl, 
  genre, 
  rating, 
  price, 
  isNew = false 
}) => {
  return (
    <div className="gaming-card group game-card-hover">
      <div className="relative aspect-[3/4] rounded-t-lg overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark to-transparent opacity-70"></div>
        
        {isNew && (
          <div className="absolute top-3 left-3 bg-gaming-accent px-2 py-1 rounded text-xs font-semibold">
            NEW
          </div>
        )}
        
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-800/70 flex items-center justify-center
                           hover:bg-gaming-purple/70 transition-colors">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
          <div className="flex items-center gap-1 bg-gaming-purple/20 px-2 py-1 rounded">
            <Star className="h-3 w-3 text-gaming-accent" fill="currentColor" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-400">{genre}</p>
        
        <div className="flex justify-between items-center pt-2">
          <span className="font-bold gaming-gradient-text">{price}</span>
          <button className="px-3 py-1 text-sm rounded-full bg-gaming-purple/20 border border-gaming-purple/30
                             hover:bg-gaming-purple/40 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
