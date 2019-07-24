/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

interface RawHours {
  facebook: {
    hours: {
      tue_1_close: string;
      tue_1_open: string;
      wed_1_close: string;
      wed_1_open: string;
      thu_1_close: string;
      thu_1_open: string;
      fri_1_close: string;
      fri_1_open: string;
      sun_1_close: string;
      sun_1_open: string;
      sat_1_close: string;
      sat_1_open: string;
    };
  };
}

// ! HOURS QUERY
export const useCompanyHours = () => {
  const {
    facebook: { hours },
  }: RawHours = useStaticQuery(graphql`
    query CompanyHours {
      facebook {
        hours {
          tue_1_close
          tue_1_open
          wed_1_close
          wed_1_open
          thu_1_close
          thu_1_open
          fri_1_close
          fri_1_open
          sat_1_close
          sat_1_open
          sun_1_close
          sun_1_open
        }
      }
    }
  `);

  const convertHr = (hr: string): string =>
    `${((Number(hr.split(':')[0]) + 11) % 12) + 1}:${
      Number(hr.split(':')[1]) === 0 ? '00' : Number(hr.split(':')[1])
    } ${Number(hr.split(':')[0]) < 12 ? 'AM' : 'PM'}`;

  const formattedHours = [
    {
      id: 1,
      day: 'Moday',
      open: null,
      close: null,
      hours: 'closed',
    },
    {
      id: 2,
      day: 'Tuesday',
      open: convertHr(hours.tue_1_open),
      close: convertHr(hours.tue_1_close),
      hours: `${convertHr(hours.tue_1_open)} - ${convertHr(
        hours.tue_1_close,
      )} `,
    },
    {
      id: 3,
      day: 'Wednesday',
      open: convertHr(hours.wed_1_open),
      close: convertHr(hours.wed_1_close),
      hours: `${convertHr(hours.wed_1_open)} - ${convertHr(
        hours.wed_1_close,
      )} `,
    },
    {
      id: 4,
      day: 'Thursday',
      open: convertHr(hours.thu_1_open),
      close: convertHr(hours.thu_1_close),
      hours: `${convertHr(hours.thu_1_open)} - ${convertHr(
        hours.thu_1_close,
      )} `,
    },
    {
      id: 5,
      day: 'Friday',
      open: convertHr(hours.fri_1_open),
      close: convertHr(hours.fri_1_close),
      hours: `${convertHr(hours.fri_1_open)} - ${convertHr(
        hours.fri_1_close,
      )} `,
    },
    {
      id: 6,
      day: 'Saturday',
      open: convertHr(hours.sat_1_open),
      close: convertHr(hours.sat_1_close),
      hours: `${convertHr(hours.sat_1_open)} - ${convertHr(
        hours.sat_1_close,
      )} `,
    },
    {
      id: 7,
      day: 'Sunday',
      open: convertHr(hours.sun_1_open),
      close: convertHr(hours.sun_1_close),
      hours: `${convertHr(hours.sun_1_open)} - ${convertHr(
        hours.sun_1_close,
      )} `,
    },
  ];

  return formattedHours;
};

export const useMenuQuery = () => {
  const { allCheesecakeMenu } = useStaticQuery(
    graphql`
      query menuQuery {
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
      }
    `,
  );
  return allCheesecakeMenu;
};

// ! INDEX PAGE QUERY
export const useIndexPageData = () => {
  const data = useStaticQuery(graphql`
    query IndexPageData {
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

  return data;
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
  const { data } = facebook.albums.data[0].photos;
  const arrayLength = !length ? data : shorterArr(length, data);

  return createGalleryData(arrayLength);
};
