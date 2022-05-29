import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.Titlea} href="/">
        <h1 className={styles.title}>Marketplace</h1>
      </a>
      <nav className={styles.navbar}>
        <ul className={styles.nav_links}>
          <li className={styles.li}>
            <a href="/About" className={styles.a}>
              About
            </a>
          </li>
          <li className={styles.li}>
            <a href="/" className={styles.a}>
              Profile
            </a>
          </li>
          <li className={styles.li}>
            <a href="/Login" className={styles.a}>
              Login
            </a>
          </li>
          <li className={styles.li}>
            <a href="/" className={styles.a}>
              Shopping cart
            </a>
          </li>
          <li className={styles.li}>
            <a href="/" className={styles.cart}>
              <i class="bi bi-basket"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;