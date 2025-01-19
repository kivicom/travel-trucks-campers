import { useSelector } from 'react-redux';
import { selectSelectedCamper } from '../../redux/campers/selectors';
import styles from './FeatureDetails.module.css';
import FeatureList from '../FeaturesList/FeaturesList';

const FeatureDetails = () => {
  const camper = useSelector(selectSelectedCamper);

  return (
    <div>
      <FeatureList camper={camper} customClass={styles.custom_features_list} />
    </div>
  );
};

export default FeatureDetails;
