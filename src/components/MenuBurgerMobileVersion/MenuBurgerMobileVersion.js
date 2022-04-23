import './../../App.css';
import Basket from "../Header/SecondMenu/Basket/Basket";
import Languages from "../Header/FirstMenu/Languages/Languages";
import Search from "../Header/FirstMenu/Search/Search";
import SecondMenuBlock from "../Header/SecondMenu/SecondMenuBlock/SecondMenuBlock";
import FirstMenuBlock from "../Header/FirstMenu/FirstMenuBlock/FirstMenuBlock";
import ContactInformation from "../Header/SecondMenu/ContactInformation/ContactInformation";
import {useContext} from "react";
import {MyContext} from "../../App";



function MenuBurgerMobileVersion() {
    const {state, dispatch} = useContext(MyContext);

  return (
            <div className="mobile-version-navigation-menu">
                <div className="mobile-version-responsive-navigation">
                    <Basket/>
                    <div className="menu-burger-header">
                        <input id="menu__toggle" type="checkbox" defaultChecked={state.mobileBurgerMenuWork}
                               onClick={() => dispatch({type: 'MOBILE_BURGER_MENU_WORK',})}/>
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span>

                            </span>
                        </label>
                    </div>
                </div>
                <div className={state.mobileBurgerMenuWork ? "menu-burger-body" : "closed-menu-burger-body" }>
                    <div className="mobile-version-first-menu">
                        <div className="menu-title">
                            Меню
                        </div>
                        <Languages/>
                        <Search/>
                    </div>
                    <div className="mobile-version-body-menu">
                        <SecondMenuBlock/>
                        <FirstMenuBlock/>
                    </div>
                    <ContactInformation/>
                </div>
            </div>

  );
}

export default MenuBurgerMobileVersion;

