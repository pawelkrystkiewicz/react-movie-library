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
    <div className="details__poster">
      <Image
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
      <p>Director: {data.Director}</p>
      <p>Stars: {data.Actors}</p>
      <p>Production: {data.Production}</p>
      <p>Country: {data.Country}</p>
      <p>Language: {data.Language}</p>
      <p>Runtime: {data.Runtime}</p>

      <p>
        Released: {data.Released}, on DVD: {data.DVD}
      </p>
      <p>Genre: {data.Genre}</p>
      <p>Age restrictions: {data.Rated}</p>
      <p>Awards: {data.Awards}</p>
      <p>BoxOffice: {data.BoxOffice}</p>

      <span>Ratings</span>
      <ul>
        {data.Ratings.map(({ Source, Value }) => (
          <li key={Source}>
            {Source}: {Value}
          </li>
        ))}
        <li>
          IMDBRating: {data.imdbRating} ({data.imdbVotes} votes)
        </li>
      </ul>
      <Link href={`https://www.imdb.com/title/${data.imdbID}`}>
        <a target="_blank">View on IMDB</a>
      </Link>
    </div>
  </div>
)
