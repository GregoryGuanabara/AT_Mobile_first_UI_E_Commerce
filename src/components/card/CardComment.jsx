import styles from './CardComment.module.css'

export default function CardComment({ name, date, comment, score }) {
  const formatedDate = new Date(date).toLocaleDateString('pt-Br', {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).replaceAll(",", "");

  return (
    <div className={styles["card-comentario"]}>
      <div className={styles["card-comentario-header"]}>
        <div className={styles["card-comentario-info"]}>
          <h2>{score} / 5.0</h2>
          <h3>{name}</h3>
          <p>{formatedDate}</p>
        </div>
      </div>
      <div className="card-comentario-body">
        <p>{comment}</p>
      </div>
    </div>
  );
};