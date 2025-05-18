"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  HomeOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  UserOutlined,
  MenuOutlined
} from '@ant-design/icons';
import logo from "@/images/logo.png";
import Image from 'next/image';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: <HomeOutlined /> },
    { href: '/products', label: 'Products', icon: <AppstoreOutlined /> },
    { href: '/about', label: 'About Us', icon: <InfoCircleOutlined /> },
    { href: '/contact', label: 'Contact', icon: <ContactsOutlined /> },
  ];

  return (  
    <nav className=" border-b-2 border-[#333333]  ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and desktop menu */}
          <div className="flex items-center">
            <Link href="/" className="text-blue-600 font-bold text-xl">
             
             <Image
             src={logo}
              alt="Logo"
              width={70}
              height={70}
             />

            </Link>
            
          </div>

          {/* Right side - Login and mobile menu button */}
          <div className="flex items-center gap-4">
                        {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 ml-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-[#E8E3D6] hover:text-gray-900 transition-colors"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Link>
              ))}
            </div>
            {/* Desktop Login */}
            <Link
              href="/login"
              className="hidden md:flex items-center px-4 py-2  bg-[#333333] text-white rounded-md  transition-colors"
            >
              <UserOutlined />
              <span className="ml-2">Login</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <MenuOutlined className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full  backdrop-blur-md
          shadow-lg z-50 rounded-b-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            ))}
            <Link
              href="/login"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <UserOutlined />
              <span className="ml-2">Login</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;