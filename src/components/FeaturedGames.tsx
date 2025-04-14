
import React from 'react';
import GameCard from './GameCard';
import { ChevronRight } from "lucide-react";

const featuredGames = [
  {
    id: 1,
    title: "Stellar Odyssey",
    imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    genre: "Sci-Fi Adventure",
    rating: 4.8,
    price: "$59.99",
    isNew: true
  },
  {
    id: 2,
    title: "Mystic Realms",
    imageUrl: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    genre: "Fantasy RPG",
    rating: 4.7,
    price: "$49.99",
  },
  {
    id: 3,
    title: "Night Raiders",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    genre: "Action Shooter",
    rating: 4.5,
    price: "$39.99",
  },
  {
    id: 4,
    title: "Speed Demons",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    genre: "Racing",
    rating: 4.4,
    price: "$29.99",
    isNew: true
  }
];

const FeaturedGames: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Games</h2>
          <a href="#" className="flex items-center text-gaming-purple hover:underline">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
