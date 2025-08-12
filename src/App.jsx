import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ShopPage from "./pages/ShopPage"
import JuicePage from "./pages/JuicePage"
import GroceriesPage from "./pages/GroceriesPage"
import Navbar from "./components/Navbar"


function App() {

  return (
    <> 
    <Navbar />
    <Routes> 
      <Route index="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />}/> 
      <Route path="/contact" element={<ContactPage />} /> 
      <Route path="/all"  element={<ShopPage />}  /> 
      <Route path="/juice" element={<JuicePage />} /> 
      <Route path="/groceries" element={<GroceriesPage />}  />
    </Routes>
      
    </>
  )
}

export default App
