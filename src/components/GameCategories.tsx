
import React from 'react';
import { Gamepad, Rocket, Swords, Car, Bot, Puzzle, Users, Mountain } from "lucide-react";

const categories = [
  {
    name: "Action",
    icon: Swords,
    color: "from-red-500 to-orange-500",
    games: 450
  },
  {
    name: "Adventure",
    icon: Mountain,
    color: "from-green-500 to-emerald-500",
    games: 386
  },
  {
    name: "Racing",
    icon: Car,
    color: "from-blue-500 to-cyan-500",
    games: 272
  },
  {
    name: "RPG",
    icon: Gamepad,
    color: "from-purple-500 to-pink-500",
    games: 589
  },
  {
    name: "Puzzle",
    icon: Puzzle,
    color: "from-yellow-500 to-amber-500",
    games: 310
  },
  {
    name: "Sci-Fi",
    icon: Rocket,
    color: "from-indigo-500 to-violet-500",
    games: 245
  },
  {
    name: "Strategy",
    icon: Bot,
    color: "from-teal-500 to-green-500",
    games: 195
  },
  {
    name: "Multiplayer",
    icon: Users,
    color: "from-pink-500 to-rose-500",
    games: 420
  }
];

const GameCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gaming-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Browse by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="gaming-card p-6 flex flex-col items-center text-center cursor-pointer game-card-hover"
            >
              <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-br ${category.color}`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
              <p className="text-sm text-gray-400">{category.games} games</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
