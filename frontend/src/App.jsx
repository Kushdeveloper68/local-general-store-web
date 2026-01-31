import './App.css'
import { Home, About ,DeliveryAndOrdering,ContectAndLocation,LatestOffer, AdminPanel, AdminLogin} from "./pages"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"

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
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route 
          path="/admin-panel" 
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
