import "./index.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Footer from "./components/Footer"

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Sidebar />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
