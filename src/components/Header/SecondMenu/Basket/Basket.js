import './../../../../App.css';
import shopping from "./../../../../img/shopping-bag.png"

function Basket() {
  return (
      <div className="basket">
          <div className="basket-picture">
              <img src={shopping} alt=""/>
              <div className="amount"><p>2</p></div>
          </div>
          <div className="basket-text">Корзина</div>
      </div>
  );
}

export default Basket;
