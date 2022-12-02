import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar />
      {/* {children} */}
      <Outlet />
      <Footer />
    </>
  );
}
