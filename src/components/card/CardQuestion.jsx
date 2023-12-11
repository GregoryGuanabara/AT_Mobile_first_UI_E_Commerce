import styles from './CardQuestion.module.css';

export default function CardQuestion({ name, date, question, answer }) {
  const formatedDate = new Date(date).toLocaleDateString('pt-Br', {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).replaceAll(",", "");

  return (
    <div>
      <div>
        <div>
          <h3>{name}</h3>
          <p>{formatedDate}</p>
        </div>
      </div>
      <div>
        <p>Pergunta: {question}</p>
      </div>
      <div className={styles["card-question-answer"]}>
        <p>Resposta: {answer}</p>
      </div>
    </div>)
}


