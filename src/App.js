import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <h1 style={{background:'yellow', height:'100vh'}}>Hello World</h1>
        <Footer />
    </div>
  );
}

export default App;
