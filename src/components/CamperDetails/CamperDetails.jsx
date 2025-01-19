import { useSelector } from 'react-redux';
import sprite from '../../assets/images/icons.svg';
import styles from './CamperDetails.module.css';
import { selectLoading } from '../../redux/campers/selectors';
import Loader from '../Loader/Loader';
import Gallery from '../Gallery/Gallery';
import Container from '../Container/Container';

const CamperDetails = ({ camper }) => {
  const isLoading = useSelector(selectLoading);

  if (!camper) {
    return;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={styles.camper}>
      <Container>
        <h2>{camper.name}</h2>
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
        <p className={styles.price}>€{camper.price},00</p>
        <Gallery camper={camper} />

        <p className={styles.description}>{camper.description}</p>
      </Container>
    </section>
  );
};

export default CamperDetails;
