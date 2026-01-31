import React from 'react'
import {Navbar, Footer} from "../components"
import { getOfferProductsPublicApi, getPopularProductsPublicApi, generateWhatsAppMessage, getWhatsAppLink } from '../api/api'
import storeImage from "../assets/lk-storeimage.jpeg"

const handleWhatsAppHero = () => {
    const link = getWhatsAppLink()
    window.open(link, '_blank')
  }

function About() {
  return (
   <>
   <Navbar/>
    <main className="max-w-[1280px] mx-auto overflow-x-hidden">
      {/* <!-- Hero Section: Split Screen Story --> */}
      <section className="px-6 lg:px-20 py-12 @container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-orange/20 text-green-800 dark:text-primary-orange text-xs font-bold uppercase tracking-wider w-fit"
            >
              Since 2004
            </div>
            <h1
              className="text-[#121b0d] dark:text-white text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
            >
              Bringing the Taste of Home to Your
              <span className="text-primary-orange">Neighborhood</span>
            </h1>
            <div className="space-y-4 max-w-[540px]">
              <p
                className="text-lg leading-relaxed text-[#121b0d]/80 dark:text-slate-300"
              >
                Our journey started with a simple mission: to serve local
                families with the freshest authentic Indian groceries,
                hand-picked spices, and quality staples.
              </p>
              <p
                className="text-lg leading-relaxed text-[#121b0d]/80 dark:text-slate-300"
              >
                What began as a small family project has grown into a community
                cornerstone. We believe that everyone deserves access to the
                genuine flavors of India, delivered with the warmth of a
                neighbor.
                
              </p>
              <p className='text-primary-orange font-bold p-1'>Owners: Teena & Naresh Kriplani</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
              onClick={handleWhatsAppHero}
                className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-primary-orange text-[#121b0d] text-base font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Chat on WhatsApp
              </button>
              <a href="tel:+918160751735" target='_blank'>
              <button
                className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-white dark:bg-white/5 border-2 border-[#ebf3e7] dark:border-white/10 text-[#121b0d] dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
              >
                Call Our Store
              </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div
              className="absolute -top-4 -right-4 w-32 h-32 bg-accent-orange/10 rounded-full blur-3xl"
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary-orange/10 rounded-full blur-3xl"
            ></div>
            <div
              className="relative w-full aspect-[4/5] bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden border-8 border-white dark:border-background-dark"
              data-alt="Authentic colorful Indian grocery storefront with fresh vegetables"
              style={{
                backgroundImage: `url(${storeImage})`,
                backgroundRepeat:"no-repeat",
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent"
              ></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Headline Quote Section --> */}
      <section className="px-6 lg:px-20 py-16">
        <div
          className="bg-accent-orange/5 dark:bg-white/5 rounded-3xl p-10 lg:p-20 text-center relative overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-orange to-transparent opacity-30"
          ></div>
          <span
            className="material-symbols-outlined text-6xl text-accent-orange/40 mb-6"
            >format_quote</span
          >
          <h2
            className="text-[#121b0d] dark:text-white text-3xl md:text-5xl font-extrabold italic leading-tight max-w-[800px] mx-auto"
          >
            "Serving local families with quality groceries and fair prices."
          </h2>
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="h-[2px] w-12 bg-accent-orange"></div>
            <span
              className="text-accent-orange font-bold uppercase tracking-[0.2em] text-sm"
              >Our Promise</span
            >
            <div className="h-[2px] w-12 bg-accent-orange"></div>
          </div>
        </div>
      </section>
      {/* <!-- Values Section --> */}
      <section className="px-6 lg:px-20 py-20">
        <div className="flex flex-col gap-12 @container">
          <div className="text-center space-y-4">
            <h2
              className="text-primary-orange font-bold uppercase tracking-widest text-sm"
            >
              Core Principles
            </h2>
            <h3
              className="text-[#121b0d] dark:text-white text-4xl md:text-5xl font-black tracking-tight"
            >
              What We Stand For
            </h3>
            <p
              className="text-[#121b0d]/60 dark:text-slate-400 text-lg max-w-[600px] mx-auto"
            >
              Every item on our shelves is a promise of quality and community
              care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Community --> */}
            <div
              className="group flex flex-col gap-6 rounded-3xl border border-[#d7e7cf] dark:border-white/10 bg-white dark:bg-white/5 p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className="size-14 rounded-2xl bg-primary-orange/10 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <div className="space-y-3">
                <h4 className="text-[#121b0d] dark:text-white text-2xl font-bold">
                  Community
                </h4>
                <p
                  className="text-[#121b0d]/70 dark:text-slate-400 leading-relaxed"
                >
                  Supporting local festivals and families through every season.
                  We aren't just a store; we're part of your traditions.
                </p>
              </div>
            </div>
            {/* <!-- Quality --> */}
            <div
              className="group flex flex-col gap-6 rounded-3xl border border-[#d7e7cf] dark:border-white/10 bg-white dark:bg-white/5 p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className="size-14 rounded-2xl bg-accent-orange/10 flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <div className="space-y-3">
                <h4 className="text-[#121b0d] dark:text-white text-2xl font-bold">
                  Quality
                </h4>
                <p
                  className="text-[#121b0d]/70 dark:text-slate-400 leading-relaxed"
                >
                  Hand-picked spices and fresh produce from trusted sources. If
                  it's not good enough for our table, it's not on our shelves.
                </p>
              </div>
            </div>
            {/* <!-- Trust --> */}
            <div
              className="group flex flex-col gap-6 rounded-3xl border border-[#d7e7cf] dark:border-white/10 bg-white dark:bg-white/5 p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className="size-14 rounded-2xl bg-primary-orange/10 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-3xl"
                  >handshake</span
                >
              </div>
              <div className="space-y-3">
                <h4 className="text-[#121b0d] dark:text-white text-2xl font-bold">
                  Trust
                </h4>
                <p
                  className="text-[#121b0d]/70 dark:text-slate-400 leading-relaxed"
                >
                  Transparent pricing and the convenience of direct ordering. We
                  value the relationships built over every transaction.
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Simple Contact CTA Bar --> */}
      <section className="px-6 lg:px-20 pb-20">
        <div
          className="bg-[#121b0d] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white"
        >
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">Ready to stock up?</h3>
            <p className="text-white/60">
              Fast delivery or quick pickup - just a message away.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
            onClick={handleWhatsAppHero}
              className="bg-primary-orange text-[#121b0d] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              Order via WhatsApp
            </button>
            <a href="https://www.google.com/maps/dir/?api=1&destination=23.07032721893287,70.14314756885035"
                        target='_blank'>
            <button
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              <span className="material-symbols-outlined">location_on</span>
              Find Our Store
            </button>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Footer --> */}
    </main>
      <Footer/>
   </>
  )
}

export default About