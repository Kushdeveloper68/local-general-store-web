import React from 'react'

function Home() {
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
              <span className="material-symbols-outlined">storefront</span>
            </div>
            <h1
              className="text-xl sm:text-2xl font-bold tracking-tight text-[#111818] dark:text-white"
            >
              Desi Mart
            </h1>
          </div>
         
          <div className="hidden md:flex flex-1 justify-center gap-8 items-center">
            <a
              className="text-sm font-semibold text-[#111818] dark:text-gray-200 hover:text-primary transition-colors"
              href="#"
              >Home</a
            >
            <a
              className="text-sm font-semibold text-[#111818] dark:text-gray-200 hover:text-primary transition-colors"
              href="#"
              >Spices</a
            >
            <a
              className="text-sm font-semibold text-[#111818] dark:text-gray-200 hover:text-primary transition-colors"
              href="#"
              >Vegetables</a
            >
            <a
              className="text-sm font-semibold text-[#111818] dark:text-gray-200 hover:text-primary transition-colors"
              href="#"
              >Snacks</a
            >
            <a
              className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full hover:bg-accent/20 transition-colors"
              href="#"
              >Offers</a
            >
          </div>
          
          <div className="flex items-center gap-3">
            <button
              className="hidden sm:flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#eaf0f0] dark:bg-[#2a3a39] text-[#111818] dark:text-white text-sm font-bold hover:bg-[#dce6e6] dark:hover:bg-[#354544] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span className="hidden lg:inline">555-0123</span>
            </button>
            <button className="md:hidden p-2 text-[#111818] dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
   
    <section
      className="relative w-full py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
      
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit"
          >
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-wide"
              >Open for Delivery</span
            >
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#111818] dark:text-white"
          >
            Fresh Indian Groceries <br className="hidden lg:block" />
            <span className="text-primary">Delivered to You</span>
          </h1>
          <p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
          >
            The authentic taste of home, just a WhatsApp message away. Order
            spices, fresh vegetables, and snacks easily via chat or call.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all shadow-lg shadow-primary/25"
            >
              <span className="material-symbols-outlined">chat</span>
              Order on WhatsApp
            </button>
            <button
              className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-white text-base font-bold transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              Call Now
            </button>
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <span className="material-symbols-outlined text-base">verified</span>
            <span>Free delivery on orders above $50</span>
          </p>
        </div>
       
        <div
          className="relative order-1 lg:order-2 h-full min-h-[300px] lg:min-h-[500px]"
        >
          <div
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3 scale-105 opacity-50"
          ></div>
          <div
            className="relative w-full h-full aspect-square lg:aspect-[4/3] bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden"
            data-alt="Vibrant variety of indian spices in bowls and spoons on dark background"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUk__VY4AIPfZLdvcqNzh2AISt3G0FYp82y8UwPM85QYC8cu0cyeljFkVlX-2WzhizOJsN66SVzRhq_NW3-VHlYzA-ee5n0y__MzHOGzOGHMTTJb_phh7iJOb8xj83fwYO-NZUvKolTzWjUPvadFBQptwjwibN0eeV4-pHMrtXVzKUxg9lspUIeEIBBDTqVj03gKCt1phHojmxCdnXikanfFXY9pNzYuPc_uLlLkIVVxJsWpMR7eKsy5DL53wRUb6rG8fIklih')",
  }}
          >
            <div
              className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    Featured
                  </p>
                  <p className="font-bold text-[#111818] dark:text-white">
                    Organic Turmeric Powder
                  </p>
                </div>
                <span
                  className="bg-accent text-white text-xs font-bold px-2 py-1 rounded"
                  >20% OFF</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="py-12 bg-white dark:bg-[#1a2625]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#111818] dark:text-white mb-3"
          >
            How to Order
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Shopping with us is as easy as sending a message to a friend.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
         
          <div
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"
          ></div>
         
          <div
            className="flex flex-col items-center text-center gap-4 bg-white dark:bg-[#1a2625] p-4"
          >
            <div
              className="size-24 rounded-full bg-[#eaf0f0] dark:bg-[#2a3a39] flex items-center justify-center text-primary mb-2 shadow-sm border-4 border-white dark:border-[#1a2625]"
            >
              <span className="material-symbols-outlined text-4xl"
                >inventory_2</span
              >
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#111818] dark:text-white">
                1. Browse Catalogue
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 px-4">
                Check our website for latest offers and products you need.
              </p>
            </div>
          </div>
         
          <div
            className="flex flex-col items-center text-center gap-4 bg-white dark:bg-[#1a2625] p-4"
          >
            <div
              className="size-24 rounded-full bg-[#eaf0f0] dark:bg-[#2a3a39] flex items-center justify-center text-primary mb-2 shadow-sm border-4 border-white dark:border-[#1a2625]"
            >
              <span className="material-symbols-outlined text-4xl">chat</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#111818] dark:text-white">
                2. WhatsApp Us
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 px-4">
                Send us your shopping list or product screenshots.
              </p>
            </div>
          </div>
         
          <div
            className="flex flex-col items-center text-center gap-4 bg-white dark:bg-[#1a2625] p-4"
          >
            <div
              className="size-24 rounded-full bg-[#eaf0f0] dark:bg-[#2a3a39] flex items-center justify-center text-primary mb-2 shadow-sm border-4 border-white dark:border-[#1a2625]"
            >
              <span className="material-symbols-outlined text-4xl"
                >local_shipping</span
              >
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#111818] dark:text-white">
                3. Fast Delivery
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 px-4">
                We deliver to your doorstep. Pay cash or card on delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="py-16 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2
            className="text-3xl font-bold text-[#111818] dark:text-white flex items-center gap-2"
          >
            Today's Special Offers
            <span className="material-symbols-outlined text-accent animate-bounce"
              >local_fire_department</span
            >
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Grab these deals before they're gone!
          </p>
        </div>
        <a
          className="hidden sm:flex items-center gap-1 text-primary font-bold hover:text-primary-dark transition-colors"
          href="#"
        >
          View All Offers
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       
        <div
          className="group relative bg-white dark:bg-[#1a2625] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
        >
          <div
            className="absolute top-3 left-3 z-10 bg-accent text-white text-xs font-bold px-2 py-1 rounded shadow-sm"
          >
            SAVE 24%
          </div>
          <div
            className="aspect-square bg-gray-100 w-full relative overflow-hidden"
          >
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              data-alt="Sack of white basmati rice"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzn7OPvq-4QRGQ4wMTO3OQMkQQ2cc9MdpQ9bM3xr5qIi4KEAMAU3y5Iq7ffhldKDThiayHGWDXsJT4s-mg7mtQYZ-49g7uST_xa0Gg29xH-FCd8Ho99r01ruLDL0BWQ12aWXqjUxTe3qZLnFf5spKk8HG3nsmxEIYeT9URRiF1I-dan4jJCoYt-VoT6QEmQnIMANOgT2K8ExXOjyPx8Jq9oN8lm523JC-tac1yivqCkBvQZod_sydwXx2f5URI7iJl1Tpfxbbi')",
              }}
            ></div>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <h3
              className="font-bold text-lg text-[#111818] dark:text-white leading-tight mb-1"
            >
              Royal Basmati Rice
            </h3>
            <p className="text-sm text-gray-500 mb-3">5kg Bag</p>
            <div className="mt-auto flex items-end justify-between">
              <div>
                <span
                  className="block text-xs text-gray-400 line-through font-medium"
                  >$24.99</span
                >
                <span className="block text-xl font-bold text-primary">$18.99</span>
              </div>
              <button
                className="size-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] transition-colors shadow-sm"
                title="Chat to buy"
              >
                <span className="material-symbols-outlined">chat</span>
              </button>
            </div>
          </div>
        </div>
       
        <div
          className="group relative bg-white dark:bg-[#1a2625] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
        >
          <div
            className="absolute top-3 left-3 z-10 bg-accent text-white text-xs font-bold px-2 py-1 rounded shadow-sm"
          >
            FRESH
          </div>
          <div
            className="aspect-square bg-gray-100 w-full relative overflow-hidden"
          >
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              data-alt="Fresh yellow mangoes stacked"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFIDsBkkBZLg94ALPo9TY2Ck_jBMBADsxupC_qpGaREMVK9Wx5KuCQnnnNKexBULY1CZ3xcAmyWegQ4JviPD6WT1N4hNUKd-l4PQmyS9I0Pdjk26AjvxALjKk1i1UsZga7UtZI8GGhew2wSdpudJ69Vb6bqrsq3eZflNqxIgwaMQH4AnDOm0CpCpjouMq6kV0Xdcu0Kq6ZNHVcLzLV48uup0FsaGfML8b4Z112QykeNy0Lnp3K2cBM4BlAx8SHWfC7c5t0u3be')",
              }}
            ></div>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <h3
              className="font-bold text-lg text-[#111818] dark:text-white leading-tight mb-1"
            >
              Alphonso Mangoes
            </h3>
            <p className="text-sm text-gray-500 mb-3">1 Dozen Box</p>
            <div className="mt-auto flex items-end justify-between">
              <div>
                <span
                  className="block text-xs text-gray-400 line-through font-medium"
                  >$35.00</span
                >
                <span className="block text-xl font-bold text-primary">$29.99</span>
              </div>
              <button
                className="size-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] transition-colors shadow-sm"
                title="Chat to buy"
              >
                <span className="material-symbols-outlined">chat</span>
              </button>
            </div>
          </div>
        </div>
       
        <div
          className="group relative bg-white dark:bg-[#1a2625] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
        >
          <div
            className="absolute top-3 left-3 z-10 bg-accent text-white text-xs font-bold px-2 py-1 rounded shadow-sm"
          >
            SAVE 15%
          </div>
          <div
            className="aspect-square bg-gray-100 w-full relative overflow-hidden"
          >
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              data-alt="Fresh white paneer cheese blocks"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTKMRtfDqmp6UdRzkkaYBiuuh6_Tvemiz13fz5f4TPN_5e8J1b3FE6mAhwxrOMHs5sEm8Pqr57onrpeasBqolD88cR8-VFb-yyuWgJdd789PKZYmN90CPcPF151kWZqBEx9h-pXbcOldYV6NugskBR8bkRyT1My_-1B7WZ4J3l2rOxmjshD9WFhpTZE7py-SXP3etcear71z0m0M2Gcerh5rsDp1Rywm8Uv7ZYSxhw2AeHPU4Q6NIVuQT_o8R3AZBksX3syH36')",
              }}
            ></div>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <h3
              className="font-bold text-lg text-[#111818] dark:text-white leading-tight mb-1"
            >
              Fresh Malai Paneer
            </h3>
            <p className="text-sm text-gray-500 mb-3">500g Pack</p>
            <div className="mt-auto flex items-end justify-between">
              <div>
                <span
                  className="block text-xs text-gray-400 line-through font-medium"
                  >$8.99</span
                >
                <span className="block text-xl font-bold text-primary">$7.50</span>
              </div>
              <button
                className="size-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] transition-colors shadow-sm"
                title="Chat to buy"
              >
                <span className="material-symbols-outlined">chat</span>
              </button>
            </div>
          </div>
        </div>
        
        <div
          className="group relative bg-white dark:bg-[#1a2625] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
        >
          <div
            className="absolute top-3 left-3 z-10 bg-accent text-white text-xs font-bold px-2 py-1 rounded shadow-sm"
          >
            COMBO
          </div>
          <div
            className="aspect-square bg-gray-100 w-full relative overflow-hidden"
          >
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              data-alt="Collection of Indian spice powders"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBomAX7vw3nEIR-y6xwGHovxKAcrJuQ7pZZ6UGGUaWj1Ga8eYHwptPgOF4g5MovP86y8FYnY-MT56YUFzzIj7V25QKQ8vNeKZqnuRCWKUfJ8eeOsZTQDfsQfXQq8fUFpSzdQFpbg0-sav4bIzmqt5gxpCTzrYc71P3z21mjy4adCzOQOlioLuM213f4zGqEvNzApHEOFfs0lyo-TGUwBlw2e-sBOdHoLmOUxZIL3vwfbtbSOpJlav05r9BskkPAFo65kdSgeWhk')",
              }}
            ></div>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <h3
              className="font-bold text-lg text-[#111818] dark:text-white leading-tight mb-1"
            >
              Masala Starter Pack
            </h3>
            <p className="text-sm text-gray-500 mb-3">5 Essential Spices</p>
            <div className="mt-auto flex items-end justify-between">
              <div>
                <span
                  className="block text-xs text-gray-400 line-through font-medium"
                  >$15.00</span
                >
                <span className="block text-xl font-bold text-primary">$12.99</span>
              </div>
              <button
                className="size-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] transition-colors shadow-sm"
                title="Chat to buy"
              >
                <span className="material-symbols-outlined">chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="py-16 bg-[#eaf0f0] dark:bg-[#1f2e2d]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2
              className="text-3xl font-bold text-[#111818] dark:text-white leading-tight"
            >
              Why your neighbors <br />
              <span className="text-primary">love shopping with us</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              We bring the freshest produce and authentic brands straight to
              your kitchen, without the hassle of crowded aisles.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex gap-4 items-start">
                <div
                  className="p-3 bg-white dark:bg-[#2a3a39] rounded-lg text-primary shadow-sm"
                >
                  <span className="material-symbols-outlined">eco</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111818] dark:text-white">
                    Fresh Daily Stock
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We restock our vegetables and dairy every morning before 8
                    AM.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div
                  className="p-3 bg-white dark:bg-[#2a3a39] rounded-lg text-primary shadow-sm"
                >
                  <span className="material-symbols-outlined">local_shipping</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111818] dark:text-white">
                    Free Local Delivery
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Free delivery within 5 miles for orders over $50. Same day
                    delivery available.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div
                  className="p-3 bg-white dark:bg-[#2a3a39] rounded-lg text-primary shadow-sm"
                >
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111818] dark:text-white">
                    Authentic Brands
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Directly imported favorites like Haldiram's, Amul, and
                    Patanjali.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[400px]">
            <div
              className="absolute inset-0 bg-primary/10 rounded-2xl transform -rotate-2"
            ></div>
            <div
              className="relative h-full w-full bg-cover bg-center rounded-2xl shadow-xl"
              data-alt="Person holding a grocery bag full of fresh vegetables"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAt8vqea8283E8ggq9XZCDjCtgfNY8cijDag4TEMGgNLBTCwUIPEts-TRAUB8NK4qUJk-f7h09hUvDqaRqK0O52bdQzjN76XaYHVLhgNR9_9dM1Owbef1UFAce1jk9ANhkNIfrCU_9_gZxRajDSR7sHhxcM1qlmODWxs40hysddjI16wgJoMFRtOIZbQgy1VBTlhuA4u3trCN9T0mrLp9CNIfZ-xoD_4VDxsWftawheTfUCdUTVJ7Br7GZ87rV3z9Py6cCQWdvF')"
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="py-16 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#111818] dark:text-white mb-8">
        Popular in Our Store
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        
        <div
          className="bg-white dark:bg-[#1a2625] rounded-lg p-3 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors cursor-pointer group"
        >
          <div
            className="aspect-square rounded-md bg-gray-50 mb-3 bg-cover bg-center"
            data-alt="Instant noodles packet"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQSHyMXMEdGEDh5UTmSJeHY-4jf_d-YVFCiNveMaoWCSFN4PzJdvA4gPeW5taWDy1JpabfSGQve07EuRKdZiZg9XgMjsvzDtj4twbCG9a7HVpiF2r7YuhmPh9a8qNwj5oIhpuNSI5a-D7lk8yYL848yZ3em9DaQtzQUWpzGoMXKY_ickiwJCI80TFoLUh238F0mFVcwDU7L1nE8TIJdZXUcnwBQ9DMthrWUYhpCKFage10xCcHg7L4BgTCUkIkVUnAd7jpU06Q')"
            }}
          ></div>
          <h4 className="font-bold text-sm text-[#111818] dark:text-white truncate">
            Maggi Noodles
          </h4>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm font-semibold text-primary">$4.50</span>
            <span
              className="material-symbols-outlined text-gray-400 text-sm group-hover:text-primary"
              >chat</span
            >
          </div>
        </div>
        
        <div
          className="bg-white dark:bg-[#1a2625] rounded-lg p-3 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors cursor-pointer group"
        >
          <div
            className="aspect-square rounded-md bg-gray-50 mb-3 bg-cover bg-center"
            data-alt="Indian flatbread chapati flour"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJi5yzIs8aN7RRt5fTSxuIYBVLywJ9ncSUgz8PMY-NeiK0B-xSM9F7MYOvBOXkt0Of67-ETcUGR3kin6qvVIr2R2fBMmWWZT6LB9F2hl6pvKuNbZkiKL4w4s7SPiJG2d9ojnvkOT0kooU__fwO0xRiiKOipkX22c2wHnyqINfDE7SkQROksIC1NsXouTgQN_1Pk_mhGLf-2czUE5OYLVV-4D7cp3rLOwWR5QAzvVWQeqlVJawp-ZlW0eMNjWYrA1iytBr4uF52')"
            }}
          ></div>
          <h4 className="font-bold text-sm text-[#111818] dark:text-white truncate">
            Aashirvaad Atta
          </h4>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm font-semibold text-primary">$12.99</span>
            <span
              className="material-symbols-outlined text-gray-400 text-sm group-hover:text-primary"
              >chat</span
            >
          </div>
        </div>
       
        <div
          className="bg-white dark:bg-[#1a2625] rounded-lg p-3 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors cursor-pointer group"
        >
          <div
            className="aspect-square rounded-md bg-gray-50 mb-3 bg-cover bg-center"
            data-alt="Jar of ghee"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBC1dBKcC4lEXxUVZikgbH5-Yth98fdUPTsBY4e9qrDHTGAkUuDcLoQdQAOmTYAAfMzbzbDrfllYY8CtEG2e20enBWAuqSZ4Iz2Vlr-ynR2BTw2SmRljvlV_9iwUs4wJ12-8WxU7zKQScYgtyySoiuNYWi6UBtLk7iKjsn254SfbuQC04-sRTowSsxtLP-SpPKAiiOtq5F_a4grfry22eMy48BCi7ngfAt4-FNPT4TyNPBdcThxPJIveah-Qv6kBq6x63H58VqS')"
            }}
          ></div>
          <h4 className="font-bold text-sm text-[#111818] dark:text-white truncate">
            Pure Cow Ghee
          </h4>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm font-semibold text-primary">$16.50</span>
            <span
              className="material-symbols-outlined text-gray-400 text-sm group-hover:text-primary"
              >chat</span
            >
          </div>
        </div>
       
        <div
          className="bg-white dark:bg-[#1a2625] rounded-lg p-3 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors cursor-pointer group"
        >
          <div
            className="aspect-square rounded-md bg-gray-50 mb-3 bg-cover bg-center"
            data-alt="Bag of red lentils"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYfKzKEbCmWJnRxusVi0_ykGCHBi5MjZyx6hWzI9r9dSTEY4nekf8PSNOvVNTIWQnsXv4H6_TVZvmCLCV5-Wa6Dx_iGV6DVmLOuQEtyZZz1o9-q93NuHnC1NY49F0qOj68QPntNKOwaQb-IFt75TWAptYjD1xfQTVJRy2cMEZxnouY2HrrJnBuOHhpnRStJOcAfv5V7hzNRB-bOXhMGBrCccY25VcxiLEhwbqY8WzeUjxvCS5PXp1whVi_jdQOZ4aEt60eX7yk')"
            }}
          ></div>
          <h4 className="font-bold text-sm text-[#111818] dark:text-white truncate">
            Red Masoor Dal
          </h4>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm font-semibold text-primary">$6.99</span>
            <span
              className="material-symbols-outlined text-gray-400 text-sm group-hover:text-primary"
              >chat</span
            >
          </div>
        </div>
        
        <div
          className="bg-white dark:bg-[#1a2625] rounded-lg p-3 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors cursor-pointer group"
        >
          <div
            className="aspect-square rounded-md bg-gray-50 mb-3 bg-cover bg-center"
            data-alt="Indian tea box"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkaXoGbhuUef_0A6eLwRr--7XWvGOEro5lH_XfmmMilXm-l_g5T1vEn5z0ZMNJihFu83qgJ2AYUuE7r6yCXyf36HRzyOG2JQx_yP7WVTxPsQW-cNG1ZvWDYQT7yfSObzaRAMh5HdE3UD3XlblMqUsnB7mmguwDRoHF6RRwnXIQs-FGD1s3PLQtvBRi5J_I127CAnLoXYpIyK6mKMDP5Ggj4BDYWkwyc42uBZjwnZpWZdBnvpAl4FeOrzedVrwhKA_siHI380oz')"
            }}
          ></div>
          <h4 className="font-bold text-sm text-[#111818] dark:text-white truncate">
            Tata Gold Tea
          </h4>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm font-semibold text-primary">$5.50</span>
            <span
              className="material-symbols-outlined text-gray-400 text-sm group-hover:text-primary"
              >chat</span
            >
          </div>
        </div>
      </div>
    </section>
    
    <footer className="bg-[#111818] text-white pt-12 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-800"
        >
         
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div
                className="size-8 bg-primary rounded-lg flex items-center justify-center text-white"
              >
                <span className="material-symbols-outlined">storefront</span>
              </div>
              <h2 className="text-xl font-bold">Desi Mart</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted local grocery store for authentic Indian spices,
              vegetables, and daily essentials.
            </p>
          </div>
         
          <div>
            <h3 className="font-bold text-lg mb-4">Visit Us</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-lg"
                  >location_on</span
                >
                123 Spice Market Ave, <br />Jersey City, NJ 07306
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg"
                  >schedule</span
                >
                Daily: 8:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <a className="hover:text-primary transition-colors" href="#"
                >Special Offers</a
              >
              <a className="hover:text-primary transition-colors" href="#"
                >New Arrivals</a
              >
              <a className="hover:text-primary transition-colors" href="#"
                >Delivery Areas</a
              >
              <a className="hover:text-primary transition-colors" href="#"
                >Contact Support</a
              >
            </div>
          </div>
          
          <div
            className="rounded-lg overflow-hidden h-32 w-full bg-gray-800 relative"
          >
            <div
              className="w-full h-full bg-cover bg-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              data-location="Jersey City Map"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDp5L4CFcnpJQQHtrVyRzgWzHBC9JTgrV9deix8iTzrb1iiVWYwJoGlIv91BIuCvyoGDRtXBLIn5XPHfDS21myuAogKOKgSYtjWFGzgdbag4RP4f3zeDkKfRCa_OTjARQG-qfhu14yDzNLM0ZXEiOq_6sZhzgKmzmkYyx6C7MWojsm4Llu8IX8FMkpL2HRC27w8CZi1xulZMPQm3Jh4gvIUhLphB7qDV8Afg_yeaNQx_W0xqDSgPJ81BDJu4a_gG5NYqH-LZ3rW')"
              }}
            ></div>
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <span
                className="material-symbols-outlined text-white text-3xl drop-shadow-md"
                >pin_drop</span
              >
            </div>
          </div>
        </div>
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>© 2023 Desi Mart Grocery. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
   
    <a
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group"
      href="#"
    >
      <span className="material-symbols-outlined text-3xl">chat</span>
      <span
        className="absolute right-16 bg-[#111818] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
        >Order on WhatsApp</span
      >
    </a>
    </>
  )
}

export default Home