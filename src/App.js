import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import { ThemeContext } from './context/ThemeContext';

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Reserch from "./Pages/Reserch";
import Members from './Pages/Members';
import Contact from './Pages/Contact';

function App() {

  const {darkMode} = useContext(ThemeContext);

  return (
    <Router>
      <div className={`${darkMode ? "App" : "AppDark"}`}>
        <div className="header">
          <Navbar />
        </div>
        <div className={`${darkMode ? "body" : "bodyDark"}`}>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/reserch/*' Component={Reserch} />
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
