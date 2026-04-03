import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CitizenModal from "../Modal/CitizenModal";

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Outlet />  {/* ← Isso substitui {children} */}
      </main>
      <Footer onCitizenClick={() => setIsModalOpen(true)} />
      <CitizenModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Layout;