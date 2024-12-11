import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        {/* Wrap routes with the Layout component */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
