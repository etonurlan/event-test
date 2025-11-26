import { useState } from "react";

import styles from "./ProductsBlock.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useCatalog } from "../../../hooks/useCatalog";

export const ProductsBlock = () => {
  const { data, isLoading, isError, error } = useCatalog();
  const [visibleCount, setVisibleCount] = useState(9);

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка: {error.message}</p>;

  const items = data?.items || [];
  const visibleItems = items.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const hasMore = visibleCount < items.length;

  return (
    <>
      <div className={styles.products}>
        {visibleItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {hasMore && (
        <div className={styles.loadMore}>
          <button onClick={handleLoadMore} className={styles.loadMoreButton}>
            Показать ещё
          </button>
        </div>
      )}
    </>
  );
};
