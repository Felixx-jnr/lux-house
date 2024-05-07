import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import House from "./pages/House";
import HouseDetails from "./pages/HouseDetails";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/house"
              element={<House />}
            />
            <Route
              path="/house/house-details/:id"
              element={<HouseDetails />}
            />
            <Route
              path="*"
              element={<Notfound />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
