import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.scss";

// DATA
import retreat from "./data/retreat";

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/Footer/Legal/PrivacyPolicy";
import LegalNotice from "./components/Footer/Legal/LegalNotice";

import Home from "./components/pages/Home/Home";
import { Home2 } from "./components/pages/Home2/Home2";
import Program from "./components/pages/Program/Program";
import Infos from "./components/pages/Infos/Infos";
import Contact from "./components/pages/Contact/Contact";

import NotFound from "./components/pages/NotFound/NotFound";
import { Music } from "./components/pages/Music/Music";
import { Directions } from "./components/pages/Infos/Directions";
import { Accomodation } from "./components/pages/Infos/Accomodation";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Home2 />
      <Program />
      <Infos />
      <Directions/>
      <Accomodation/>
      <Music />

      {/* <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/a-propos" element={<About />}></Route>
          <Route path="/retraite" element={<Retreat data={retreat} />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/mentions-legales" element={<LegalNotice />}></Route>
          <Route
            path="/politique-de-confidentialite"
            element={<PrivacyPolicy />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        
      </Router> */}
    </div>
  );
}

export default App;
