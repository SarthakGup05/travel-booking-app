import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        {/* Wrap routes with the Layout component */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
