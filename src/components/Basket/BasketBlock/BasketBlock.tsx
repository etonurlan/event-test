import { useSelector } from "react-redux";

import { type RootState } from "../../../app/store";

import { ProductBasketCard } from "../ProductBasketCard/ProductBasketCard";
import styles from "./BasketBlock.module.css";

export const BasketBlock = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.basketBlock__container}>
      {cartItems.length === 0 ? (
        <p className={styles.basketBlock__empty}>Корзина пуста</p>
      ) : (
        <>
          <div className={styles.basketProductsBlock__container}>
            {cartItems.map((product) => (
              <ProductBasketCard key={product.id} product={product} />
            ))}
          </div>
          <p className={styles.basketProductsBlock__price}>
            СУММА КОРЗИНЫ:&nbsp;
            <span className={styles.basketProductsBlock__priceQuantity}>
              {totalAmount}$
            </span>
          </p>
        </>
      )}
    </div>
  );
};
