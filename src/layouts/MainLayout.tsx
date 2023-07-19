import { Outlet } from "react-router-dom";

// Components
import { Navigation } from "../ui/components/navigation/Navigation";
import Footer from "../ui/components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
