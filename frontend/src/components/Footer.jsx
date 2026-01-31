import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#111818] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
         
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div
                className="size-8 bg-primary rounded-lg flex items-center justify-center text-white"
              >
               <img src={logo} alt="logo" />
              </div>
              <h2 className="text-xl font-bold">LK Mart</h2>
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
                >location_on</span>
                Shop DBZ-North-31 <br />Railway Colony,<br /> Gandhdiham (Kutch) 370210
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg"
                  >schedule</span>
                Daily: 9:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link className="hover:text-primary transition-colors" to="/latest-offer"
                >Special Offers</Link>

              <Link className="hover:text-primary transition-colors" to="/delivery-and-ordering"
                >Delivery Areas</Link>
              <Link className="hover:text-primary transition-colors" to="/contact-and-location"
                >Contact Support</Link>
            </div>
          </div>
          
          <div
            className="rounded-lg overflow-hidden h-32 w-full bg-gray-800 relative"
          >
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
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>© 2026 LK Mart Gandhidham (kutch). All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-white" href="https:kushdeveloper.onrender.com/">Made By:</a>
            <a className="hover:text-white" href="https:kushdeveloper.onrender.com/">Developer {"</>"}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer