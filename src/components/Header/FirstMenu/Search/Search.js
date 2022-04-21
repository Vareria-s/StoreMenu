import './../../../../App.css';
import search from "./../../../../img/search.png";

function Search() {
  return (
      <div className="search">
          <input placeholder="Поиск...">
          </input>
          <img src={search} alt="">
          </img>
      </div>
  );
}

export default Search;
