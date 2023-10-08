import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from './Navbar';
import './App.css';
import Button from '@mui/material/Button';

const App = () => {
  const [isDaytime, setIsDaytime] = useState(false);

  useEffect(() => {
    document.body.className = isDaytime ? 'daytime' : 'nighttime';
  }, [isDaytime]);

  const toggleBackground = () => {
    setIsDaytime(!isDaytime);
  };

  const containerClassName = isDaytime ? 'main-container daytime' : 'main-container nighttime';

  const buttonText = isDaytime ? 'Dark Mode' : 'Light Mode';
  return (
    <>
      <ResponsiveAppBar />
      <div className={containerClassName}>
        <div className="round-picture"></div>
        <div className="description">
          <h2>ALISHIA BATOOL</h2>
          <p>Web Developer</p>
          <p>I have a strong passion for crafting engaging and interactive web experiences.</p>
          <p>I've employed the useState Hook to enable button toggling.</p>
          <br />
          <h4>Click for change theme</h4>
          <div>
          <Button
  style={{
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid black',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  }}
  variant="secondary"
  onClick={toggleBackground}
>
  {buttonText}
</Button>


          </div>
        </div>
      </div>
    </>
  );
};

export default App;
