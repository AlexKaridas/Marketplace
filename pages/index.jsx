import styles from "../components/Index/Index.module.scss";
import data from "../utils/data.js";
import Article from "../components/Article/Article.jsx";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.WelcomeBigger}>
        <section className={styles.Welcome}></section>
        <h1 className={styles.title2}>Marketplace Prime</h1>
      </section>
      <div className={styles.Headings}>
        <div className={styles.categories}>
          <h3>Categories</h3>
          <div className={styles.dropdown}>
            <div className={styles.dArrow}>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className={styles.dropdown_content}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <input type="text" placeholder="Search.."></input>
      </div>
      <section className={styles.Products}>
        {data.products.map((product) => (
          <Article
            key={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
          ></Article>
        ))}
      </section>
    </main>
  );
}
