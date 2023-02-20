import Signup from './auth/Signup';
import Login from './auth/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  const userKey = localStorage.getItem('userKey');


  return (
    <div className="App">
      <Router>
        <Routes>
          {
            userKey ? <Route path='/' exact element={<Home />} /> : <Route path='/' exact element={<Login />} />
          }
          <Route path='/home' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
