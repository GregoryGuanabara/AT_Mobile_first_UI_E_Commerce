import styles from './CardProductRel.module.css';

export default function CardProductRel({ name, imgPath, price }) {
  return (
    <div>
      <div>
        <img className={styles["img-prod-rel"]} src={imgPath} alt="Imagem do produto" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>R$: {price}</p>
      </div>
    </div>
  );
}