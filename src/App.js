import logo from "../src/assets/nyt-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="">
      <img src={logo} className="logo" alt="New York Times Logo" />
      <h3 className="section"> Choose a Section</h3>
      <div className="selectOptions">
        <select class="select-menu">
          <option value=""> Sections...</option>
          <option value="home"> Home</option>
          <option value="arts"> Arts</option>
          <option value="business"> Business</option>
          <option value="sports"> Sports</option>
          <option value="technology"> Technology</option>
          <option value="fashion"> Fashion</option>
        </select>
      </div>
      <h3>&copy;Copyright 2021 INSTANEWS</h3>
    </div>
  );
}

export default App;
