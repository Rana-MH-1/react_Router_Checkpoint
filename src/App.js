import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/Profile/:id' element={<Profile/>}></Route>
        <Route path='*' element={<ErrorPage/>} ></Route>

      </Routes>

    </Router>
  );
}

export default App;
