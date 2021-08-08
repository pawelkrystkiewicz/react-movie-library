import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { OMDBAPISuccessDetails } from '../models/omdb'
import config from '../utils/config'

interface DetailsProps {
  data: OMDBAPISuccessDetails
}

export const Details = ({ data }: DetailsProps): JSX.Element => (
  <div className="details">
    <div className="details__title">
      {data.Title} ({data.Year})
    </div>
    <div className="details__poster">
      <Image
        data-testid="poster"
        src={
          data.Poster && data.Poster !== 'N/A'
            ? data.Poster
            : config.imageFallback
        }
        alt={data.Title ?? config.imageAlt}
        height={100}
        width={(100 * 2) / 3}
        layout="responsive"
      />
    </div>
    <div className="details__plot">
      <h3>Plot</h3>
      <p>{data.Plot}...</p>
    </div>
    <div className="details__info">
      <h3>Info</h3>
      <p data-testid="director">Director: {data.Director}</p>
      <p data-testid="stars">Stars: {data.Actors}</p>
      <p data-testid="production">Production: {data.Production}</p>
      <p data-testid="country">Country: {data.Country}</p>
      <p data-testid="language">Language: {data.Language}</p>
      <p data-testid="runtime">Runtime: {data.Runtime}</p>

      <p data-testid="released">
        Released: {data.Released}, on DVD: {data.DVD}
      </p>
      <p data-testid="genre">Genre: {data.Genre}</p>
      <p data-testid="age-restrictions">Age restrictions: {data.Rated}</p>
      <p data-testid="awards">Awards: {data.Awards}</p>
      <p data-testid="box-office">BoxOffice: {data.BoxOffice}</p>

      <span>Ratings</span>
      <ul>
        {data.Ratings.map(({ Source, Value }) => (
          <li key={Source}>
            {Source}: {Value}
          </li>
        ))}
        <li data-testid="imdb-rating">
          IMDBRating: {data.imdbRating} ({data.imdbVotes} votes)
        </li>
      </ul>
      <Link href={`https://www.imdb.com/title/${data.imdbID}`}>
        <a data-testid="imdb-link" target="_blank">
          View on IMDB
        </a>
      </Link>
    </div>
  </div>
)
