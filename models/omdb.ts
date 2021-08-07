export type OMDBAPISuccess = {
  Search: OMDBRecord[]
  totalResults: string
  Response: 'True'
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