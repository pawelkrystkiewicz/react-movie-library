export type OMDBAPISuccess = {
  Search: OMDBRecord[]
  totalResults: string
  Response: 'True'
}

export type OMDBAPISuccessDetails = {
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings: Ratings[]
  Released: string
  Runtime: string
  Title: string
  Type: string
  Website: string
  Writer: string
  Year: string
  imdbID: string
  imdbRating: string
  imdbVotes: string
  Response: 'True'
}
export type Ratings = {
  Source: string
  Value: string
}

export type OMDBAPIError = {
  Response: 'False'
  Error: string
}

export type OMDBRecord = {
  Title: string
  Year: string
  imdbID: string
  Type: OMDBRecordType
  Poster: string
}

export type OMDBRecordType = 'movie' | 'series' | 'episode'

export type OMDBResult = OMDBAPISuccess | OMDBAPIError
