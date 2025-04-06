'use client';

import React from "react";
import { Search, Bell, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="px-4 py-3 bg-black text-white">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Full content for md and up */}
        <div className="hidden md:flex items-center justify-between w-full">
        
          <nav className="flex items-center space-x-6 text-lg">
  <Link href="/" className="hover:text-gray-300">Home</Link>
  <span className="text-gray-600">|</span>
  <Link href="/gamestore" className="hover:text-gray-300">Game Store</Link>
  <span className="text-gray-600">|</span>
  <Link href="/leaderboard" className="hover:text-gray-300">Leaderboard</Link>
</nav>

         
          <div className="flex items-center space-x-7">
          
            <div className="relative w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="What are you looking for?"
                className="pl-10 pr-4 py-2 bg-black border border-gray-600 rounded-full text-sm text-white placeholder:text-gray-400"
              />
            </div>
            <div className="h-6 w-px bg-gray-700" />

            {/* Bell icon */}
            <div className="h-10 w-10 rounded-full border border-gray-700 flex items-center justify-center relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </div>

            <div className="h-6 w-px bg-gray-700" />

            {/* Shopping bag */}
            <div className="h-10 w-10 rounded-full border border-gray-700 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>

            <div className="h-6 w-px bg-gray-700" />

            {/* Avatar */}
            <div className="h-10 w-10 rounded-full border border-gray-700 flex items-center justify-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Mobile-only search bar */}
        <div className="flex md:hidden w-full">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-black border border-gray-600 rounded-full text-sm text-white placeholder:text-gray-400 w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
