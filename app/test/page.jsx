import React from 'react'
import { Poppins } from 'next/font/google';
import { Button } from "@/components/ui/button"
import { Sidebar } from 'lucide-react';
import { SidebarDemo } from '../components/sidebar/Sidebar';


function page() {
  return (
    <div className="font-[family-name:var(--font-press-start)]">Hello this is pagepage
    
    <SidebarDemo/>

     </div>
  )
}

export default page