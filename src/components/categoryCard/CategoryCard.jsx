import styles from "./categoryCard.module.css";

function CategoryCard({category}) {
  const { categoryName, imgSrc } = category;
  return (
    <div className={styles.cardVertical}>
      <div className={styles.overlay}>{categoryName}</div>
      <img
        loading="lazy"
        src={imgSrc}
        alt={categoryName}
        className={styles.categoryImage}
      />
    </div>
  );
}

export { CategoryCard };
