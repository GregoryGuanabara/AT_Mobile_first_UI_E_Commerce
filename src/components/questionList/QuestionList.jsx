import styles from './QuestionList.module.css';
import CardQuestion from '../card/CardQuestion'

export default function QuestionList({ questions }) {
  return (
    <div>
      <h3>Dúvidas:</h3>
      <ul className={styles["ul-question"]}>
        {questions.map((question) => (
          <li className={styles["li-question"]} key={question.id}>
            <CardQuestion {...question} />
          </li>
        ))}
      </ul>
    </div >)
};