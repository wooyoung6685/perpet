import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import IconSlider from "./components/IconSlider/IconSlider";
import Product from "./components/Product/Product";
import Brand from "./components/Brand/Brand";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <IconSlider />
      <Product />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;