import styles from "./categoryCard.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  const { categoryName, imgSrc, _id } = category;
  return (
    <Link to={`rules/${_id}`}>
      <div className={styles.cardVertical}>
        <div className={styles.overlay}>{categoryName}</div>
        <img
          loading="lazy"
          src={imgSrc}
          alt={categoryName}
          className={styles.categoryImage}
        />
      </div>
    </Link>
  );
}

export { CategoryCard };
