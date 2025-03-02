import { Link, useLocation } from 'react-router-dom';
import sprite from '../../assets/images/icons.svg';
import styles from './CamperCard.module.css';
import FeatureList from '../FeaturesList/FeaturesList';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
import { selectFavorite } from '../../redux/favorites/selectors';

const CamperCard = ({ camper }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorite);
  const isFavorite = favorites.some(favorite => favorite.id === camper.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  return (
    <li className={styles.camper}>
      <img
        className={styles.img}
        src={camper.gallery[0].thumb}
        width="292px"
        height="320px"
      />
      <div>
        <div className={styles.title_wrap}>
          <h2>{camper.name}</h2>
          <div className={styles.wrap_price}>
            <p>€{camper.price},00</p>
            <button
              onClick={handleFavorite}
              className={
                isFavorite ? `${styles.heart} ${styles.active}` : styles.heart
              }
            >
              <svg width="26" height="24">
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.info_wrap}>
          <div className={styles.rating_wrap}>
            <svg className={styles.star} width="16" height="16">
              <use href={`${sprite}#icon-star`} />
            </svg>
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={styles.location_wrap}>
            <svg className={styles.location} width="16" height="16">
              <use href={`${sprite}#icon-map`} />
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={styles.description}>{camper.description}</p>
        <FeatureList camper={camper} />
        <Link
          className={styles.btn}
          to={`/catalog/${camper.id}`}
          state={location}
        >
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
