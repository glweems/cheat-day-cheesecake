/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { useFacebookPhotos } from '../utils/query';
import styles from '../styles/components/gallery.module.scss';

interface FacebookPhotosProps {
  length?: number | undefined;
}

const FacebookPhotos = ({ length = undefined }: FacebookPhotosProps) => {
  const images = useFacebookPhotos(length);

  return (
    <div className={styles.miniGallery}>
      {images.map(({ src, caption }: GalleryItem) => (
        <img
          key={caption}
          src={src}
          alt={caption}
          className={styles.galleryItem}
        />
      ))}
    </div>
  );
};

export default FacebookPhotos;
