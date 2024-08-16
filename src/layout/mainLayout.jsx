import { Outlet } from "react-router-dom";
import Navbar from "../pages/header/navbar.jsx";
import Footer from "../pages/footer/Footer.jsx";
function mainLayout() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default mainLayout;
