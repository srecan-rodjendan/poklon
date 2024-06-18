// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import Fifth from "./pages/Fifth";
import Sixsth from "./pages/Sixsth";
import Seventh from "./pages/Seventh";
import Eighth from "./pages/Eighth";
import Ninth from "./pages/Ninth";
import Tenth from "./pages/Tenth";
import Eleventh from "./pages/Eleventh";
import Twelfth from "./pages/Twelfth";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
       
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/first" element={<First></First>}></Route>
          <Route path="/second" element={<Second></Second>}></Route>
          <Route path="/third" element={<Third></Third>}></Route>
          <Route path="/fourth" element={<Fourth></Fourth>}></Route>
          <Route path="/fifth" element={<Fifth></Fifth>}></Route>
          <Route path="/sixsth" element={<Sixsth></Sixsth>}></Route>
          <Route path="/seventh" element={<Seventh></Seventh>}></Route>
          <Route path="/eighth" element={<Eighth></Eighth>}></Route>
          <Route path="/ninth" element={<Ninth></Ninth>}></Route>
          <Route path="/tenth" element={<Tenth></Tenth>}></Route>
          <Route path="/eleventh" element={<Eleventh></Eleventh>}></Route>
          <Route path="/twelfth" element={<Twelfth></Twelfth>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
