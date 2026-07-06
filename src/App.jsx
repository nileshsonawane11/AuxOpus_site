import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound.jsx";
import About from "./pages/AboutUs.jsx";

export default function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/AboutUs" element={<About />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </>
  )
}
