// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has been Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has been Enabled", "success")
    }
  };
  return (
    <>
      {/* <Router>
        <Navbar title='textUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Switch> */}
      {/* <Route path="/">
            <TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />
          </Route>
          <Route path="/about">
            <About />
          </Route> */}
      {/* <Route path="/about" component={About} /> */}
      {/* <Route exact path="/" component={ TextForm }/>
    <Route path="/about" component={About} />
        </Switch>

      </Router> */}

      <Router>
      <Navbar title='textUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />} />
          <Route exact path='/about' element={<About/>} />
      </Routes>
    </Router>
    </>

  );
}
export default App;
