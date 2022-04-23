import './../../App.css';
import Languages from "../Header/FirstMenu/Languages/Languages";
import ContactInformation from "../Header/SecondMenu/ContactInformation/ContactInformation";
import Basket from "../Header/SecondMenu/Basket/Basket";
import SecondMenuBlock from "../Header/SecondMenu/SecondMenuBlock/SecondMenuBlock";
import FirstMenuBlock from "../Header/FirstMenu/FirstMenuBlock/FirstMenuBlock";
import Search from "../Header/FirstMenu/Search/Search";
import ContentMenuBurger from "./ContentMenuBurger";
import {MyContext} from "../../App";
import {useContext} from "react";


function MenuBurger() {
    const {state, dispatch} = useContext(MyContext);


  return (
            <div className="responsive-navigation-menu">
                <div className="responsive-navigation">
                    <Languages/>
                    <ContactInformation/>
                    <Basket/>
                    <div className="menu-burger-header">
                        <input id="menu__toggle" type="checkbox" defaultChecked={state.burgerMenuWork} onClick={()=>dispatch({type: 'BURGER_MENU_WORK',})}/>
                        <label className="menu__btn" for="menu__toggle">
                            <span>

                            </span>
                        </label>
                    </div>
                </div>
                <div className={state.burgerMenuWork ? "closed-menu-burger-body" : "menu-burger-body"}>
                    <div className="menu-title">
                        Меню
                    </div>
                    <Search/>
                    <SecondMenuBlock/>
                    <FirstMenuBlock/>
                </div>
                <ContentMenuBurger/>
            </div>

  );
}

export default MenuBurger;

