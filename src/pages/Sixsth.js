import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Sixsth() {
  const [count, setCount] = useState(10); // Brojač koji kreće od 10

  // Efekat za smanjivanje brojača svake sekunde
  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [count]);

  return (
    <div className="sixsth">
      <h1>ПОГРЕШАН ОДГОВОР!!</h1>
      <div className="count-container">
        <div>Позовите шефа и одговорите поново</div>
        {/* <div className="count">{count}</div> */}
        {count > 0 ? (
          <div className="count">{count}</div>
        ) : (
          <NavLink to="/fourth"><div className="goBack">Назад</div></NavLink>
        )}
        
      </div>
    </div>
  );
}

export default Sixsth;
