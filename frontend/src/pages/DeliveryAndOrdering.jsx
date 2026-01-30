import React from 'react'

function DeliveryAndOrdering() {
  return (
     <div
      className="relative flex h-auto min-h-screen w-full flex-col group/design-root"
    >
      {/* <!-- Navbar --> */}
      <header
        className="sticky top-0 z-50 w-full border-b border-[#eaf0f0] dark:border-[#2a3433] bg-[#f9fbfb] dark:bg-[#141e1d]"
      >
        <div
          className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1280px] mx-auto"
        >
          <div className="flex items-center gap-4 text-[#111818] dark:text-white">
            <div className="size-8 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">storefront</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
              Local Grocery
            </h2>
          </div>
          {/* <!-- Desktop Menu --> */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-9">
              <a
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
                >Home</a
              >
              <a
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
                >Products</a
              >
              <a
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
                >Offers</a
              >
              <a
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
                >Contact</a
              >
            </div>
            <button
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#256663] transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Order via WhatsApp</span>
              </span>
            </button>
          </div>
          {/* <!-- Mobile Menu Button --> */}
          <button className="md:hidden p-2 text-[#111818] dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center w-full">
        {/* <!-- Hero Section --> */}
        <div
          className="w-full bg-cover bg-center bg-no-repeat relative"
          data-alt="Dark blurred abstract background with fresh green tones"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDk333-aSMGzjqkLx0xJye47UucLzSUSJpreoYpUbi3xVUDD7gUUWB1RgQ-LzO-82TueybQxmz8qYwP6swPkO7HsSacxYLPe0wyHokU5yvEz0gvAz9ESvPi0jyxj1OoaOSGSvQ6F_EDDE4khFaG8tzO4QbWHycm_cvNMwahzEizbf4wLdFORJ6aTft7AQYGi0oRWydBJsgNFf8QawevnRISGyXZDcK8DWbVatC8S2doV-Jg2r8d9u1kLom32-zdYdJVe7jVLXTK')"
          }}
        >
          <div
            className="max-w-[960px] mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center gap-6"
          >
            <h1
              className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]"
            >
              Delivery &amp; Ordering Info
            </h1>
            <p
              className="text-white/90 text-base md:text-lg font-normal leading-normal max-w-[600px]"
            >
              Everything you need to know about getting your groceries delivered
              fresh to your door or picking them up instore.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <button
                className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-[#256663] transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined mr-2">chat</span>
                Order via WhatsApp
              </button>
              <button
                className="flex items-center justify-center rounded-lg h-12 px-6 bg-white text-[#111818] text-base font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined mr-2">call</span>
                Call Now
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Main Content Container --> */}
        <div
          className="w-full max-w-[1024px] px-4 md:px-10 py-12 flex flex-col gap-12"
        >
          {/* <!-- How It Works (Steps) --> */}
          <section>
            <div className="flex flex-col gap-4 mb-8">
              <h2
                className="text-[#111818] dark:text-white text-3xl font-bold leading-tight"
              >
                How It Works
              </h2>
              <p
                className="text-[#5e8785] dark:text-gray-400 text-base font-normal max-w-[720px]"
              >
                Simple steps to get your daily essentials without leaving your
                home.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* <!-- Step 1 --> */}
              <div
                className="flex flex-col gap-4 rounded-xl border border-[#d5e2e1] dark:border-[#2a3433] bg-white dark:bg-[#1e2a29] p-6 shadow-sm"
              >
                <div
                  className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                >
                  <span className="material-symbols-outlined text-3xl"
                    >format_list_bulleted</span
                  >
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111818] dark:text-white text-lg font-bold">
                    1. Make a List
                  </h3>
                  <p
                    className="text-[#5e8785] dark:text-gray-400 text-sm leading-relaxed"
                  >
                    Browse our catalog or simply write down what you need on a
                    piece of paper.
                  </p>
                </div>
              </div>
              {/* <!-- Step 2 --> */}
              <div
                className="flex flex-col gap-4 rounded-xl border border-[#d5e2e1] dark:border-[#2a3433] bg-white dark:bg-[#1e2a29] p-6 shadow-sm"
              >
                <div
                  className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                >
                  <span className="material-symbols-outlined text-3xl">send</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111818] dark:text-white text-lg font-bold">
                    2. Send via WhatsApp
                  </h3>
                  <p
                    className="text-[#5e8785] dark:text-gray-400 text-sm leading-relaxed"
                  >
                    Send your list to our number. We will confirm availability
                    and total amount.
                  </p>
                </div>
              </div>
              {/* <!-- Step 3 --> */}
              <div
                className="flex flex-col gap-4 rounded-xl border border-[#d5e2e1] dark:border-[#2a3433] bg-white dark:bg-[#1e2a29] p-6 shadow-sm"
              >
                <div
                  className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                >
                  <span className="material-symbols-outlined text-3xl"
                    >two_wheeler</span
                  >
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111818] dark:text-white text-lg font-bold">
                    3. Fast Delivery
                  </h3>
                  <p
                    className="text-[#5e8785] dark:text-gray-400 text-sm leading-relaxed"
                  >
                    Sit back! We deliver to your doorstep or keep it ready for
                    quick store pickup.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Service Details Grid --> */}
          <section>
            <div className="flex flex-col gap-4 mb-8">
              <h2
                className="text-[#111818] dark:text-white text-3xl font-bold leading-tight"
              >
                Service Details
              </h2>
              <p
                className="text-[#5e8785] dark:text-gray-400 text-base font-normal max-w-[720px]"
              >
                Check our delivery areas, timings, and payment options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- Delivery Areas Card --> */}
              <div
                className="rounded-xl border border-[#d5e2e1] dark:border-[#2a3433] bg-white dark:bg-[#1e2a29] p-6 flex gap-5 hover:border-primary/50 transition-colors group"
              >
                <div className="shrink-0">
                  <div
                    className="size-14 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[28px]"
                      >map</span
                    >
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111818] dark:text-white text-xl font-bold">
                    Delivery Areas
                  </h3>
                  <p className="text-[#5e8785] dark:text-gray-400 text-sm">
                    We currently deliver to the following sectors:
                  </p>
                  <ul
                    className="list-disc list-inside text-[#111818] dark:text-gray-200 text-sm font-medium mt-1 space-y-1"
                  >
                    <li>Sector 12, 14, 15</li>
                    <li>Green Valley Apartments</li>
                    <li>Model Town Extension</li>
                  </ul>
                  <div
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full w-fit"
                  >
                    <span className="material-symbols-outlined text-[16px]"
                      >local_shipping</span
                    >
                    Free delivery on orders above ₹500
                  </div>
                </div>
              </div>
              {/* <!-- Store Pickup Card --> */}
              <div
                className="rounded-xl border border-[#d5e2e1] dark:border-[#2a3433] bg-white dark:bg-[#1e2a29] p-6 flex gap-5 hover:border-primary/50 transition-colors group"
              >
                <div className="shrink-0">
                  <div
                    className="size-14 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[28px]"
                      >storefront</span
                    >
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111818] dark:text-white text-xl font-bold">
                    Store Pickup
                  </h3>
                  <p className="text-[#5e8785] dark:text-gray-400 text-sm">
                    Prefer to pick up yourself? No problem.
                  </p>
                  <div
                    className="mt-2 p-3 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-900/20"
                  >
                    <p
                      className="text-orange-800 dark:text-orange-200 text-sm font-semibold flex gap-2 items-start"
                    >
                      <span
                        className="material-symbols-outlined text-[18px] shrink-0 mt-0.5"
                        >notifications_active</span
                      >
                      Please call us 30 mins before arriving so we can pack your
                      bag and skip the line.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Payment Methods Card --> */}
              <div
                className="rounded-xl border border-[#d5e2e1] dark:border-[#2a3433] bg-white dark:bg-[#1e2a29] p-6 flex gap-5 hover:border-primary/50 transition-colors group"
              >
                <div className="shrink-0">
                  <div
                    className="size-14 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[28px]"
                      >payments</span
                    >
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111818] dark:text-white text-xl font-bold">
                    Payment Methods
                  </h3>
                  <p className="text-[#5e8785] dark:text-gray-400 text-sm">
                    Flexible options at delivery or pickup.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <div
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
                    >
                      <span
                        className="material-symbols-outlined text-gray-600 dark:text-gray-300"
                        >attach_money</span
                      >
                      <span className="text-sm font-medium dark:text-white"
                        >Cash</span
                      >
                    </div>
                    <div
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
                    >
                      <span
                        className="material-symbols-outlined text-gray-600 dark:text-gray-300"
                        >qr_code_scanner</span
                      >
                      <span className="text-sm font-medium dark:text-white"
                        >UPI / GPay</span
                      >
                    </div>
                    <div
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
                    >
                      <span
                        className="material-symbols-outlined text-gray-600 dark:text-gray-300"
                        >credit_card</span
                      >
                      <span className="text-sm font-medium dark:text-white"
                        >Cards</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Timings Card --> */}
              <div
                className="rounded-xl border border-[#d5e2e1] dark:border-[#2a3433] bg-white dark:bg-[#1e2a29] p-6 flex gap-5 hover:border-primary/50 transition-colors group"
              >
                <div className="shrink-0">
                  <div
                    className="size-14 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[28px]"
                      >schedule</span
                    >
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111818] dark:text-white text-xl font-bold">
                    Order Timings
                  </h3>
                  <p className="text-[#5e8785] dark:text-gray-400 text-sm">
                    We are open 7 days a week.
                  </p>
                  <div className="mt-2 space-y-2">
                    <div
                      className="flex justify-between items-center text-sm border-b border-gray-100 dark:border-gray-700 pb-2"
                    >
                      <span className="text-gray-600 dark:text-gray-400"
                        >Order Acceptance</span
                      >
                      <span className="font-bold text-[#111818] dark:text-white"
                        >9:00 AM - 8:00 PM</span
                      >
                    </div>
                    <div className="flex justify-between items-center text-sm pt-1">
                      <span className="text-gray-600 dark:text-gray-400"
                        >Delivery Slots</span
                      >
                      <span className="font-bold text-[#111818] dark:text-white"
                        >Morning &amp; Evening</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Trust Badges --> */}
          <section
            className="flex flex-wrap justify-center gap-6 py-6 border-t border-[#eaf0f0] dark:border-[#2a3433]"
          >
            <div className="flex items-center gap-2 opacity-70">
              <span className="material-symbols-outlined text-primary"
                >verified</span
              >
              <span className="text-sm font-medium text-[#111818] dark:text-white"
                >Locally Owned</span
              >
            </div>
            <div className="flex items-center gap-2 opacity-70">
              <span className="material-symbols-outlined text-primary">eco</span>
              <span className="text-sm font-medium text-[#111818] dark:text-white"
                >Fresh Guaranteed</span
              >
            </div>
            <div className="flex items-center gap-2 opacity-70">
              <span className="material-symbols-outlined text-primary"
                >thumb_up</span
              >
              <span className="text-sm font-medium text-[#111818] dark:text-white"
                >Trusted Service</span
              >
            </div>
          </section>
        </div>
      </main>
      {/* <!-- Bottom sticky for mobile or footer area --> */}
      <footer
        className="w-full bg-white dark:bg-[#1e2a29] border-t border-[#eaf0f0] dark:border-[#2a3433] py-8"
      >
        <div
          className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <h2 className="text-[#111818] dark:text-white text-lg font-bold">
              Local Grocery Store
            </h2>
            <p className="text-[#5e8785] dark:text-gray-400 text-sm">
              Serving the community with fresh essentials.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-[#256663] transition-colors"
            >
              Order via WhatsApp
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DeliveryAndOrdering