import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
