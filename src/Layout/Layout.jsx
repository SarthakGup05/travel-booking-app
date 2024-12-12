import { Outlet } from "react-router-dom";
import Navbar from "../components/Header";
import Footer from "./Footer";
import BookNow from "../utils/Booknow";
import Whtsappbtn from "../utils/WaBtn";
import ScrollToTopButton from "../utils/ScrolltoTop";

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <BookNow/>
      <Whtsappbtn/>
      <ScrollToTopButton/>

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
