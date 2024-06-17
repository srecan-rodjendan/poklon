import { NavLink } from "react-router-dom";

function First() {
  return (
    <div className="first">
      <div className="corner">
      <div className="blue">
        <h2>Да ли сте ово ви?</h2>
      </div>

      <div className="choicee">
        <NavLink to="/second">
          <div className="option">Да, то сам ја</div>
        </NavLink>

        <NavLink to="/third">
          <div className="option">Не познајем ову особу</div>
        </NavLink>
      </div>
      </div>
    </div>
  );
}

export default First;
