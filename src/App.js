import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.scss";

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";


import { Home } from "./components/pages/Home/Home";
import Program from "./components/pages/Program/Program";
import Infos from "./components/pages/Infos/Infos";
import { Music } from "./components/pages/Music/Music";


import Contact from "./components/pages/Contact/Contact";
import NotFound from "./components/pages/NotFound/NotFound";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Program />
      <Infos />
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
