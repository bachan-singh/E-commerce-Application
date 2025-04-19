import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/" className={`${styles.logo} ${className || ''}`}>
      <span className={styles.logoText}>BOK</span>
    </Link>
  );
};

export default Logo;