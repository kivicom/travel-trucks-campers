import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { selectFavorite } from '../../redux/favorites/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const location = useLocation();
  const favorites = useSelector(selectFavorite);

  const getActiveClass = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  };
  return (
    <>
      <nav className={styles.header_nav}>
        <NavLink className={getActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={getActiveClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
      {location.pathname === '/catalog' && favorites.length > 0 && (
        <FavoriteButton />
      )}
    </>
  );
};

export default Navigation;
