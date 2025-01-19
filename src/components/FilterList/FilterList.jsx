import EquipmentFilterItem from '../EquipmentFilterItem/EquipmentFilterItem';
import TypeFilterItem from '../TypeFilterItem/TypeFilterItem';

import styles from './FilterList.module.css';

const FilterList = ({ filterData, customClass, type, onChange }) => {
  return (
    <ul className={styles.list}>
      {filterData.map((filter, index) =>
        type === 'checkbox' ? (
          <EquipmentFilterItem
            key={index}
            feature={filter}
            customClass={customClass}
            onChange={onChange}
          />
        ) : (
          <TypeFilterItem
            key={index}
            feature={filter}
            customClass={customClass}
            onChange={onChange}
          />
        )
      )}
    </ul>
  );
};
export default FilterList;
