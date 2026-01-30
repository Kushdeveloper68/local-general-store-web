import './App.css'
import { Home, About ,DeliveryAndOrdering,ContectAndLocation,LatestOffer} from "./pages"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery-and-ordering" element={<DeliveryAndOrdering />} />
        <Route path="/contact-and-location" element={<ContectAndLocation />} />
        <Route path="/latest-offer" element={<LatestOffer />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
