"use client";

import React from "react";
import { Circle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";

const GameHighlight2 = () => {
  const words = ["Evolution", "Transition", "Gaming"];

  return (
    <>
       <div className="bg-[#28251c] p-10"/>
    <section className="relative  border-l border-gray-500 bg-gradient from-black to-[#342e24] text-white py-10 pr-4 pl-[150px]">
      {/* Top Right Status */}
 

   
      <div className="absolute top-10 right-10 text-right space-y-1">
        <div className="text-lg text-orange-400">★★★★☆</div>
        <div className="flex items-center justify-end text-xs gap-2">
  <div className="relative w-4 h-4 flex items-center justify-center">
    <span className="absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75 animate-ping" />
    <Circle
      className="relative z-10 w-4 h-4 text-green-500"
      fill="currentColor"
    />
  </div>
  <span className="text-green-300">40 of your friends are playing</span>
</div>

      </div>

      {/* Main Content */}
      <div className="text-white max-w-2xl space-y-6 px-2 sm:px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-[family-name:var(--font-wallpoet)]">
          <FlipWords words={words} className="ml-2" />
        </h1>

        <h3 className="bg-[#1E1E1E] w-fit rounded-lg mt-3 px-3 py-1 text-sm sm:text-base font-[family-name:var(--font-poppins)]">
          RELEASE DATE : 25TH MAY
        </h3>

        <p className="font-normal text-sm sm:text-base md:text-lg font-[family-name:var(--font-prosto)]">
          Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.
        </p>

        {/* CTA Section */}
        <div className="flex flex-wrap items-center gap-4 mt-10 sm:mt-16">
          <Button className="rounded-full px-7 sm:px-8 py-7 text-base sm:text-lg">
           Play Now
          </Button>

          <div className="flex items-center gap-2 text-sm sm:text-base">
            <span>Available on :</span>
            <Image
              src="/win_IOS.png"
              alt="Window-iOS"
              height={40}
              width={120}
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-sm mt-2 sm:-mt-3">Buy now for $40 only</div>
      </div>
    </section>
    <div className="bg-[#28251c] p-10"/>
    </>
  );
};

export default GameHighlight2;
