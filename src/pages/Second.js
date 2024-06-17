import { NavLink } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

function Second() {
  const [position, setPosition] = useState({ top: 0, left: "50%" });

  const handleMouseEnter = () => {
    const maxOffset = 90; 

    const currentTop = parseInt(position.top);
    const currentLeft = parseInt(position.left);


    const newTop = Math.min(Math.max(0, currentTop + Math.floor(Math.random() * (maxOffset * 2) - maxOffset)), window.innerHeight - 50) + 'px';
    const newLeft = Math.min(Math.max(0, currentLeft + Math.floor(Math.random() * (maxOffset * 2) - maxOffset)), window.innerWidth - 100) + 'px';
    setPosition({ top: newTop, left: newLeft });
  };



    return (
      <div>
        <Header></Header>
        <div className="second">
          <div className="blue"><h2>Да ли сте расположении за једно кратко путовање?</h2></div>
          <div className="option-container">
          <NavLink to="/fourth"><div className="option">Да, наравно</div></NavLink>
          <div
            className="option runaway"
            style={{ top: position.top, left: position.left }}
            onMouseEnter={handleMouseEnter}
          >Не, хвала</div>
          </div>
        </div>
</div>
    );
  }
  
  export default Second;