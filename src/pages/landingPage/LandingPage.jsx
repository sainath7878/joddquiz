import { CategoryCard } from "components";
import { useFetch } from "hooks/useFetch";
import styles from "./landingPage.module.css";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import { useAuth } from "context/authContext";

function LandingPage() {
  const { quizes } = useFetch("/api/quizzes");
  const {
    authState: { loading },
  } = useAuth();

  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.bannerText}>
          <h1>Are you a gamer? Let's test your gaming Knowledge</h1>
          <a href="#categories">
            <button className="btn btn-secondary fs-m">Explore</button>
          </a>
        </div>
      </div>

      <div className={styles.categoriesContainer} id="categories">
        <h1 className="text-align-center fs-xl">Explore Categories</h1>
        <div className={styles.titleUnderline}></div>

        <div className="loader">
          <BeatLoader
            color="#a40ae0"
            loading={loading}
            css={css}
            height={20}
            width={5}
            margin={3}
            radius={5}
          />
        </div>
        {quizes && (
          <div className={styles.categories}>
            {quizes.length > 0 &&
              quizes.map((category) => (
                <CategoryCard category={category} key={category._id} />
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export { LandingPage };
