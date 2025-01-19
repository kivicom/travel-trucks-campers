import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectLoading,
  selectSelectedCamper,
} from '../../redux/campers/selectors';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import styles from './CamperPage.module.css';

import Loader from '../../components/Loader/Loader';
import { useEffect } from 'react';
import { getCamper } from '../../redux/campers/operations';
import Container from '../../components/Container/Container';
import CamperDetails from '../../components/CamperDetails/CamperDetails';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCamper(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      navigate('/404', { replace: true });
    }
  }, [error, navigate]);

  const getActiveClass = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && camper && (
        <>
          <CamperDetails camper={camper} />
          <section>
            <Container>
              <ul className={styles.add_info_list}>
                <li>
                  <NavLink className={getActiveClass} to="features">
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink className={getActiveClass} to="reviews">
                    Reviews
                  </NavLink>
                </li>
              </ul>
              <hr className={styles.line} />
              <div className={styles.features}>
                <Outlet />
              </div>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default CamperPage;
