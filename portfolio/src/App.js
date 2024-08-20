import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import CV from './components/CV';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
 <Router>
 <div>
 <header className="navbar navbar-expand-lg navbar-light bg-light">
 <Link className="navbar-brand" to="/">My Portfolio</Link>
 hh
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
<Route path="/cv" element={<CV/>} />
<Route path="/projects"element={<Projects/>} />
<Route path="/contact" element={<ContactMe/>} /></Routes>
</main>
</div>
</Router>
  );
}
export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Dena`s Portfolio` <code></code> 
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;
