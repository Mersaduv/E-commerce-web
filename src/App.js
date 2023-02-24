import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from "./components/CheckOut";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./Layout/Layout";
import CartPage from "./pages/CartSummary";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import store from "./redux/store";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";
import DetailPage from "./pages/DetailPage";
import ElectronicsGadgets from "./pages/ElectronicsGadgets";
import HomeAppliances from "./pages/HomeAppliances";
function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Layout>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/header" element={<Header />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Profile />} />
            <Route path="/product/:id" element={<DetailPage />} />
            <Route
              path="/electronics-Gadgets"
              element={<ElectronicsGadgets />}
            />
            <Route path="/home-appliances" element={<HomeAppliances />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Provider>
  );
}

export default App;
