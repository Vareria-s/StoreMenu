import './../../../App.css';
import search from "./../../../img/search.png";
import Languages from "./Languages/Languages";
import FirstMenuBlock from "./FirstMenuBlock/FirstMenuBlock";

function FirstMenu() {
  return (
            <div className="header-first-menu">
                <div className="first-menu">
                    <Languages/>
                    <FirstMenuBlock/>
                    <div className="search">
                        <input placeholder="Поиск...">
                        </input>
                        <img src={search} alt="">
                        </img>
                    </div>
                </div>
            </div>
  );
}

export default FirstMenu;
