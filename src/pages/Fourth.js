import { NavLink } from "react-router-dom";
import Header from "./Header";

function Fourth() {
    return (
      <div>
         <Header></Header>
         <div className="fourth">
         <div className="blue"><h2>Да ли сте слободни у петак, 28.06.2024?</h2></div>
<div className="choice">
<NavLink to="/fifth"><div className="option">Да, слободан сам</div></NavLink>
<NavLink to="/sixsth"><div className="option">Не</div></NavLink>

</div>
         </div>
      </div>
    );
  }
  
  export default Fourth;