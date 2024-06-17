import { NavLink } from "react-router-dom";

function Third() {
  return (
    <div className="third">
      <div className="top">
        <h1>СТРОГО ПОВЕРЉИВО!!!</h1>
        <h3>
          Молимо вас напустите ову страницу <p>(на Х у горњем десном углу)</p>
        </h3>
      </div>
      <NavLink to="/first"><div className="bottom">НАЗАД</div></NavLink>
    </div>
  );
}

export default Third;
