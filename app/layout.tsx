

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { Prosto_One } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { Wallpoet } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const prostoOne = Prosto_One({
  variable: "--font-prosto-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const wallpoet = Wallpoet({
  variable: "--font-wallpoet",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${prostoOne.variable} ${pressStart2P.variable} ${wallpoet.variable} antialiased`}
      >
       {children}
      </body>
    </html>
  );
}

// app/layout.tsx



// import { usePathname } from 'next/navigation';
// import Header from './components/header/Header';
// import { SidebarDemo } from './components/sidebar/Sidebar';
// import Footer from './components/footer/Footer';

// import type { Metadata } from 'next';
// import './globals.css';

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   // Routes that shouldn't show layout
//   const noLayoutRoutes = ['/login', '/signup'];

//   const shouldShowLayout = !noLayoutRoutes.includes(pathname);

//   return (
//     <html lang="en">
//       <body>
//         {shouldShowLayout ? (
//           <div className="flex flex-col min-h-screen">
//             <Header />
//             <div className="flex flex-1">
//               <SidebarDemo />
//               <main className="flex-1 p-4">{children}</main>
//             </div>
//             <Footer />
//           </div>
//         ) : (
//           children
//         )}
//       </body>
//     </html>
//   );
// }
