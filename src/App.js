import './App.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Reserch from "./components/Reserch";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        {/* <Home /> */}
        <Reserch />
      </div>
    </div>
  );
};

export default App;
