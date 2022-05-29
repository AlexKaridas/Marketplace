import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.titlea} href="/">
        <h1 className={styles.title}>Marketplace</h1>
      </a>
      <div className={styles.navbar}>
        <ul className={styles.nav_links}>
          <li className={styles.header_li}>
            <a href="/About" className={styles.navbar_ul_links}>
              About
            </a>
          </li>
          <li className={styles.header_li}>
            <a href="/" className={styles.navbar_ul_links}>
              Profile
            </a>
          </li>
          <li className={styles.header_li}>
            <a href="/Login" className={styles.navbar_ul_links}>
              Login
            </a>
          </li>
          <li className={styles.header_li}>
            <a href="/" className={styles.navbar_ul_links}>
              Shopping cart
            </a>
          </li>
          <li className={styles.header_li}>
            <a href="/" className={styles.cart}>
              <i class="bi bi-basket"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
