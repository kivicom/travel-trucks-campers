import sprite from '../../assets/images/icons.svg';
import styles from './FeaturesItem.module.css';

const FeaturesItem = ({ feature, customClass }) => {
  return (
    <>
      <svg
        className={customClass ? styles[customClass] : ''}
        width="20"
        height="20"
      >
        <use href={`${sprite}#${feature.icon}`} />
      </svg>
      <p className={styles.name}>{feature.text}</p>
    </>
  );
};
export default FeaturesItem;
