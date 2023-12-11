import Button from '../button/Button';
import CommentList from '../commentList/CommentList';
import QuestionList from '../questionList/QuestionList'
import styles from './CardProduct.module.css';

export default function CardProduct({ name, score, price, img, description, vendor, vendor_score, vendor_email, vendor_tel, comments, questions }) {
  return (
    <div className={styles["card"]}>
      <div>
        <img src={img} alt="Imagem do produto" className={styles["card-img-product"]} />
      </div>
      <div className={styles["card-description"]}>
        <h2>{name}</h2>
        <h3>Avaliação: {score}</h3>
        <p>{description}</p>
        <div className={styles["card-description-price-seler"]}>
          <div className={styles["card-description-price-seler-item"]} >
            <h3>Vendido por {vendor}</h3>
            <h4>Avaliação: {vendor_score}</h4>
            <h4>Contato:</h4>
            <h4>Email: {vendor_email}</h4>
            <h4>Telefone: {vendor_tel}</h4>
          </div>
          <div className={styles["card-description-price-seler-item"]} >
            <h1>Preço : R$ {price}</h1>
            <Button>Comprar</Button>
          </div>
          <CommentList comments={comments} />
        </div>
        <QuestionList questions={questions} />
      </div>
    </div >
  )
};
