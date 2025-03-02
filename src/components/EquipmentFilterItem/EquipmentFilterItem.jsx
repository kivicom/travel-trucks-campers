import FeaturesItem from '../FeaturesItem/FeaturesItem';
import styles from './EquipmentFilterItem.module.css';

const EquipmentFilterItem = ({ feature, customClass, onChange }) => {
  const handleChange = e => {
    const input = e.target;

    if (input.type === 'radio') {
      onChange(input.name, input.value);
    }

    if (input.type === 'checkbox') {
      onChange(input.name, input.checked);
    }
  };

  return (
    <li className={styles.features}>
      <label className={styles.btn}>
        {feature.icon === 'icon-diagram' && (
          <input
            type="radio"
            name="transmission"
            value={feature.query}
            onChange={handleChange}
          />
        )}
        {feature.icon === 'icon-petrol' && (
          <input
            type="radio"
            name="engine"
            value={feature.query}
            onChange={handleChange}
          />
        )}
        {feature.icon !== 'icon-diagram' && feature.icon !== 'icon-petrol' && (
          <input
            className={styles.checkebox}
            type="checkbox"
            name={feature.query}
            onChange={handleChange}
          />
        )}
        <span className={styles.span}>
          <FeaturesItem feature={feature} customClass={customClass} />
        </span>
      </label>
    </li>
  );
};

export default EquipmentFilterItem;
