import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './Pages/MainContent';
import ReactGA from 'react-ga';


ReactGA.initialize('G-0Q3L2HXECJ');

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FBF7F6;
    font-family: 'New York', sans-serif;
  }

  p {
    line-height: 1.5;
  }
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<MainContent />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <PageViewTracker />
    </Router>
  );
};

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

export default App;
