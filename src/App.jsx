import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-&-conditions" element={<TermsConditions />} />
        <Route path="/donate" element={<Donate/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
