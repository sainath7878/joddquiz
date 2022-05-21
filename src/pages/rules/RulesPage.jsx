import styles from "./rulesPage.module.css";
import { v4 as uuid } from "uuid";
import { FaHandPointRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDocumentTitle } from "hooks";

function RulesPage() {
  const rulesData = [
    { _id: uuid(), rule: "There will be 5 questions." },
    { _id: uuid(), rule: "Each question will have one correct answer." },
    { _id: uuid(), rule: "Each correct answer scores 10 Points" },
    { _id: uuid(), rule: "Score more than 70% to receive a gift!" },
  ];

  const { quizid } = useParams();
  useDocumentTitle("Rules");

  return (
    <div className={styles.rulesContainer}>
      <h1 className="fs-xl text-align-center">Rules to Follow</h1>
      <ul className={styles.rulesList}>
        {rulesData.map((rules) => {
          return (
            <li key={rules._id} className={styles.listItem}>
              <FaHandPointRight className={styles.icon} />
              {rules.rule}
            </li>
          );
        })}
      </ul>
      <Link to={`/questions/${quizid}/${0}`}>
        <button className="btn btn-secondary fs-m">Play Now</button>
      </Link>
    </div>
  );
}

export { RulesPage };
