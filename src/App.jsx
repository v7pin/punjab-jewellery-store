import "./App.css";
import Collections from "./components/Collections";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import NewCollections from "./components/NewCollections";
import Featured from "./components/Featured";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Featured />
      <Gallery />
      <Collections />
      <NewCollections />
      <ContactUs />
    </>
  );
}

export default App;
