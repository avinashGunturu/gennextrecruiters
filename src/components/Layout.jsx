import { Outlet } from "react-router-dom"
import ContactBar from "./ContactBar"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

