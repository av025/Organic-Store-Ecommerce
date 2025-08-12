import { Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, ContactPage, ShopPage, JuicePage,GroceriesPage } from "../pages";

function ApplicationRoutes() {
    return <>
    <Routes> 
      <Route index="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />}/> 
      <Route path="/contact" element={<ContactPage />} /> 
      <Route path="/all"  element={<ShopPage />}  /> 
      <Route path="/juice" element={<JuicePage />} /> 
      <Route path="/groceries" element={<GroceriesPage />}  />
    </Routes>
    </>
}

export default ApplicationRoutes; 