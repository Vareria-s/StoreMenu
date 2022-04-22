import './../../../App.css';
import search from "./../../../img/search.png";
import Languages from "./Languages/Languages";
import FirstMenuBlock from "./FirstMenuBlock/FirstMenuBlock";
import Search from "./Search/Search";

function FirstMenu() {
  return (
            <div className="header-first-menu">
                <div className="first-menu">
                    <Languages/>
                    <FirstMenuBlock/>
                    <Search/>
                </div>
            </div>
  );
}

export default FirstMenu;
