import './../../../../App.css';
import vector from "./../../../../img/vector.png"

function SecondMenuBlock() {
  return (
      <div className="second-menu-block">
          <div className="item">Каталог</div>
          <div className="item-active">Майнинг отель
              <img src={vector} alt=""/>
              <ul className="dropdown-menu">
                  <li>Калининская АЭС</li>
                  <li>ПАО “Тулачермет”</li>
              </ul>
          </div>
          <div className="item">Лизинг</div>
          <div className="item">О компании</div>
      </div>
  );
}

export default SecondMenuBlock;
