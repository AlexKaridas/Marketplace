import styles from "./Article.module.scss";
import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import useImages from "../../hooks/useImages";

const Article = () => {
  const [products, setProducts] = useState();
  const [productImages, setProductImages] = useState();

  useEffect(() => {
    (async () => {
      const prods = await useProducts();
      setProducts(prods);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const images = await useImages();
      setProductImages(images);
    })();
  }, []);

  console.log(productImages);

  return (
    <a className={styles.productLink} href="/">
      {products?.map((product, index) => (
        <article className={styles.article} key={index}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src={
                  "https://jmvvsdqulfdwwqrtefry.supabase.co/storage/v1/object/sign/product-images/nft1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0LWltYWdlcy9uZnQxLnBuZyIsImlhdCI6MTY1NDE3NDY5MSwiZXhwIjoxOTY5NTM0NjkxfQ.wmPC7yMJCh2bv4QUyaNFZ8zt8ysPjLhgr73FknowrwE"
                }
                alt="Picture of the product"
              />
            </div>
            <h3 className={styles.productName}>{product.productname}</h3>
            <h3 className={styles.prDescription}>
              {product.productdescription}
            </h3>
            <h4 className={styles.Price}>{product.productprice}$</h4>
          </div>
        </article>
      ))}
    </a>
  );
};

export default Article;
