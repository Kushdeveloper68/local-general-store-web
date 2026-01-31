import React, { useState, useEffect } from 'react'
import {Navbar, Footer} from "../components"
import SkeletonProductCard from '../components/SkeletonProductCard'
import { getOfferProductsPublicApi, generateWhatsAppMessage, getWhatsAppLink } from '../api/api'

function LatestOffer() {
  const [allOffers, setAllOffers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchAllOffers()
  }, [])

  const fetchAllOffers = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await getOfferProductsPublicApi()
      if (response.offerProducts) {
        setAllOffers(response.offerProducts)
      }
    } catch (err) {
      setError('Failed to load offers')
      console.error('Fetch offers error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsAppProduct = (offer) => {
    const message = generateWhatsAppMessage(offer)
    const link = getWhatsAppLink(message)
    window.open(link, '_blank')
  }
  
   const handleWhatsAppHero = () => {
      const link = getWhatsAppLink()
      window.open(link, '_blank')
    }
  

  return (
    <>
    <Navbar/>
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

        {/* <!-- Error Message --> */}
        {error && (
          <div className="px-4 md:px-8 lg:px-40 py-6">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-500">error</span>
                <p className="text-red-700 dark:text-red-300">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* <!-- Offers Grid --> */}
        <div className="px-4 md:px-8 lg:px-40 py-12">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <SkeletonProductCard key={i} isOfferCard={true} />
              ))}
            </div>
          ) : allOffers.length === 0 ? (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-4xl text-gray-400 mb-3 inline-block">inbox</span>
              <p className="text-gray-500">No offers available right now</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allOffers.map((offer) => (
                <div
                  key={offer._id}
                  className="group relative bg-white dark:bg-[#1a2625] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
                >
                  <div
                    className="absolute top-3 left-3 z-10 bg-accent text-white text-xs font-bold px-2 py-1 rounded shadow-sm"
                  >
                    {offer.offerLabel}
                  </div>
                  <div
                    className="aspect-square bg-gray-100 w-full relative overflow-hidden"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{
                        backgroundImage: `url('${offer.image}')`
                      }}
                    ></div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3
                      className="font-bold text-lg text-[#111818] dark:text-white leading-tight mb-1"
                    >
                      {offer.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{offer.quantity}</p>
                    <div className="mt-auto flex items-end justify-between">
                      <div>
                        <span
                          className="block text-xs text-gray-400 line-through font-medium"
                          >${offer.originalPrice?.toFixed(2)}</span
                        >
                        <span className="block text-xl font-bold text-primary">${offer.offerPrice?.toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => handleWhatsAppProduct(offer)}
                        className="size-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] transition-colors shadow-sm"
                        title="Order via WhatsApp"
                      >
                        <span className="material-symbols-outlined">chat</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          </div>
      </div>
    </main>
    <Footer/>
    <div className="fixed bottom-6 right-6 z-50">
<button onClick={handleWhatsAppHero} className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
<span className="font-bold text-base hidden md:block">Chat with us</span>
<span className="material-symbols-outlined text-[28px]">chat</span>
</button>
</div>
    </>
  )
}

export default LatestOffer
              

