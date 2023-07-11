import './App.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <Home />
      </div>
    </div>
  );
};

export default App;
