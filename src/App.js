// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#070739';

      showAlert("Dark mode has been enable", "success")

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }
  return (
    <>
          <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About" mode ={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
        <Routes>
          <Route exact path="/" element={<TextForm heading = "Enter your text to analyse" mode ={Mode} showAlert = {showAlert}/>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
      </BrowserRouter>

      


    </>
  );
}

export default App;


