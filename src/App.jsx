import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUs";
import ListingDetail from "./pages/DestinationDetailPage";
import Taxi from "./pages/Taxi";
import Kumbh from "./pages/Kumbh";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing type
      once: false, // Whether animation should happen only once
      mirror: true, // Animate elements as they scroll out of view
    });

    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [location]); // This effect runs every time the location changes

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mahakumbh" element={<Kumbh />} />

          <Route path="/listings/:id" element={<ListingDetail />} />
          <Route path="/taxi" element={<Taxi />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
