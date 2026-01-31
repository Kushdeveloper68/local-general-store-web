import React from 'react'
import {Navbar, Footer} from "../components"
import { getWhatsAppLink } from '../api/api';


  const handleWhatsAppHero = () => {
    const link = getWhatsAppLink()
    window.open(link, '_blank')
  }
function ContectAndLocation() {
  return (
     <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
    >
      {/* <!-- TopNavBar --> */}
    <Navbar/>
      <div
        className="layout-container flex flex-col flex-1 items-center py-8 md:py-12 px-4 md:px-10"
      >
        <div className="w-full max-w-[960px] flex flex-col gap-10">
          {/* <!-- Hero & Actions --> */}
          <section className="flex flex-col items-center text-center gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h1
                className="text-[#111818] dark:text-white text-4xl md:text-5xl font-black leading-[1.1] tracking-[-0.033em]"
              >
                Visit Us or Order Online
              </h1>
              <p
                className="text-[#5e8785] dark:text-[#9bbbb9] text-lg font-medium leading-normal"
              >
                Your favorite local spices and groceries. We are ready to serve
                you via Call or WhatsApp for quick delivery.
              </p>
            </div>
            <div
              className="flex flex-col sm:flex-row gap-4 w-full max-w-[600px] justify-center"
            >
              <a href="tel:+918160751735" target='_blank'>
              <button
                className="group flex-1 flex items-center justify-center gap-3 bg-primary hover:bg-[#256663] text-white h-16 rounded-xl px-6 transition-all shadow-lg hover:shadow-primary/25 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[28px]">call</span>

                <div className="flex flex-col items-start">
                  <span
                    className="text-xs opacity-90 font-medium uppercase tracking-wide"
                    >Call Now</span
                  >
                  <span className="text-lg font-bold leading-none"
                    >+91 98765 43210</span
                  >
                </div>
              </button>
              </a>
              <button
              onClick={handleWhatsAppHero}
                className="group flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white h-16 rounded-xl px-6 transition-all shadow-lg hover:shadow-[#25D366]/25 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[28px]">chat</span>
                <div className="flex flex-col items-start">
                  <span
                    className="text-xs opacity-90 font-medium uppercase tracking-wide"
                    >WhatsApp Order</span
                  >
                  <span className="text-lg font-bold leading-none"
                    >Chat to Buy</span
                  >
                </div>
              </button>
            </div>
          </section>
          {/* <!-- Content Grid: Details + Map --> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            {/* <!-- Store Details Column --> */}
            <div className="flex flex-col gap-6">
              <div
                className="bg-white dark:bg-[#1e2a29] rounded-2xl p-6 md:p-8 shadow-sm border border-[#eaf0f0] dark:border-[#2a3836]"
              >
                <h2
                  className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#111818] dark:text-white"
                >
                  <span className="material-symbols-outlined text-primary"
                    >info</span
                  >
                  Store Details
                </h2>
                <div className="flex flex-col gap-8">
                  {/* <!-- Address --> */}
                  <div className="flex gap-4">
                    <div
                      className="mt-1 size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"
                    >
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3
                        className="text-base font-bold text-[#111818] dark:text-white"
                      >
                        Our Location
                      </h3>
                      <p
                        className="text-[#5e8785] dark:text-[#a5c2c0] leading-relaxed"
                      >
                        Shop DBZ-North-31 <br />Railway Colony,<br /> Gandhdiham (Kutch) 370210
                      </p>
                      <a
                        className="mt-2 text-primary font-bold text-sm hover:underline inline-flex items-center gap-1"
                        href="https://www.google.com/maps/dir/?api=1&destination=23.07032721893287,70.14314756885035"
                        target='_blank'
                      >
                        Get Directions
                        <span className="material-symbols-outlined text-sm"
                          >arrow_outward</span
                        >
                      </a>
                    </div>
                  </div>
                  {/* <!-- Hours --> */}
                  <div className="flex gap-4">
                    <div
                      className="mt-1 size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"
                    >
                      <span className="material-symbols-outlined">schedule</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <h3
                        className="text-base font-bold text-[#111818] dark:text-white"
                      >
                        Opening Hours
                      </h3>
                      <div
                        className="flex justify-between items-center text-sm border-b border-dashed border-[#eaf0f0] dark:border-[#2a3836] pb-2"
                      >
                        <span className="text-[#5e8785] dark:text-[#a5c2c0]"
                          >Mon - Sat</span
                        >
                        <span className="font-medium text-[#111818] dark:text-white"
                          >9:00 AM - 9:00 PM</span
                        >
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[#5e8785] dark:text-[#a5c2c0]"
                          >Sunday also</span
                        >
                        <span className="font-medium text-[#111818] dark:text-white"
                          >9:00 AM - 9:00 PM</span
                        >
                      </div>
                      <div
                        className="mt-2 inline-flex self-start px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider"
                      >
                        Open Now
                      </div>
                    </div>
                  </div>
                  {/* <!-- Contact Secondary --> */}
                  <div className="flex gap-4">
                    <div
                      className="mt-1 size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"
                    >
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <a href="mailto:lkmart6660@gmail.com">
                    <div className="flex flex-col gap-1">
                      <h3
                        className="text-base font-bold text-[#111818] dark:text-white"
                      >
                        Email Support
                      </h3>
                      <p className="text-[#5e8785] dark:text-[#a5c2c0]">
                        lkmart6660@gmail.com
                      </p>
                    </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Map Column --> */}
            <div className="h-full min-h-[400px] flex flex-col">
              <div
                className="w-full h-full bg-[#eaf0f0] dark:bg-[#1e2a29] rounded-2xl overflow-hidden shadow-sm relative group isolate"
              >
                {/* <!-- Abstract Map Representation --> */}
                <iframe
    width="100%"
    height="100%"
    style={{border:0}}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.26405645752482!2d70.1432347406369!3d23.070313029667915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b97d98318f0f%3A0xe2f4d3059ecd1925!2sL%20K%20Mart!5e1!3m2!1sen!2sin!4v1769859635654!5m2!1sen!2sin">
  </iframe>
  
               
              </div>
            </div>
          </div>
          {/* <!-- Footer Small --> */}
        </div>
      </div>
          <Footer/>
    </div>
  )
}

export default ContectAndLocation