
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Productslist from "./components/Productslist";
import { Routes , Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProudctDetails from "./components/ProudctDetails";
function App() {
  return (
    <>
   
    <Navbar/>
    <Routes>

      <Route path="/" element={
        <>
      <Slider/>
    <Productslist/>
    </>}  />

    <Route path="about" element={<AboutUs/>}/>
    <Route path="products/:productId" element={<ProudctDetails/>} />

    </Routes>
    
    
    </>
  );
}

export default App;
