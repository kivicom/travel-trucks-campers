import sprite from '../../assets/images/icons.svg';
import styles from './UsersReview.module.css';

const UsersReview = ({ reviews }) => {
  return (
    <>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <li key={index}>
            <div className={styles.wrap}>
              <p className={styles.avatar}>{review.reviewer_name[0]}</p>
              <div className={styles.info}>
                <p>{review.reviewer_name}</p>
                <ul className={styles.stars_list}>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <li key={i}>
                        <svg
                          width="16"
                          height="16"
                          style={{
                            fill:
                              i < review.reviewer_rating
                                ? 'var(--rating)'
                                : 'var(--badges)',
                          }}
                        >
                          <use href={`${sprite}#icon-star`} />
                        </svg>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <p className={styles.description}>{review.comment}</p>
          </li>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </>
  );
};

export default UsersReview;
