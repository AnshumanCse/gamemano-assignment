
// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import type { CarouselApi } from "@/components/ui/carousel";
// import { Circle } from "lucide-react"; 

// const games = [
//   {
//     title: "Days Gone",
//     releaseDate: "30th December",
//     description: "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
//     bg: "https://static.vecteezy.com/system/resources/previews/038/956/034/non_2x/ai-generated-futuristic-esport-background-for-gaming-live-streaming-esport-game-tournament-competition-neon-banner-photo.jpeg",
//   },
//   {
//     title: "Another Game",
//     releaseDate: "31st January",
//     description: "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
//     bg: "https://static.vecteezy.com/system/resources/previews/038/956/034/non_2x/ai-generated-futuristic-esport-background-for-gaming-live-streaming-esport-game-tournament-competition-neon-banner-photo.jpeg",
//   },
//   {
//     title: "Final Game",
//     releaseDate: "5th March",
//     description: "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
//     bg: "https://static.vecteezy.com/system/resources/previews/038/956/034/non_2x/ai-generated-futuristic-esport-background-for-gaming-live-streaming-esport-game-tournament-competition-neon-banner-photo.jpeg",
//   },
// ];

// const GameCarousel = () => {
//   const plugin = useRef(Autoplay({ delay: 5000 }));
//   const [api, setApi] = useState<CarouselApi>();
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   useEffect(() => {
//     if (!api) return;
//     setSelectedIndex(api.selectedScrollSnap());
//     api.on("select", () => {
//       setSelectedIndex(api.selectedScrollSnap());
//     });
//   }, [api]);

//   return (
//     <div className="w-full  relative overflow-hidden">
//       <Carousel plugins={[plugin.current]} setApi={setApi} className="w-full">
//         <CarouselContent className="w-full">
//           {games.map((game, index) => (
//             <CarouselItem key={index} className="relative w-full h-[90dvh] max-h-[1000px]">
//             {game.bg && (
//                 <Image
//                   src={game.bg}
//                   alt={game.title}
//                   fill
//                   className="object-cover brightness-[.3]"
//                 />
//               )}

//               <div className="absolute w-full z-10 top-28 left-5 md:left-20 text-white max-w-xl space-y-5">
             
//                   <span className="-ml-1 text-6xl font-normal font-[family-name:var(--font-wallpoet)]">{game.title}</span>
//                   <h3 className="bg-[#1E1E1E] max-w-sm rounded-lg mt-3   font-[family-name:var(--font-poppins)]">RELEASE DATE : {game.releaseDate.toUpperCase()}</h3>
                
               
//                 <p className="font-normal mt-10 md:text-base text-lg font-[family-name:var(--font-prosto)]">
//                   {game.description}
//                 </p>
//                 <div className="flex flex-wrap items-center gap-4 mt-16">
//                   <Button className=" rounded-full p-6 text-lg px-8">
//                     Try For Free
//                   </Button>
//                   <div className="flex items-center gap-2 text-xl">
//                     <span>Available on :</span>
//                     <Image
//                   src="/win_IOS.png"
//                   alt="Window-IOS"
//                   height={40}
//                   width={120}
//                   className="object-cover"
//                 />
//                   </div>
//                 </div>
//                 <div className="text-sm -mt-3">Buy now for $40 only</div>
//                 <div className="relative flex items-center gap-2  text-xs  mt-10">
 
//   <div className="relative w-5 h-5">
//     <span className="absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75 animate-ping" />
//     <Circle className="relative z-10 w-5 h-5 text-green-500" fill="currentColor" />
//   </div>

//   <span>40 of your friends are playing</span>
// </div>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//         {games.map((_, i) => (
//           <div
//             key={i}
//             className={`w-2 h-2 rounded-full ${
//               i === selectedIndex ? "bg-yellow-400" : "bg-white/40"
//             } transition-all duration-300`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GameCarousel;

"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import type { CarouselApi } from "@/components/ui/carousel";
import { Circle } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
 

const games = [
  {
    title: "Days",
    releaseDate: "30th December",
    description:
      "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
    bg: "/bg-img.jpeg",
  },
  {
    title: "Echo",
    releaseDate: "31st January",
    description:
      "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
    bg: "/bg2.jpg",
  },
  {
    title: "Steel",
    releaseDate: "5th March",
    description:
      "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
    bg: "https://static.vecteezy.com/system/resources/previews/038/956/034/non_2x/ai-generated-futuristic-esport-background-for-gaming-live-streaming-esport-game-tournament-competition-neon-banner-photo.jpeg",
  },
];

const GameCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 5000 }));
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);


  const words = ["Gone", "Blow", "Crazy"];
 

  return (
    <div className="w-full relative overflow-hidden">
      <Carousel plugins={[plugin.current]} setApi={setApi} className="w-full">
        <CarouselContent className="w-full ">
          {games.map((game, index) => (
            <CarouselItem
              key={index}
              className="relative w-full lg:h-screen md:h-[70dvh] h-[200dvh]  max-h-[1000px]"
            >
              {game.bg && (
                <Image
                  src={game.bg}
                  alt={game.title}
                  fill
                  className="object-cover brightness-[.3]"
                />
              )}

              <div className="absolute w-full z-10 top-24 left-4 sm:left-6 md:left-20 text-white max-w-xl space-y-5 px-2 sm:px-4 ">
                <span className=" text-4xl sm:text-5xl md:text-6xl font-normal font-[family-name:var(--font-wallpoet)]">
                  {game.title}
                  <FlipWords words={words} className="ml-2" />
                </span>
                <h3 className="bg-[#1E1E1E] w-fit rounded-lg mt-3 px-3 py-1 text-sm sm:text-base font-[family-name:var(--font-poppins)]">
                  RELEASE DATE : {game.releaseDate.toUpperCase()}
                </h3>

                <p className="font-normal mt-6 sm:mt-10 text-sm sm:text-base md:text-lg font-[family-name:var(--font-prosto)]">
                  {game.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-10 sm:mt-16">
                  <Button className="rounded-full px-6 sm:px-8 py-4 text-base sm:text-lg">
                    Try For Free
                  </Button>
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <span>Available on :</span>
                    <Image
                      src="/win_IOS.png"
                      alt="Window-IOS"
                      height={40}
                      width={120}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-sm mt-2 sm:-mt-3">Buy now for $40 only</div>

                <div className="relative flex items-center gap-2 text-xs sm:text-sm mt-6 sm:mt-10">
                  <div className="relative w-5 h-5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75 animate-ping" />
                    <Circle
                      className="relative z-10 w-5 h-5 text-green-500"
                      fill="currentColor"
                    />
                  </div>
                  <span>40 of your friends are playing</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {games.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === selectedIndex ? "bg-yellow-400" : "bg-white/40"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default GameCarousel;
