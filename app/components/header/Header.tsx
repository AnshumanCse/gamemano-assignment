'use client';

import React from "react";
import { Search, Bell, UserCircle, Circle,ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-6 py-3">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left nav */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-gray-300">Home</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-gray-300">Game Store</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-gray-300">Leaderboard</a>
        </nav>

        {/* Right */}
        <div className="flex items-center space-x-7">
          {/* Search bar */}
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="pl-10 pr-4 py-2 bg-black border border-gray-600 rounded-full text-sm text-white placeholder:text-gray-400"
            />
          </div>

          {/* Icon: Bell */}
          <div className="h-10 w-10 rounded-full border border-gray-700 flex items-center justify-center relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-700" />

          {/* Icon: User */}
          <div className="h-10 w-10 rounded-full border border-gray-700 flex items-center justify-center">
            <ShoppingBag  className="w-5 h-5" />
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-700" />

          {/* Icon: Circle */}
          <div className="h-10 w-10 rounded-full border border-gray-700 flex items-center justify-center">
            <Circle className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
