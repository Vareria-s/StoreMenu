import './App.css';
import img from "./img/polygon2.png";
import search from "./img/search.png"
import vector from "./img/vector.png"
import ws from "./img/ws.png"
import telegram from "./img/telegram.png"
import shopping from "./img/shopping-bag.png"
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <div className="Header">
                <div className="first-menu">
                    <div className="languages">
                        <div>ru</div>
                        <img src={img} alt=""/>
                        <ul className="сhange-language">
                            <li>ru</li>
                            <li>en</li>
                        </ul>
                    </div>

                    <div className="first-menu-block">
                        <div className="item">Новости и блог</div>
                        <div className="item">Оплата и доставка</div>
                        <div className="item">Контакты</div>
                        <div className="item">Вакансии</div>
                    </div>
                    <div className="search">
                        <input placeholder="Поиск...">
                        </input>
                        <img src={search} alt="">
                        </img>
                    </div>
                </div>


                <div className="second-menu">
                    <div className="second-menu-block">
                        <div className="item">Каталог
                        </div>
                        <div className="item">
                            Майнинг отель
                            <img src={vector} alt=""/>
                            <ul className="dropdown-menu">
                                <li>Калининская АЭС</li>
                                <li>ПАО “Тулачермет”</li>
                            </ul>
                        </div>
                        <div className="item">
                            Лизинг
                        </div>
                        <div className="item">
                            О компании
                        </div>
                    </div>
                    <div className="contact-information">
                        <div className="telephone">+7 (499) 877-41-45</div>
                        <div className="contact-free">
                           <div className="social-media">
                               <img src={telegram} alt=""/>
                               <img src={ws} alt=""/>
                           </div>
                            <div className="back-call">Заказать звонок</div>
                        </div>
                    </div>
                    <div className="basket">
                        <div className="basket-picture">
                            <img src={shopping} alt=""/>
                            <div className="amount"><p>2</p></div>
                        </div>
                        <div className="basket-text">Корзина</div>
                    </div>
                </div>
            </div>
            <div className="content"></div>
        </div>
      </BrowserRouter>
  );
}

export default App;
