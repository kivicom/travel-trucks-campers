import FeaturesItem from '../FeaturesItem/FeaturesItem';
import styles from './TypeFilterItem.module.css';

const TypeFilterItem = ({ feature, customClass, onChange }) => {
  const handleChange = e => {
    const input = e.target;
    onChange(input.name, input.value);
  };

  return (
    <li className={styles.features}>
      <label className={styles.btn}>
        <input
          className={styles.input}
          type="radio"
          name="form"
          value={feature.query}
          onChange={handleChange}
        />
        <span className={styles.span}>
          <FeaturesItem feature={feature} customClass={customClass} />
        </span>
      </label>
    </li>
  );
};

export default TypeFilterItem;
