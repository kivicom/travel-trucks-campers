import { useSelector } from 'react-redux';
import { selectSelectedCamper } from '../../redux/campers/selectors';
import { handleValue, formatCamelCase } from '../../utils/formatters';
import styles from './VehicleDetails.module.css';

const VehicleDetails = () => {
  const camper = useSelector(selectSelectedCamper);

  if (!camper) {
    return <p className={styles.noData}>No vehicle details available.</p>;
  }

  const details = [
    { label: 'Form', value: formatCamelCase(camper.form) },
    { label: 'Length', value: handleValue(camper.length) },
    { label: 'Width', value: handleValue(camper.width) },
    { label: 'Height', value: handleValue(camper.height) },
    { label: 'Tank', value: handleValue(camper.tank) },
    { label: 'Consumption', value: camper.consumption },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Vehicle details</h3>
      <hr className={styles.line} />
      <ul className={styles.list}>
        {details.map(({ label, value }, index) => (
          <li key={index} className={styles.item}>
            <p>{label}</p>
            <p className={styles.value}>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleDetails;
