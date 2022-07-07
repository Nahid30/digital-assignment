import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./Shared/Footer";

import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
