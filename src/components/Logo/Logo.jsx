import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logo from '../../assets/images/logo.svg';

const Logo = () => {
  return (
    <>
      <Link className={styles.logo} to="/">
        <img src={logo} width="136" height="15" alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
