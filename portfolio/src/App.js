import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import CV from './components/CV';
import Projects from './components/Projects';
import ContactMe from '/ContactMe.js'
import Home from './components/Home';
const Footer =()=>{
  return (
<footer className='footer'>
  <p> © 2024 Dena Torabi .All rights reserved.</p>
</footer>
  );
};

function App() {
  return (
 <Router>

 <div className="app-container">
 <header className="navbar navbar-expand-lg navbar-light ">
 <Link className="navbar-brand" to="/">My Portfolio</Link>
 <div className="collapse navbar-collapse">
 <ul className="navbar-nav mr-auto">
 <li className="nav-item">
 <a className="nav-link" href="/DENA-TORABI.pdf" download>CV</a>
 </li>
 <li className="nav-item">
 <Link className="nav-link" to="/projects">Projects</Link>
 </li>
 <li className="nav-item">
 <Link className="nav-link" to="/contact">Contact Me</Link>
 </li>
 </ul>
 </div>
 </header>

<main className="container mt-4">
  <Routes>
  <Route path="/" element={<Home/>} />
<Route path="/cv" element={<CV/>} />
<Route path="/projects"element={<Projects/>} />
<Route path="/contact" element={<ContactMe/>} /></Routes>
</main>
<Footer/>
</div>
</Router>
  );
}
export default App;


