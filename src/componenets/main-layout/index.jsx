import Header from "../header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footerr from "../footerr";
function MainLayout() {
  return (
    <div className="max-w-[1540px] mx-auto ">
      <Header />
      <main>
        <Outlet />
        <Toaster />
      </main>

      <Footerr/>
    </div>
  );
}

export default MainLayout;
