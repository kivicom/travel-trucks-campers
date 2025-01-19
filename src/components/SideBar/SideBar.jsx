import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilter,
  changeIsFiltered,
  resetFilter,
} from '../../redux/filters/slice';
import { fetchCampers } from '../../redux/campers/operations';
import Filter from '../Filter/Filter';
import Location from '../Location/Location';
import styles from './SideBar.module.css';
import vehicleData from '../../data/vehicle.json';
import typeData from '../../data/type.json';
import Button from '../Button/Button';
import { selectFilters, selectIsFiltered } from '../../redux/filters/selectors';
import { changePage, cleanItems } from '../../redux/campers/slice';
import { closeFavorite } from '../../redux/favorites/slice';
import { selectIsOpen } from '../../redux/favorites/selectors';
import toast, { Toaster } from 'react-hot-toast';

const SideBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const isFiltered = useSelector(selectIsFiltered);
  const isOpen = useSelector(selectIsOpen);

  const notify = () => {
    toast.error('Please select at least one filter option.', {
      duration: 3000,
      position: 'top-left',
    });
  };

  const handleFilterChange = (name, value) => {
    dispatch(changeFilter({ name, value }));
  };

  const isFormEmpty = form => {
    return (
      !form.location.value &&
      !Array.from(form).some(
        input =>
          (input.type === 'checkbox' || input.type === 'radio') && input.checked
      )
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.elements;

    if (isFormEmpty(form)) {
      notify();
      return;
    }

    dispatch(changePage(1));
    dispatch(cleanItems());
    dispatch(closeFavorite());
    dispatch(fetchCampers(filters));
    dispatch(changeIsFiltered());
  };

  const handleReset = e => {
    const form = e.target.closest('form');
    if (form) {
      Array.from(form.elements).forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = false;
        } else if (input.type === 'text') {
          input.value = '';
        }
      });
    }

    dispatch(resetFilter());
    dispatch(cleanItems());
    dispatch(closeFavorite());
    dispatch(fetchCampers());
  };

  return (
    <aside className={styles.aside}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Location onChange={handleFilterChange} />
        <div className={styles.filters}>
          <p className={styles.title}>Filters</p>
          <Filter
            title="Vehicle equipment"
            filterData={vehicleData}
            type="checkbox"
            onChange={handleFilterChange}
          />
          <Filter
            title="Vehicle type"
            filterData={typeData}
            type="radio"
            onChange={handleFilterChange}
          />
        </div>
        <ul className={styles.btn_list}>
          <li>
            <Button text="Search" />
          </li>

          {isFiltered && !isOpen && (
            <li>
              <Button text="Reset" type="button" onClick={handleReset} />
            </li>
          )}
        </ul>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </aside>
  );
};

export default SideBar;
