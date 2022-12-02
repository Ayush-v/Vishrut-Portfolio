import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      {/* {children} */}
      <Outlet />
      <Footer />
    </>
  );
}
