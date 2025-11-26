import { useDispatch, useSelector } from "react-redux";

import { type RootState } from "../../../app/store";
import {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} from "../../../features/cart/cartSlice";
import style from "./ProductCard.module.css";
import type { Product } from "../../../types";
import PlusSvg from "../../../images/plus.svg?react";
import MinusSvg from "../../../images/minus.svg?react";
import BucketSvg from "../../../images/bucket.svg?react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const quantity = cartItem?.quantity || 0;

  return (
    <div className={style.product__container}>
      <img className={style.product__image} src={product.image} alt="image" />
      <div className={style.product__info}>
        <h3 className={style.product__name}>{product.name}</h3>
        <div className={style.product__priceBlock}>
          <p className={style.product__price}>{product.price} $</p>
          {quantity === 0 ? (
            <button
                aria-label={`Добавить ${product.name} в корзину`}
              className={style.product__addButton}
              onClick={handleAddToCart}
            >
              <PlusSvg className={style.product__productSvg} />
            </button>
          ) : (
            <div className={style.product__quantityControl}>
              <button
                aria-label="Уменьшить количество"
                className={style.product__quantityButton}
                onClick={() => dispatch(decrementQuantity(product.id))}
              >
                <MinusSvg className={style.product__productSvg} />
              </button>
              <span className={style.product__quantityValue}>{quantity}</span>
              <button
                aria-label="Увеличить количество"
                className={style.product__quantityButton}
                onClick={() => dispatch(incrementQuantity(product.id))}
              >
                <PlusSvg className={style.product__productSvg} />
              </button>
              <button
                aria-label={`Удалить ${product.name} из корзины`}
                className={style.product__removeButton}
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                <BucketSvg className={style.product__productSvg} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
