import { InfinitePage } from '../../models/common'
import { OMDBRecord } from '../../models/omdb'

export const recordsList: OMDBRecord[] = [
  {
    Title: 'Star Wars',
    Year: '1977',
    imdbID: 'sw-id',
    Type: 'movie',
    Poster: '/images/fallback-picure.png',
  },
  {
    Title: 'Matrix',
    Year: '1999',
    imdbID: 'matrix-id',
    Type: 'movie',
    Poster: '/images/fallback-picure.png',
  },
  {
    Title: 'Lord of the Rings: The Fellowship of the Ring',
    Year: '1999',
    imdbID: 'lotr-1-id',
    Type: 'movie',
    Poster: '/images/fallback-picure.png',
  },
  {
    Title: 'Matrix Reloaded',
    Year: '2001',
    imdbID: 'matrix-2-id',
    Type: 'movie',
    Poster: '/images/fallback-picure.png',
  },
]

export const resultPages: InfinitePage[] = [
  {
    nextCursor: 2,
    result: {
      hasMore: true,
      Search: recordsList,
      totalResults: '150',
      Response: 'True',
    },
  },
]
