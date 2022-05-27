// import Image from "next/image";
import styles from "../styles/Article.module.css";
// import data from "../utils/data";

const Article = ({ data, product, image, name, description, price }) => {
  const src = image;
  return (
    <a className={styles.productLink} href="/">
      <article className={styles.article}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              // loader={myLoader}
              src={src}
              alt="Picture of the product"
            />
          </div>
          <h3 className={styles.productName}>{name}</h3>
          <h3 className={styles.prDescription}>{description}</h3>
          <h4 className={styles.Price}>{price}$</h4>
        </div>
      </article>
    </a>
  );
};

export default Article;
