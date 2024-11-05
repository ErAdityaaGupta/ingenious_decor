import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import {Home } from "./pages/Home"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
