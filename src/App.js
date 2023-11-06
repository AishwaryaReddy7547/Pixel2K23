import Video from './components/Video';
import './App.css';
import Event from './pages/Event';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
