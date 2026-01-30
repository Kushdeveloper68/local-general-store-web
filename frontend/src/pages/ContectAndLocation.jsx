import React from 'react'

function ContectAndLocation() {
  return (
     <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
    >
      {/* <!-- TopNavBar --> */}
      <header
        className="w-full bg-white dark:bg-[#1a2625] border-b border-[#eaf0f0] dark:border-[#2a3836]"
      >
        <div className="layout-container flex justify-center w-full">
          <div
            className="w-full max-w-[960px] px-4 md:px-10 py-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className="size-8 flex items-center justify-center text-primary bg-primary/10 rounded-full"
              >
                <span className="material-symbols-outlined text-xl"
                  >storefront</span
                >
              </div>
              <h2
                className="text-[#111818] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]"
              >
                Spice Grocers
              </h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-[#111818] dark:text-[#d1dada] text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
                >Home</a
              >
              <a
                className="text-[#111818] dark:text-[#d1dada] text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
                >Products</a
              >
              <a className="text-primary text-sm font-bold" href="#">Contact</a>
            </nav>
            <div className="md:hidden text-[#111818] dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </div>
          </div>
        </div>
      </header>
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
              <button
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
                        123 Spice Market Road,<br />
                        Andheri West, Mumbai,<br />
                        Maharashtra 400053
                      </p>
                      <a
                        className="mt-2 text-primary font-bold text-sm hover:underline inline-flex items-center gap-1"
                        href="#"
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
                          >Sunday</span
                        >
                        <span className="font-medium text-[#111818] dark:text-white"
                          >10:00 AM - 2:00 PM</span
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
                    <div className="flex flex-col gap-1">
                      <h3
                        className="text-base font-bold text-[#111818] dark:text-white"
                      >
                        Email Support
                      </h3>
                      <p className="text-[#5e8785] dark:text-[#a5c2c0]">
                        hello@spicegrocers.in
                      </p>
                    </div>
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
                <div
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1748&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-80 dark:opacity-60 transition-transform duration-700 group-hover:scale-105"
                  data-alt="Map view showing the streets of Mumbai with a pin on Andheri West"
                  data-location="Mumbai"
                  
                ></div>
                {/* <!-- Map Overlay Gradient --> */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                ></div>
                {/* <!-- Center Pin --> */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center drop-shadow-xl"
                >
                  <span
                    className="material-symbols-outlined text-primary text-6xl fill-current animate-bounce"
                    style={{fontVariationSettings: "'FILL' 1"}}
                    >location_on</span
                  >
                  <div
                    className="bg-white dark:bg-[#1e2a29] px-4 py-2 rounded-lg shadow-lg mt-2"
                  >
                    <span
                      className="font-bold text-sm text-[#111818] dark:text-white"
                      >Spice Grocers</span
                    >
                  </div>
                </div>
                {/* <!-- Map Controls Mockup --> */}
                <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                  <button
                    className="bg-white dark:bg-[#1e2a29] text-[#111818] dark:text-white p-2 rounded shadow-md hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <span className="material-symbols-outlined text-xl">add</span>
                  </button>
                  <button
                    className="bg-white dark:bg-[#1e2a29] text-[#111818] dark:text-white p-2 rounded shadow-md hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <span className="material-symbols-outlined text-xl"
                      >remove</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Small --> */}
          <div
            className="border-t border-[#eaf0f0] dark:border-[#2a3836] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#5e8785] dark:text-[#7a9997]"
          >
            <p>© 2023 Spice Grocers. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                className="hover:text-primary dark:hover:text-white transition-colors"
                href="#"
                >Privacy Policy</a
              >
              <a
                className="hover:text-primary dark:hover:text-white transition-colors"
                href="#"
                >Terms of Service</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContectAndLocation