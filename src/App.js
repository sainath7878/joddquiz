import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "pages/index";
import { Footer, Header } from "components";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mockman" element={<Mockman colorScheme="dark" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
