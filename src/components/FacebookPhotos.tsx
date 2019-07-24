/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { useFacebookPhotos } from '../utils/query';
import styles from '../styles/components/gallery.module.scss';

const shorterArr = (len: number, arr: any[]) => {
  const newarray = arr;
  newarray.length -= newarray.length - len;
  return newarray;
};

interface GalleryItem {
  src?: string;
  thumbnail?: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  isSelected?: boolean;
  caption?: string;
}

const createGalleryData = (array: any[]) => {
  const formatted: GalleryItem[] = array.map(({ name, webp_images }) => {
    const { source: src, height, width } = webp_images[0];

    const galleryItem: GalleryItem = {
      src,
      thumbnail: src,
      thumbnailHeight: height,
      thumbnailWidth: width,
      isSelected: false,
      caption: name,
    };

    return galleryItem;
  });
  return formatted;
};

const FacebookPhotos = () => {
  const images = shorterArr(5, createGalleryData(useFacebookPhotos()));
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
