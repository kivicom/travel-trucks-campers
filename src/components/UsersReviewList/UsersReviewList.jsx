import { useSelector } from 'react-redux';
import { selectSelectedCamper } from '../../redux/campers/selectors';
import UsersReview from '../UsersReview/UsersReview';
import styles from './UsersReviewList.module.css';

const ReviewList = () => {
  const camper = useSelector(selectSelectedCamper);
  const reviews = camper ? camper.reviews : [];

  return (
    <ul className={styles.list}>
      <UsersReview reviews={reviews} />
    </ul>
  );
};
export default ReviewList;
