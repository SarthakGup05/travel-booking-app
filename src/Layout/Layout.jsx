import { Outlet } from "react-router-dom";
import Navbar from "../components/Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
