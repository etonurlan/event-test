import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

import style from "./Header.module.css";
import logo_svg from "../../images/logo.svg";
import Catalog from "../../images/catalog.svg?react";
import Basket from "../../images/basket.svg?react";

export const Header = () => {
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header>
      <div className={style.header__container}>
        <Link to="/">
          <img className={style.header__logo} src={logo_svg} alt="logo" />
        </Link>
        <nav className={style.header__nav}>
          <Link to="/">
            <Catalog className={style.header__icon} />
          </Link>
          <Link to="/basket" className={style.header__basketLink}>
            <Basket className={style.header__icon} />
            {totalItems > 0 && (
              <span className={style.header__basketBadge}>
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};
