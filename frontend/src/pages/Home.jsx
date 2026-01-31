import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import {Navbar, Footer} from "../components"
import SkeletonProductCard from '../components/SkeletonProductCard'
import { getOfferProductsPublicApi, getPopularProductsPublicApi, generateWhatsAppMessage, getWhatsAppLink } from '../api/api'

function Home() {
  const [topOffers, setTopOffers] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const [loadingOffers, setLoadingOffers] = useState(true)
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [offerError, setOfferError] = useState('')
  const [productError, setProductError] = useState('')

  useEffect(() => {
    fetchTopOffers()
    fetchPopularProducts()
  }, [])

  const fetchTopOffers = async () => {
    setLoadingOffers(true)
    setOfferError('')
    try {
      const response = await getOfferProductsPublicApi()
      if (response.offerProducts) {
        setTopOffers(response.offerProducts.slice(0, 4))
      }
    } catch (err) {
      setOfferError('Failed to load offers')
      console.error('Fetch offers error:', err)
    } finally {
      setLoadingOffers(false)
    }
  }

  const fetchPopularProducts = async () => {
    setLoadingProducts(true)
    setProductError('')
    try {
      const response = await getPopularProductsPublicApi()
      if (response.popularProducts) {
        setPopularProducts(response.popularProducts)
      }
    } catch (err) {
      setProductError('Failed to load popular products')
      console.error('Fetch products error:', err)
    } finally {
      setLoadingProducts(false)
    }
  }

  const handleWhatsAppProduct = (product) => {
    const message = generateWhatsAppMessage(product)
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
              onClick={handleWhatsAppHero}
              className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all shadow-lg shadow-primary/25"
            >
              <span className="material-symbols-outlined">chat</span>
              Order on WhatsApp
            </button>
            <a href="tel:+918160751735" target='_blank'>
            <button
              className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-white text-base font-bold transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              Call Now
            </button>
            </a>
          </div>
          <p className="text-sm text-red-500 flex items-center gap-1">
            <span className="material-symbols-outlined text-base">verified</span>
        <span>Free delivery on orders above Rupees 300</span>
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
                    All Masala Powders
                  </p>
                </div>
                <span
                  className="bg-accent text-white text-xs font-bold px-2 py-1 rounded"
                  >Good price</span
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
        <Link
          className="hidden sm:flex items-center gap-1 text-primary font-bold hover:text-primary-dark transition-colors"
          to={"/latest-offer"}
        >
          View All Offers
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      {/* Error Message */}
      {offerError && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-6">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-red-500">error</span>
            <p className="text-red-700 dark:text-red-300">{offerError}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loadingOffers ? (
          <>
            {[1, 2, 3, 4].map((i) => (
              <SkeletonProductCard key={i} isOfferCard={true} />
            ))}
          </>
        ) : topOffers.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No offers available right now</p>
          </div>
        ) : (
          topOffers.map((offer) => (
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
          ))
        )}
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

      {/* Error Message */}
      {productError && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-6">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-red-500">error</span>
            <p className="text-red-700 dark:text-red-300">{productError}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {loadingProducts ? (
          <>
            {[1, 2, 3, 4, 5].map((i) => (
              <SkeletonProductCard key={i} isOfferCard={false} />
            ))}
          </>
        ) : popularProducts.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No popular products available</p>
          </div>
        ) : (
          popularProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white dark:bg-[#1a2625] rounded-lg p-3 border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors cursor-pointer group"
            >
              <div
                className="aspect-square rounded-md bg-gray-50 mb-3 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${product.image}')`
                }}
              ></div>
              <h4 className="font-bold text-sm text-[#111818] dark:text-white truncate">
                {product.title}
              </h4>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-semibold text-primary">${product.price?.toFixed(2)}</span>
                <button
                  onClick={() => handleWhatsAppProduct(product)}
                  className="material-symbols-outlined text-gray-400 text-sm group-hover:text-primary transition-colors hover:text-[#25D366] hover:scale-125"
                  title="Order via WhatsApp"
                >
                  chat
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
    
    <Footer/>
   
    <a
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group"
      onClick={handleWhatsAppHero}
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