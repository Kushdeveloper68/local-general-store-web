import React from 'react'

function LatestOffer() {
  return (
    <>
   <header
      className="sticky top-0 z-50 bg-white/80 dark:bg-[#1c2a29]/90 backdrop-blur-md border-b border-[#eaf0f0] dark:border-[#2f3e3d]"
    >
      <div
        className="px-4 md:px-8 lg:px-40 py-3 flex items-center justify-between gap-4"
      >
       
        <div className="flex items-center gap-3">
          <div
            className="size-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary"
          >
            <span className="material-symbols-outlined">storefront</span>
          </div>
          <h1
            className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Fresh Mart
          </h1>
        </div>
        
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <div
              className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg leading-5 bg-gray-50 dark:bg-[#141e1d] placeholder-gray-500 focus:outline-none focus:bg-white dark:focus:bg-[#1c2a29] focus:ring-1 focus:ring-primary sm:text-sm transition duration-150 ease-in-out"
              placeholder="Search rice, dal, spices..."
              type="text"
            />
          </div>
        </div>
        
        <nav className="flex items-center gap-6">
          <a
            className="hidden md:block text-sm font-medium hover:text-primary transition-colors"
            href="#"
            >Home</a
          >
          <a className="hidden md:block text-sm font-bold text-primary" href="#"
            >Offers</a
          >
          <a
            className="hidden md:block text-sm font-medium hover:text-primary transition-colors"
            href="#"
            >Contact</a
          >
          <button
            className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-sm"
          >
            <span className="truncate">Order Now</span>
          </button>
        </nav>
      </div>
    </header>

     <main className="flex-grow">
      <div className="max-w-[1440px] mx-auto">
        {/* <!-- Hero Section --> */}
        <div className="px-4 md:px-8 lg:px-40 py-6 md:py-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary">
            {/* <!-- Background Pattern/Image --> */}
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
              data-alt="Top view of various fresh vegetables and fruits on a dark surface"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBURIb17BU_vCJaUmrslSsYY6c58upvzqzhYkCVFchHtRsx0Yh2NJgelfNxl7B_3fJKgh360JypnoDdE_tnhFWFqlVCICh-1Q8JwJRTdxIWvU7DcTaXN7fA0kQUec4v5HkzNrxtJuxCISZ2Tbl4btpvqEHocbZDhamFwZ8nxPU7z6aLn5eXJUNq4KCFMsUJ5QZD3UvwOgwKPz85FEvtz8snXaKAd9xyPKRB338Yox2XMxesIoI5J3G90CPJRmolyLDCgwJIOm-I')"
              }}
            ></div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"
            ></div>
            <div
              className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="max-w-xl">
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-orange/20 text-orange-100 border border-orange-500/30 text-xs font-bold mb-4"
                >
                  <span
                    className="material-symbols-outlined text-[16px] text-orange-300"
                    >local_fire_department</span
                  >
                  Limited Time Offer
                </div>
                <h2
                  className="text-3xl md:text-5xl font-black text-white leading-tight mb-4"
                >
                  Weekly Super Saver Deals
                </h2>
                <p className="text-white/90 text-lg font-medium max-w-md">
                  Save up to 40% on daily essentials. Offers valid on WhatsApp
                  orders until Sunday!
                </p>
              </div>
              <div className="hidden md:block">
                <span
                  className="material-symbols-outlined text-white/20 text-[180px]"
                  >shopping_basket</span
                >
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Filters & Sorting --> */}
        <div
          className="px-4 md:px-8 lg:px-40 sticky top-[65px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm py-2"
        >
          <div
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-700 pb-4"
          >
            <div
              className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar items-center"
            >
              <button
                className="whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-sm ring-1 ring-primary"
              >
                <span className="material-symbols-outlined text-[18px]">apps</span>
                All Offers
              </button>
              <button
                className="whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1c2a29] hover:bg-gray-50 dark:hover:bg-[#253534] text-gray-700 dark:text-gray-200 text-sm font-medium border border-gray-200 dark:border-gray-700 transition-colors"
              >
                Spices &amp; Masala
              </button>
              <button
                className="whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1c2a29] hover:bg-gray-50 dark:hover:bg-[#253534] text-gray-700 dark:text-gray-200 text-sm font-medium border border-gray-200 dark:border-gray-700 transition-colors"
              >
                Rice &amp; Atta
              </button>
              <button
                className="whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1c2a29] hover:bg-gray-50 dark:hover:bg-[#253534] text-gray-700 dark:text-gray-200 text-sm font-medium border border-gray-200 dark:border-gray-700 transition-colors"
              >
                Snacks
              </button>
              <button
                className="whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1c2a29] hover:bg-gray-50 dark:hover:bg-[#253534] text-gray-700 dark:text-gray-200 text-sm font-medium border border-gray-200 dark:border-gray-700 transition-colors"
              >
                Beverages
              </button>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-gray-500 dark:text-gray-400"
                >Sort by:</span
              >
              <select
                className="bg-transparent border-none text-sm font-bold text-gray-900 dark:text-white focus:ring-0 cursor-pointer p-0 pr-6"
              >
                <option>Best Discounts</option>
                <option>Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>
        {/* <!-- Product Grid --> */}
        <div className="px-4 md:px-8 lg:px-40 py-6">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {/* <!-- Card 1 --> */}
            <div
              className="group bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative"
            >
              {/* <!-- Discount Badge --> */}
              <div
                className="absolute top-3 left-3 z-10 bg-accent-orange text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm"
              >
                15% OFF
              </div>
              {/* <!-- Image Container --> */}
              <div
                className="relative w-full pt-[75%] bg-gray-50 dark:bg-gray-800 overflow-hidden"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Sack of raw white rice"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRljM_0PClRd3fj5c7BOKNZ_cFMUQyQ7EROiCnd2oxqTPSzWg1ub3NitgrJHATBWt7P0zdOvlZzlg1ROAy3cvfEHm0fYMq_9whbVqKmHPspLsrgmYSOHywmSMxZZ1Y8bAo-rDp2a90v6afwj-btaTNJM44euf62owd6QSCdJtYyezE63kS_h8rF8vyGUUET1hC1WDRS2d_MXOhJrknxAvDG4XoQ-iNlBM0CIyK-4X4cXK0y7gLo-cyAEv5nOG-cMaKMk8AoZ5f"
                />
              </div>
              {/* <!-- Content --> */}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-semibold text-primary mb-1">Grains</p>
                <h3
                  className="text-gray-900 dark:text-white font-bold text-base leading-tight mb-1"
                >
                  Royal Basmati Rice
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  5kg Pack
                </p>
                <div
                  className="mt-auto pt-3 border-t border-gray-50 dark:border-gray-800"
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span
                      className="text-lg font-black text-gray-900 dark:text-white"
                      >₹650</span
                    >
                    <span className="text-sm text-gray-400 line-through">₹765</span>
                  </div>
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50 py-2.5 rounded-lg font-bold text-sm transition-colors border border-green-200 dark:border-green-800/50"
                  >
                    <span className="material-symbols-outlined text-[20px]"
                      >chat</span
                    >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div
              className="group bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative"
            >
              <div
                className="absolute top-3 left-3 z-10 bg-accent-orange text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm"
              >
                22% OFF
              </div>
              <div
                className="relative w-full pt-[75%] bg-gray-50 dark:bg-gray-800 overflow-hidden"
              >
                <div
                  className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600 bg-gray-100 dark:bg-gray-800"
                  data-alt="Bowl of yellow lentils (tur dal)"
                >
                  <span className="material-symbols-outlined text-6xl">grain</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-semibold text-primary mb-1">Pulses</p>
                <h3
                  className="text-gray-900 dark:text-white font-bold text-base leading-tight mb-1"
                >
                  Tata Sampann Tur Dal
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  1kg Pack
                </p>
                <div
                  className="mt-auto pt-3 border-t border-gray-50 dark:border-gray-800"
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span
                      className="text-lg font-black text-gray-900 dark:text-white"
                      >₹140</span
                    >
                    <span className="text-sm text-gray-400 line-through">₹180</span>
                  </div>
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50 py-2.5 rounded-lg font-bold text-sm transition-colors border border-green-200 dark:border-green-800/50"
                  >
                    <span className="material-symbols-outlined text-[20px]"
                      >chat</span
                    >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div
              className="group bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative"
            >
              <div
                className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm"
              >
                BOGO Offer
              </div>
              <div
                className="relative w-full pt-[75%] bg-gray-50 dark:bg-gray-800 overflow-hidden"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Glass bottle of mango juice drink"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLxqx06GsurkDn3hnCNJ7VANXvZikhOBNlD-ntyhZk3IB4ZwQW-hIB0gKSchHal0gFq2oYtE2jyYJSx836AAEFNZWBkAawC0XfpbpCo_GX1a1jVDi_WusVh8ZreyO-us-ix-tyMQgXE9lQnw6jSk2ZYrtKtfSsc4nKI0osfcqBY_g4Y98SlM5U_U6nBPxB9dSaHLFd1L-t3Vu1pMEeZisXHBiCOA2yiUT7eBnb_Bbx7ar-tSV8uAMGyePtAkHTb24V-DzcAaIa"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-semibold text-primary mb-1">Beverages</p>
                <h3
                  className="text-gray-900 dark:text-white font-bold text-base leading-tight mb-1"
                >
                  Maaza Mango Drink
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  1.2L Bottle
                </p>
                <div
                  className="mt-auto pt-3 border-t border-gray-50 dark:border-gray-800"
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span
                      className="text-lg font-black text-gray-900 dark:text-white"
                      >₹80</span
                    >
                    <span className="text-sm text-gray-400 line-through">₹160</span>
                  </div>
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50 py-2.5 rounded-lg font-bold text-sm transition-colors border border-green-200 dark:border-green-800/50"
                  >
                    <span className="material-symbols-outlined text-[20px]"
                      >chat</span
                    >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Card 4 --> */}
            <div
              className="group bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative"
            >
              <div
                className="absolute top-3 left-3 z-10 bg-accent-orange text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm"
              >
                Save ₹35
              </div>
              <div
                className="relative w-full pt-[75%] bg-gray-50 dark:bg-gray-800 overflow-hidden"
              >
                <div
                  className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600 bg-gray-100 dark:bg-gray-800"
                  data-alt="Bottle of sunflower cooking oil"
                >
                  <span className="material-symbols-outlined text-6xl"
                    >water_drop</span
                  >
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-semibold text-primary mb-1">
                  Oils &amp; Ghee
                </p>
                <h3
                  className="text-gray-900 dark:text-white font-bold text-base leading-tight mb-1"
                >
                  Fortune Sunlite Oil
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  1L Pouch
                </p>
                <div
                  className="mt-auto pt-3 border-t border-gray-50 dark:border-gray-800"
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span
                      className="text-lg font-black text-gray-900 dark:text-white"
                      >₹150</span
                    >
                    <span className="text-sm text-gray-400 line-through">₹185</span>
                  </div>
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50 py-2.5 rounded-lg font-bold text-sm transition-colors border border-green-200 dark:border-green-800/50"
                  >
                    <span className="material-symbols-outlined text-[20px]"
                      >chat</span
                    >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Card 5 --> */}
            <div
              className="group bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative"
            >
              <div
                className="absolute top-3 left-3 z-10 bg-gray-800 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm"
              >
                Low Stock
              </div>
              <div
                className="relative w-full pt-[75%] bg-gray-50 dark:bg-gray-800 overflow-hidden"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Pack of wheat flour (Atta)"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb7YM7NcqezckjUQXSV2l-6enaRoIWlQlTj7ZqA0LvCgRqQMHM5qC8Tt0CrNcXFIlU5oSA-2TMT4GaTakgWtr2DQXOg49QqxMnaNsMHa2JgpnrEAdC39czzXGauCVmfOGnmNo9TlhqJsSQAb_uzr6WIqmpgtwwff4Qy2iKSHut0Y_fjnOfValeN7o50V5N3bAebA6blAC7Q1ZB2f6EYedJrzlbyNYJAJfx3XWFbGd-nbjW4rHtT9cW2PKLyfw2AA8JKzH0PLYk"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-semibold text-primary mb-1">Flours</p>
                <h3
                  className="text-gray-900 dark:text-white font-bold text-base leading-tight mb-1"
                >
                  Aashirvaad Atta
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  5kg Pack
                </p>
                <div
                  className="mt-auto pt-3 border-t border-gray-50 dark:border-gray-800"
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span
                      className="text-lg font-black text-gray-900 dark:text-white"
                      >₹240</span
                    >
                    <span className="text-sm text-gray-400 line-through">₹290</span>
                  </div>
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50 py-2.5 rounded-lg font-bold text-sm transition-colors border border-green-200 dark:border-green-800/50"
                  >
                    <span className="material-symbols-outlined text-[20px]"
                      >chat</span
                    >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Card 6 --> */}
            <div
              className="group bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative"
            >
              <div
                className="absolute top-3 left-3 z-10 bg-accent-orange text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm"
              >
                15% OFF
              </div>
              <div
                className="relative w-full pt-[75%] bg-gray-50 dark:bg-gray-800 overflow-hidden"
              >
                <div
                  className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600 bg-gray-100 dark:bg-gray-800"
                  data-alt="Packet of Indian snacks (Bhujia)"
                >
                  <span className="material-symbols-outlined text-6xl">tapas</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-semibold text-primary mb-1">Snacks</p>
                <h3
                  className="text-gray-900 dark:text-white font-bold text-base leading-tight mb-1"
                >
                  Haldiram Bhujia
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  400g Pack
                </p>
                <div
                  className="mt-auto pt-3 border-t border-gray-50 dark:border-gray-800"
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span
                      className="text-lg font-black text-gray-900 dark:text-white"
                      >₹95</span
                    >
                    <span className="text-sm text-gray-400 line-through">₹110</span>
                  </div>
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50 py-2.5 rounded-lg font-bold text-sm transition-colors border border-green-200 dark:border-green-800/50"
                  >
                    <span className="material-symbols-outlined text-[20px]"
                      >chat</span
                    >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Card 7 --> */}
            <div
              className="group bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative"
            >
              <div
                className="relative w-full pt-[75%] bg-gray-50 dark:bg-gray-800 overflow-hidden"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Block of butter"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4WdYwFIcICLG_NaU_goPYkx-k48w3Fl4d_pAykz-u7BHjemHQMp4zPUKZb0Wl6qj5FDmC7zoyp4-2XRVn-cNLasF_8o6ZI2t65umxwmSsPEqfpLxK4e_uFpTJ02XoiuUObubW96h_3cj_H3i2uPGl2uMi2yhE4o_RXMilXHRYM40Jh_DugETTiFU6AbV8iEhr4TxXptDmmbhX6D54xUoAQ9gPtYkDLe8lnFDOx0Go98T54iJsApPv6-o5a14gIJHYZJjJ5cw_"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-semibold text-primary mb-1">Dairy</p>
                <h3
                  className="text-gray-900 dark:text-white font-bold text-base leading-tight mb-1"
                >
                  Amul Butter
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  500g Block
                </p>
                <div
                  className="mt-auto pt-3 border-t border-gray-50 dark:border-gray-800"
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span
                      className="text-lg font-black text-gray-900 dark:text-white"
                      >₹265</span
                    >
                    <span className="text-sm text-gray-400 line-through">₹280</span>
                  </div>
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50 py-2.5 rounded-lg font-bold text-sm transition-colors border border-green-200 dark:border-green-800/50"
                  >
                    <span className="material-symbols-outlined text-[20px]"
                      >chat</span
                    >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Card 8 --> */}
            <div
              className="group bg-card-light dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative"
            >
              <div
                className="absolute top-3 left-3 z-10 bg-accent-orange text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm"
              >
                ₹30 OFF
              </div>
              <div
                className="relative w-full pt-[75%] bg-gray-50 dark:bg-gray-800 overflow-hidden"
              >
                <div
                  className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600 bg-gray-100 dark:bg-gray-800"
                  data-alt="Packet of loose tea powder"
                >
                  <span className="material-symbols-outlined text-6xl"
                    >emoji_food_beverage</span
                  >
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs font-semibold text-primary mb-1">Beverages</p>
                <h3
                  className="text-gray-900 dark:text-white font-bold text-base leading-tight mb-1"
                >
                  Red Label Tea
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  500g Pack
                </p>
                <div
                  className="mt-auto pt-3 border-t border-gray-50 dark:border-gray-800"
                >
                  <div className="flex items-baseline gap-2 mb-3">
                    <span
                      className="text-lg font-black text-gray-900 dark:text-white"
                      >₹210</span
                    >
                    <span className="text-sm text-gray-400 line-through">₹240</span>
                  </div>
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50 py-2.5 rounded-lg font-bold text-sm transition-colors border border-green-200 dark:border-green-800/50"
                  >
                    <span className="material-symbols-outlined text-[20px]"
                      >chat</span
                    >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Empty State / Pagination Hint --> */}
        <div className="flex justify-center py-10">
          <button className="text-primary font-bold text-sm hover:underline">
            View All Products
          </button>
        </div>
      </div>
    </main>
    {/* <!-- Footer --> */}
    <footer
      className="bg-white dark:bg-[#1c2a29] border-t border-gray-200 dark:border-gray-800 pt-12 pb-8"
    >
      <div className="px-4 md:px-8 lg:px-40 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="size-6 bg-primary/10 rounded flex items-center justify-center text-primary"
              >
                <span className="material-symbols-outlined text-[16px]"
                  >storefront</span
                >
              </div>
              <span className="font-bold text-lg text-gray-900 dark:text-white"
                >Fresh Mart</span
              >
            </div>
            <p
              className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs"
            >
              Your trusted local grocery store delivering fresh essentials
              directly to your doorstep.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">call</span>
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]"
                  >location_on</span
                >
                123 Market Road, Sector 4
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">
              Store Hours
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex justify-between max-w-[200px]">
                <span>Mon - Sat</span>
                <span className="font-medium text-gray-700 dark:text-gray-300"
                  >9 AM - 9 PM</span
                >
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sunday</span>
                <span className="font-medium text-gray-700 dark:text-gray-300"
                  >9 AM - 2 PM</span
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-400">
            © 2024 Fresh Mart. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              className="text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              <span className="sr-only">Facebook</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewbox="0 0 24 24"
              >
                <path
                  clip-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              <span className="sr-only">Instagram</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewbox="0 0 24 24"
              >
                <path
                  clip-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.418 2.003l-.35 2.322 2.346.953-2.346.952.35 2.322-2.346-.953-2.346.953.35-2.322-2.346-.952 2.346-.953-.35-2.322 2.346.953 2.346-.953zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    {/* <!-- FAB: Sticky WhatsApp Button --> */}
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <span className="font-bold text-base hidden md:block">Chat with us</span>
        <span className="material-symbols-outlined text-[28px]">chat</span>
      </button>
    </div>
    </>
  )
}

export default LatestOffer