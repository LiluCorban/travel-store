
import './App.css';
import Header from "./components/Header/Header";
import BestSellers from "./components/BestSellers/BestSellers";
import Tour from "./components/Tour/Tour"
import Banners from "./components/Banners/Banners"
import Offers from "./components/Offers/Offers";
import { Route, Routes} from "react-router-dom";
import Select from "./components/Select/Select";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";

function App(props) {

  return (
    <div className="App">
     <Header/>
        <Banners/>
         <Routes>
             <Route path="/bestsellers" element={<BestSellers cards = {props.state.bestsellers.cards}/>}/>
             <Route path="/offer" element={<Offers cards = {props.state.offers.cards}/>}/>
             <Route path="/tour" element={<Tour/>}/>
             <Route path="/select" element={<Select select={props.state.offers.cards}/>}/>
             <Route path="/news" element={<News/>}/>
         </Routes>
        <Footer/>



    </div>
  );
}

export default App;
