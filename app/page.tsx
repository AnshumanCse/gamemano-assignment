import Header from "./components/header/Header";
import { SidebarDemo } from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer"; 
import GameCarousel from "./components/landing/GameCarousel";
import MostTrending from "./components/landing/MostTrending";
import GameHighlight from "./components/landing/GameHighlight";
import GameHighlight2 from "./components/landing/GameHighlight2";

export default function Home() {
  return (
    <div className="flex flex-col bg-black text-white">
      {/* ========== Header ========== */}
      <Header />

      {/* ========== Body with Sidebar & Main ========== */}
      <div className="flex flex-1">
       
    
        <SidebarDemo />

      
        <main className=" flex-1 ">
        <GameCarousel/>
        <MostTrending/>
        <GameHighlight/>
        <GameHighlight2/>
                  </main>
      </div>

      {/* ========== Footer ========== */}
      <Footer />
    </div>
  );
}
