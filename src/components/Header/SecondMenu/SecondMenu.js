import './../../../App.css';
import Basket from "./Basket/Basket";
import SecondMenuBlock from "./SecondMenuBlock/SecondMenuBlock";
import ContactInformation from "./ContactInformation/ContactInformation";

function SecondMenu() {
  return (
      <div className="second-menu">
          <SecondMenuBlock/>
          <ContactInformation/>
          <Basket/>
      </div>
  );
}

export default SecondMenu;
