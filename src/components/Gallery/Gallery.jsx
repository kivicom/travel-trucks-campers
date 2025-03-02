import { useEffect, useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './Gallery.module.css';

const Gallery = ({ camper }) => {
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  useEffect(() => {
    if (lightboxDisplay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxDisplay]);

  const showImage = image => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = e => {
    e.stopPropagation();
    let currentIndex = camper.gallery.indexOf(imageToShow);
    if (currentIndex >= camper.gallery.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = camper.gallery[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = e => {
    e.stopPropagation();
    let currentIndex = camper.gallery.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let prevImage = camper.gallery[currentIndex - 1];
      setImageToShow(prevImage);
    }
  };

  return (
    <>
      <ul className={styles.gallery}>
        {camper.gallery.map((img, index) => (
          <li key={index}>
            <ImageCard img={img} alt={camper.name} onClick={showImage} />
          </li>
        ))}
      </ul>

      {lightboxDisplay && (
        <div id="lightbox" className={styles.lightbox} onClick={hideLightBox}>
          <button
            className={`${styles.gallery_btn} ${styles.left}`}
            onClick={e => {
              e.stopPropagation();
              showPrev(e);
            }}
          >
            ⭠
          </button>
          <img
            id="lightbox-img"
            className={styles.lightbox_img}
            src={imageToShow.original || imageToShow}
            alt="Lightbox"
          />
          <button
            className={`${styles.gallery_btn} ${styles.right}`}
            onClick={e => {
              e.stopPropagation();
              showNext(e);
            }}
          >
            ⭢
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
