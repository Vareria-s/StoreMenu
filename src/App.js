import './App.css';
import Content from "./components/Content/Content";
import FirstMenu from "./components/Header/FirstMenu/FirstMenu";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import SecondMenu from "./components/Header/SecondMenu/SecondMenu";
import {BrowserRouter} from "react-router-dom";
import MenuBurgerMobileVersion from "./components/MenuBurgerMobileVersion/MenuBurgerMobileVersion";

function App() {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <MenuBurger/>
            <MenuBurgerMobileVersion/>
            <div className="header">
                <FirstMenu/>
                <SecondMenu/>
            </div>
            <Content />
        </div>
      </BrowserRouter>
  );
}

export default App;
