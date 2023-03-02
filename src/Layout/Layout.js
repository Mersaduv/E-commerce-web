import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className=" bg-gray-100 ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
