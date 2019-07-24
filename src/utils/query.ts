/* eslint-disable @typescript-eslint/camelcase */
import { useStaticQuery, graphql } from 'gatsby';

// ! INDEX PAGE QUERY

export const useIndexPageData = () => {
  const {
    allCheesecakeMenu,
    allCheesecakeEvent,
    file,
  } = useStaticQuery(graphql`
    query {
      # Cheesecake Menu
      allCheesecakeMenu {
        edges {
          node {
            id
            item
            flavors {
              color
              flavor
            }
          }
        }
      }
      # CheeseCake Events
      allCheesecakeEvent {
        edges {
          node {
            id
            title
            date
            address {
              city
              state
              street
              zip
            }
          }
        }
      }
      # Main Truck Image
      file(name: { regex: "/truck-main/" }) {
        id
        childImageSharp {
          fluid(jpegProgressive: true, fit: COVER, trim: 1.5) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
      # End
    }
  `);
  return { allCheesecakeEvent, allCheesecakeMenu, file };
};

// ! FACEBOOK PHOTOS FEED

interface WebpImage {
  height: number;
  source: string;
  width: number;
}
interface FbPhoto {
  webp_images: WebpImage[];
}

interface WebpImage {
  source: string;
  height: number;
  width: number;
}
interface Album {
  name: string;
  webp_images: WebpImage[];
}

interface FbAlbum {
  photos: {
    data: Album[];
  };
}

interface FacebookPhotosFeedQuery {
  facebook: {
    albums: {
      data: FbAlbum[];
    };
  };
}

export const useFacebookPhotos = (length?: number | undefined) => {
  const shorterArr = (len: number, arr: any[]) => {
    const newarray = arr;
    newarray.length -= newarray.length - len;
    return newarray;
  };

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

  const { facebook }: FacebookPhotosFeedQuery = useStaticQuery(
    graphql`
      query facebookPhotosFeed {
        facebook(
          albums: {
            data: {
              elemMatch: {
                photos: {
                  data: {
                    elemMatch: {
                      album: { name: { regex: "/Mobile Uploads/" } }
                    }
                  }
                }
              }
            }
          }
        ) {
          albums {
            data {
              photos {
                data {
                  name

                  webp_images {
                    source
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    `,
  );

  const { data } = facebook.albums.data[0].photos;
  const arrayLength = !length ? data : shorterArr(length, data);

  return createGalleryData(arrayLength);
};

export default { useFacebookPhotos };
