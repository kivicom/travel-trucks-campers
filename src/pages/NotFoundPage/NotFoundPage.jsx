import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import style from '../HomePage/HomePage.module.css';

const NotFoundPage = () => {
  return (
    <section className={styles.not_found}>
      <div className={styles.wrap}>
        <h2 className={style.title}>Oops! Page Not Found</h2>
        <p className={style.info}>
          It looks like the page you're looking for doesn't exist or may have
          been moved.
        </p>
        <Link className={style.btn} to="/">
          Go back to the Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
