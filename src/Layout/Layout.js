import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#f5faff]  mx-auto ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;