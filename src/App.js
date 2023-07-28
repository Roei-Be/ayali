import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Reserch from "./components/Reserch";
import Members from './components/Members';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Navbar />
        </div>
        <div className="body">
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/reserch' Component={Reserch} />
            {/* <Route path='/publication' Component={Reserch} /> */}
            <Route path='/members/*' Component={Members} />
            <Route path='/contact' Component={Contact} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
