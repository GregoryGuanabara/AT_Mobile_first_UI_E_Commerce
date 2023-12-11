import styles from "./CommentList.module.css";
import CardComment from "../card/CardComment";

export default function CommentList({ comments }) {
  return (
    <div>
      <h3>Comentários:</h3>
      <ul className={styles["ul-comment"]}>
        {comments.map((comment) => (
          <li className={styles["li-comment"]} key={comment.id}>
            <CardComment {...comment} />
          </li>
        ))}
      </ul>
    </div >
  );
}
