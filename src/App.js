import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LoginPage from "./LoginPage"
import Home from './Home'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
