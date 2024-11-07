import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import {Home } from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Process from "./pages/OurProcess"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="process" element={<Process />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
