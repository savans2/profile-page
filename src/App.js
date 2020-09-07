import React from 'react';
import Navbar from './components/Navbar';
import ImageSection from './components/CoverPicture';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <ImageSection></ImageSection>
        <div className="d-flex flex-wrap justify-content-between">
          <AboutSection></AboutSection>
        </div>
      </div>
    </div>
  );
}

export default App;
