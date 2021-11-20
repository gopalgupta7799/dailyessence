import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import LoginSignup from "./components/LoginSignup";

import './App.css'
import Cart from "./components/Cart";
import { CartProvider } from "react-use-cart";
import Admin from "./components/Admin";
import Fruits from "./components/categorypages/Fruits"
import Vegetables from "./components/categorypages/Vegetables"
import MilkProducts from "./components/categorypages/MilkProducts"
import GrainsOils from "./components/categorypages/GrainsOils";
import NotFound from "./components/NotFound";
import ScrollToTop from "./ScrollToTop";
import Simple from './components/Simple'
import { AuthProvider } from "./components/Auth";
import ThankYouPage from "./components/ThankYouPage";
function App() {
  return (
    <AuthProvider>
      <div className="background">
        <Router>
          <ScrollToTop>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<><Homepage /></>} />
              <Route exact path="/vegetables" element={<Vegetables />} />
              <Route exact path="/fruits" element={<Fruits />} />
              <Route exact path="/milkproducts" element={<MilkProducts />} />
              <Route exact path="/grainsoils" element={<GrainsOils />} />
              <Route exact path="/loginsignup" element={<LoginSignup />} />
              <Route exact path="/cart" element={<><CartProvider><Cart /></CartProvider></>} />
              <Route exact path="/thankyou" element={<ThankYouPage />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Simple />
            <Footer />
          </ScrollToTop>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
