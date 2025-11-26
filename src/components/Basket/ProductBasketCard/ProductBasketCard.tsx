import { useDispatch, useSelector } from "react-redux";

import { type RootState } from "../../../app/store";
import {
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} from "../../../features/cart/cartSlice";
import type { Product } from "../../../types";
import style from "./ProductBasketCard.module.css";
import PlusSvg from "../../../images/plus.svg?react";
import MinusSvg from "../../../images/minus.svg?react";
import BucketSvg from "../../../images/bucket.svg?react";

interface ProductBasketCardProps {
  product: Product;
}

export const ProductBasketCard = ({ product }: ProductBasketCardProps) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const quantity = cartItem?.quantity || 0;

  return (
    <div className={style.product__container}>
      <div className={style.product__info}>
        <img
          className={style.product__image}
          src={product.image}
          alt="image"
        />
        <h3 className={style.product__name}>{product.name}</h3>
      </div>
      <p className={style.product__price}>{product.price} $</p>
      <div className={style.product__quantityControl}>
        <button
          aria-label="Уменьшить количество"
          disabled={quantity <= 1}
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
      </div>
      <p className={style.product__finalPrice}>{product?.price * quantity} $</p>
      <button
        aria-label={`Удалить ${product.name} из корзины`}
        className={style.product__removeButton}
        onClick={() => dispatch(removeFromCart(product.id))}
      >
        <BucketSvg className={style.product__productSvg} />
      </button>
    </div>
  );
};
