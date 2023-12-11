import CardProductRel from '../card/CardProductRel';
import styles from './ProductRelList.module.css';

export default function ProductRelList({ products }) {
  return (
    <div>
      <h2>Outros usuários compraram:</h2>
      <ul className={styles["ul-products"]}>
        {products.map((product) => (
          <li className={styles["li-products"]} key={product.id}>
            <CardProductRel {...product} />
          </li>
        ))}
      </ul>
    </div >
  )
};