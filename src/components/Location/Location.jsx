import styles from './Location.module.css';
import sprite from '../../assets/images/icons.svg';

const Location = ({ onChange }) => {
  const handleInputChange = event => {
    const value = event.target.value;
    onChange('location', value.trim());
  };

  return (
    <div className={styles.location_wrap}>
      <label className={styles.label} htmlFor="location">
        Location
      </label>
      <input name="location" placeholder="City" onChange={handleInputChange} />
      <svg className={styles.location} width="20" height="20">
        <use href={`${sprite}#icon-map`} />
      </svg>
    </div>
  );
};

export default Location;
