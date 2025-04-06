import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12100E] text-white text-center border-t border-[#2E2C29] py-6">
      <div className="flex flex-wrap justify-center gap-6 text-sm font-medium mb-4 text-gray-300">
        <a href="#" className="hover:text-white">Privacy Notice</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
        <a href="#" className="hover:text-white">Cookie Policy</a>
        <a href="#" className="hover:text-white">Company Information</a>
        <a href="#" className="hover:text-white">Cookie Preferences</a>
      </div>

      <p className="text-xs text-gray-400 mb-4">
        Copyright © GameQuest, Inc. All rights reserved
      </p>

      <div className="flex justify-center gap-4">
        <a href="#" className="p-2 rounded border border-gray-700 hover:bg-gray-700 transition">
          <Twitter className="h-4 w-4 text-gray-300 hover:text-white" />
        </a>
        <a href="#" className="p-2 rounded border border-gray-700 hover:bg-gray-700 transition">
          <Facebook className="h-4 w-4 text-gray-300 hover:text-white" />
        </a>
        <a href="#" className="p-2 rounded border border-gray-700 hover:bg-gray-700 transition">
          <Instagram className="h-4 w-4 text-gray-300 hover:text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
