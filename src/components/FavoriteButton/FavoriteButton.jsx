import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../assets/images/icons.svg';
import { selectIsOpen } from '../../redux/favorites/selectors';
import { closeFavorite, openFavorite } from '../../redux/favorites/slice';
import styles from './FavoriteButton.module.css';

const FavoriteButton = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);

  const handleOpen = () => {
    isOpen && dispatch(closeFavorite());
    !isOpen && dispatch(openFavorite());
  };

  return (
    <button
      type="button"
      className={isOpen ? `${styles.favorite_btn} ${styles.btn}` : styles.btn}
      onClick={handleOpen}
    >
      <svg width="26" height="24">
        <use href={`${sprite}#icon-heart`} />
      </svg>
    </button>
  );
};

export default FavoriteButton;
