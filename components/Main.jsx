import styles from "../styles/Home.module.css";
import Article from "./Article.jsx";
import data from "../utils/data";

const Main = () => {
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
};

export default Main;
