import React from 'react';
import { useFacebookPhotos } from '../utils/query';
import styles from '../styles/components/gallery.module.scss';

interface FacebookPhotosProps {
  length?: number | undefined;
}

const FacebookPhotos = ({
  length = undefined,
  images = [],
}: FacebookPhotosProps) => {
  return (
    <div className={styles.gallery}>
      {images.map(({ src, caption }: GalleryItem) => (
        <img src={src} alt={caption} className={styles.img} />
      ))}
    </div>
  );
};

export default FacebookPhotos;
