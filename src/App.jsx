import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./pages/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";
import Quotes from "./components/quotes/Quotes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Info />
        <Routes index path="/">
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/quote" element={<Quotes />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
