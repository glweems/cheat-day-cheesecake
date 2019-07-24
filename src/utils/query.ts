/* eslint-disable @typescript-eslint/camelcase */
import { useStaticQuery, graphql } from 'gatsby';

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

export const useFacebookPhotos = () => {
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
  const test = facebook.albums.data[0].photos.data[0].webp_images[0].source;

  return facebook.albums.data[0].photos.data;
};

export default { useFacebookPhotos };
