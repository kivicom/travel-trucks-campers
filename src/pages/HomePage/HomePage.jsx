import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import Container from '../../components/Container/Container';

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewNow = () => {
    navigate('/catalog');
  };
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <h1>Campers of your dreams</h1>
          <p className={styles.info}>
            You can find everything you want in our catalog
          </p>
          <button className={styles.button} onClick={handleViewNow}>
            View Now
          </button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
