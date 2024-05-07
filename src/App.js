import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import PropertiesDetails from "./pages/PropertiesDetails";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import { Consultation } from "./pages/Consultation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
              path="/properties"
              element={<Properties />}
            />
            <Route
              path="/properties/properties-details/:id"
              element={<PropertiesDetails />}
            />
            <Route
              path="/consultation"
              element={<Consultation />}
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
