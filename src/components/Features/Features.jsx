import { useSelector } from 'react-redux';

import FeatureDetails from '../FeatureDetails/FeatureDetails';
import { selectLoading } from '../../redux/campers/selectors';
import Loader from '../Loader/Loader';
import styles from './Features.module.css';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import BookingForm from '../BookingForm/BookingForm';

const Features = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.features_wrap}>
          <FeatureDetails />
          <VehicleDetails />
        </div>
      )}

      <BookingForm />
    </>
  );
};
export default Features;
