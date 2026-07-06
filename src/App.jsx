import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound.jsx";
import About from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx"
import Services from "./pages/Services.jsx";
import Solutions from "./pages/Solutions.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import WebDevelopment from "./pages/WebDevelopment.jsx";
import AppDevelopment from "./pages/AppDevelopment.jsx";

export default function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/AboutUs" element={<About />} />

        <Route path="/Contact" element={<Contact />} />

        <Route path="/Services" element={<Services />} />

        <Route path="/Services" >
          <Route path="Web-Development" element={<WebDevelopment />} />
          <Route path="App-Development" element={<AppDevelopment />} />
        </Route>

        <Route path="/Our-Solutions" element={<Solutions />} />

        <Route path="/Portfolio" element={<Portfolio />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </>
  )
}
