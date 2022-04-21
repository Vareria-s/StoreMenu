import './../../App.css';
import menu from "./../../img/menu.png"
import Languages from "../Header/FirstMenu/Languages/Languages";
import ContactInformation from "../Header/SecondMenu/ContactInformation/ContactInformation";
import Basket from "../Header/SecondMenu/Basket/Basket";
import Content from "../Content/Content";
import SecondMenuBlock from "../Header/SecondMenu/SecondMenuBlock/SecondMenuBlock";
import FirstMenuBlock from "../Header/FirstMenu/FirstMenuBlock/FirstMenuBlock";


function MenuBurger() {
  return (
            <div className="responsive-navigation-menu">
                <div className="responsive-navigation">
                    <Languages/>
                    <ContactInformation/>
                    <Basket/>
                    <div className="menu-burger-header">
                        <div className="menu-icon">
                            <img src={menu} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="menu-burger-body">
                    <SecondMenuBlock/>
                    <FirstMenuBlock/>
                </div>
                <Content />
            </div>

  );
}

export default MenuBurger;

