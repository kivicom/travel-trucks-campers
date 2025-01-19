import FilterList from '../FilterList/FilterList';
import styles from './Filter.module.css';

const Filter = ({ title, filterData, type, onChange }) => {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>{title}</h3>
      <hr className={styles.line} />
      <FilterList
        customClass="custom_сlass"
        filterData={filterData}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
