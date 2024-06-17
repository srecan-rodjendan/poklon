import { NavLink } from "react-router-dom";
import "../App.css";
function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <h1>СРЕЋАН РОЂЕНДАН</h1>
        <span className="heart-icon">&#10084;</span>
      </div>
      <div className="wrapper foot">
        За преузимање поклона молимо вас да потврдите свој индетитет
        <NavLink to="/first">
          <span className="arrow-icon">&#10132;</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
