import { useDispatch } from 'react-redux';
import CampersList from '../../components/CampersList/CampersList';
import Container from '../../components/Container/Container';
import SideBar from '../../components/SideBar/SideBar';
import styles from './CatalogPage.module.css';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <div className={styles.catalogContainer}>
          <SideBar />
          <CampersList />
        </div>
      </Container>
    </section>
  );
};

export default CatalogPage;
