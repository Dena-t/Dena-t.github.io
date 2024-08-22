import React from 'react';
import { HashRouter as Router, Route,Routes, NavLink } from 'react-router-dom';
import CV from './components/CV';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
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
<header className="navbar navbar-expand-lg navbar-light bg-light">
<NavLink className="navbar-brand" to="/">My Portfolio</NavLink>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav mr-auto">
<li className="nav-item">
<a className="nav-link" href="/DENA-TORABI.pdf" download>CV</a>
</li>
<li className="nav-item">
<NavLink className="nav-link" to="/Projects" activeClassName="active">Projects</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link" to="/contact" activeClassName="active">Contact Me</NavLink>
</li>
</ul>
</div>
</header>
<main className="container mt-4">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/cv" element={<CV />} />
<Route path="/Projects" element={<Projects />} />
<Route path="/contact" element={<ContactMe />} />
</Routes>
</main>
<Footer />
</div>
</Router>
//  <Router>

//  <div className="app-container">
//  <header className="navbar navbar-expand-lg navbar-light bg-light ">
//  <Link className="navbar-brand" to="/">My Portfolio</Link>
//  <div className="collapse navbar-collapse">
//  <ul className="navbar-nav mr-auto">
//  <li className="nav-item">
//  <a className="nav-link" href="/DENA-TORABI.pdf" download>CV</a>
//  </li>
//  <li className="nav-item">
//  <Link className="nav-link" to="/Projects">Projects</Link>
//  </li>
//  <li className="nav-item">
//  <Link className="nav-link" to="/contact">Contact Me</Link>
//  </li>
//  </ul>
//  </div>
//  </header>

// <main className="container mt-4">
//   <Routes>
//   <Route path="/" element={<Home/>} />
// <Route path="/cv" element={<CV/>} />
// <Route path="/Projects"element={<Projects/>} />
// <Route path="/contact" element={<ContactMe/>} /></Routes>
// </main>
// <Footer/>
// </div>
// </Router>
  );
}
export default App;


