import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carousel from './components/Pages/Carousel';
import { Album } from "./components/Pages/Album";
import { Pensamientos } from "./components/Pages/Pensamientos";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/album" element={<Album />} />
            <Route path="/pensamientos" element={<Pensamientos />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
