import React, { useState } from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#eaf0f0] dark:border-[#2a3a39]"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
         
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
              <div
                className="size-8 bg-primary rounded-lg flex items-center justify-center text-white"
              >
                {/* <span className="material-symbols-outlined">storefront</span> */}
                <img src={logo} alt="logo" />
              </div>
              <h1
                className="text-xl sm:text-2xl font-bold tracking-tight text-[#111818] dark:text-white"
              >
                LK Mart
              </h1>
            </div>
           
            <div className="hidden md:flex flex-1 justify-center gap-8 items-center">
              <Link
                className="text-sm font-semibold text-[#111818] dark:text-gray-200 hover:text-primary transition-colors"
                to={"/"}
                >Home</Link>
              <Link
                className="text-sm font-semibold text-[#111818] dark:text-gray-200 hover:text-primary transition-colors"
                to={"/latest-offer"}
              >Offer Products</Link>
              <Link
                className="text-sm font-semibold text-[#111818] dark:text-gray-200 hover:text-primary transition-colors"
                to={"/about"}
                >About</Link>
              <Link
                className="text-sm font-semibold text-[#111818] dark:text-gray-200 hover:text-primary transition-colors"
                to={"/contact-and-location"}
                >Location</Link>
              <Link
                className="text-sm font-bold  bg-accent/10 px-3 py-1 rounded-full hover:bg-accent/20 transition-colors"
                to={"/delivery-and-ordering"}
                >Delivery</Link>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+918160751735" target='_blank'>
              <button
                className="hidden sm:flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#eaf0f0] dark:bg-[#2a3a39] text-[#111818] dark:text-white text-sm font-bold hover:bg-[#dce6e6] dark:hover:bg-[#354544] transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span className="hidden lg:inline">+91 8160751735</span>
              </button>
              </a>
              <button 
                onClick={toggleMenu}
                className="md:hidden p-2 text-[#111818] dark:text-white hover:bg-[#eaf0f0] dark:hover:bg-[#2a3a39] rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Slide-in */}
      <div 
        className={`fixed top-20 right-0 h-[calc(100vh-80px)] w-64 bg-background-light dark:bg-background-dark border-l border-[#eaf0f0] dark:border-[#2a3a39] z-40 md:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          <Link
            to={"/"}
            onClick={closeMenu}
            className="text-base font-semibold text-[#111818] dark:text-gray-200 hover:text-primary hover:bg-accent/10 px-3 py-2 rounded-lg transition-colors"
          >Home</Link>
          <Link
            to={"/latest-offer"}
            onClick={closeMenu}
            className="text-base font-semibold text-[#111818] dark:text-gray-200 hover:text-primary hover:bg-accent/10 px-3 py-2 rounded-lg transition-colors"
          >Offer Products</Link>
          <Link
            to={"/about"}
            onClick={closeMenu}
            className="text-base font-semibold text-[#111818] dark:text-gray-200 hover:text-primary hover:bg-accent/10 px-3 py-2 rounded-lg transition-colors"
          >About</Link>
          <Link
            to={"/contact-and-location"}
            onClick={closeMenu}
            className="text-base font-semibold text-[#111818] dark:text-gray-200 hover:text-primary hover:bg-accent/10 px-3 py-2 rounded-lg transition-colors"
          >Location</Link>
          <Link
            to={"/delivery-and-ordering"}
            onClick={closeMenu}
            className="text-base font-bold bg-accent/10 px-3 py-2 rounded-full hover:bg-accent/20 transition-colors"
          >Delivery</Link>
          <hr className="my-2 border-[#eaf0f0] dark:border-[#2a3a39]" />
          <a href="tel:+918160751735" target='_blank' className="w-full">
            <button
              className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#eaf0f0] dark:bg-[#2a3a39] text-[#111818] dark:text-white text-sm font-bold hover:bg-[#dce6e6] dark:hover:bg-[#354544] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>+91 8160751735</span>
            </button>
          </a>
        </div>
      </div>
    </>
  )
}


export default Navbar