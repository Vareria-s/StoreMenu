import './../../../../App.css';
import ws from "./../../../../img/ws.png"
import telegram from "./../../../../img/telegram.png"

function ContactInformation() {
  return (
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
  );
}

export default ContactInformation;
