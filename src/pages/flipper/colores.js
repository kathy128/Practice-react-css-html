import React, { useState } from 'react';
import './color.scss';
import Helmet from "react-helmet";

  function Colores() {
    const [color, setColor] = useState("#fff");
    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    
    const handleClick=i=>{
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
      }
     
      setColor(hexColor);
    };
    const getRandomNumber=()=>{
      return Math.floor(Math.random()*hex.length);
     }
     const Heading = () => (
      <h1 className="hex">
        Background Color:{" "}
        <span className="color" style={{ color: `${color}` }}>
          {color}
        
        </span>
       
      </h1>
    );
     const Button = ({ onClick, value }) => (
      <button
        className="boton"
        onClick={onClick}>
        {value}
      </button>
    );
  return (
    <div className='colores'>
      <nav className='titulo'>
        <h2>color flipper</h2>
        </nav>
        <main>
          <div className='container'>
          <Helmet>
          <style>{`body {background-color: ${color}}`}</style>
          </Helmet>
            <Heading/>
            <Button onClick={handleClick} value="Click Me"/>
          </div>
        </main>
    </div>
  )
}

export default Colores