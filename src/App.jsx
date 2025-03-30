import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import ContactUs from "./pages/ContactUs.jsx"
import Services from "./pages/Services.jsx"
import MedicalCoding from "./pages/services/MedicalCoding.jsx"
import HealthcareHiring from "./pages/services/HealthcareHiring.jsx"
import Recruitment from "./pages/services/Recruitment.jsx"
import EntireRecruitment from "./pages/services/EntireRecruitment.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="services" element={<Services />} />
          <Route path="services/medical-coding" element={<MedicalCoding />} />
          <Route path="services/healthcare-hiring" element={<HealthcareHiring />} />
          <Route path="services/recruitment" element={<Recruitment />} />
          <Route path="services/entire-recruitment" element={<EntireRecruitment />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

