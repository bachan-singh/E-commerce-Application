import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import styles from './Header.module.css';
import { FaCartShopping } from "react-icons/fa6";
// import { useCart } from '../../hooks/useCart';

const Header = () => {
  // const { cartItemCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.toolbar}>
        <button className={styles.menuButton} aria-label="menu">
          {/* <Menu /> */}
        </button>
        
        <Logo className={styles.logo} />
        
        <nav className={styles.nav}>
          <Link to="/shop" className={styles.navLink}>Shop</Link>
          <Link to="/collections" className={styles.navLink}>Collections</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
        </nav>
        
        <div className={styles.actions}>
          <Link to="/account" className={styles.iconButton} aria-label="account">
            {/* <Person /> */}2
          </Link>
          <Link to="/cart" className={styles.iconButton} aria-label="cart">
            <div className={styles.cartBadge}>
              {/* <ShoppingBag /> */} <FaCartShopping />
              {/* {cartItemCount > 0 && (
                <span className={styles.badge}>1 {cartItemCount}</span>
              )} */}
                <span className={styles.badge}>1</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;