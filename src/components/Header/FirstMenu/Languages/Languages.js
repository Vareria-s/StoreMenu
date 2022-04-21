import './../../../../App.css';
import img from "./../../../../img/polygon2.png";

function Languages() {
  return (
      <div className="languages">
          <div>ru</div>
          <img src={img} alt=""/>
          <ul className="сhange-language">
              <li>ru</li>
              <li>en</li>
          </ul>
      </div>
  );
}

export default Languages;
