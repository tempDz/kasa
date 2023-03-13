import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import FicheLogement from './pages/Fiche Logement/FicheLogement';
import Error404 from './pages/Error 404/Error404';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    min-width: 375px;
    margin: auto;
    overflow-y: scroll;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fiche-logement" element={<FicheLogement />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
