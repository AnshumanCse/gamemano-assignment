import Header from "./components/header/Header";
import { SidebarDemo } from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer"; // optional

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ========== Header ========== */}
      <Header />

      {/* ========== Body with Sidebar & Main ========== */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SidebarDemo />

        {/* Main Content */}
        <main className="flex-1 p-4 ">
          Hello
                  </main>
      </div>

      {/* ========== Footer ========== */}
      <Footer />
    </div>
  );
}
