import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      {" "}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
