import { NavLink } from "react-router-dom";

function Seventh() {
  return (
    <div className="seventh">
      <div className="ribbon">
        <div className="center">
        <div className="data">
          <span className="boat">&#128676;</span>Венеција за 2 особе
          <span className="boat">&#128676;</span>
        </div>
        <div className="date">
          <span className="heart-icon">&#10084;</span>
          28.06.2024<span className="heart-icon">&#10084;</span>
        </div>
        </div>
        <div> <NavLink to="/eighth">
          <span className="arrow">&#10132;</span>
        </NavLink></div>
      </div>
    </div>
  );
}

export default Seventh;
