import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXl_zkdU92_MYc2tqty6pIjvG4JMAtJoQ5yA0dE4UfbS2R5l-RUiMczSNtQ1OAKcv-ZU&usqp=CAU"
          alt="Amazon-logo"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__SearchIcon" />
      </div>

      <div className="header__nav">
        <div className="header_option">
          <span className="header_optionOne">Hello Guest</span>
          <span className="header_optionTwo">Sigh In</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
        <div>
          <Link to="/checkOut">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionTwo header__basketCount">0</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
