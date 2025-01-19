import CampersList from '../../components/CampersList/CampersList';
import Container from '../../components/Container/Container';
import SideBar from '../../components/SideBar/SideBar';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
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
