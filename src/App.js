import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./components/Router/Router";
import BrandDesign from "./components/Brand/BrandDesign";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <BrandDesign />
      <Footer />
    </div>
  );
}

export default App;
