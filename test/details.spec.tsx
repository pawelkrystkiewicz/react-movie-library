import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Details } from '../components/Details'
import { fakeMovieData } from './_fakes/movie-details'

describe('Movie details displaying component <Details/>', () => {
  it('display provided data', async () => {
    render(<Details data={fakeMovieData} />)

    const poster = screen.getByTestId('poster')
    expect(poster).toBeDefined()
    expect(poster).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
    //this is processed image as base64 that we provided in data
    expect(screen.getByTestId('director')).toHaveTextContent(
      'Director: George Lucas'
    )
    expect(screen.getByTestId('stars')).toHaveTextContent(
      'Stars: Mark Hamill, Harrison Ford, Carrie Fisher'
    )
    expect(screen.getByTestId('production')).toHaveTextContent(
      'Production: Lucasfilm Ltd.'
    )
    expect(screen.getByTestId('country')).toHaveTextContent(
      'United States, United Kingdom'
    )
    expect(screen.getByTestId('language')).toHaveTextContent(
      'Language: English'
    )
    expect(screen.getByTestId('runtime')).toHaveTextContent('Runtime: 121 min')
    expect(screen.getByTestId('released')).toHaveTextContent(
      'Released: 25 May 1977, on DVD: 10 Oct 2016'
    )
    expect(screen.getByTestId('genre')).toHaveTextContent(
      'Genre: Action, Adventure, Fantasy'
    )
    expect(screen.getByTestId('age-restrictions')).toHaveTextContent(
      'Age restrictions: PG'
    )
    expect(screen.getByTestId('awards')).toHaveTextContent(
      'Awards: Won 7 Oscars. 63 wins & 29 nominations total'
    )
    expect(screen.getByTestId('box-office')).toHaveTextContent(
      'BoxOffice: $460,998,507'
    )
    expect(screen.getByTestId('imdb-rating')).toHaveTextContent(
      'IMDBRating: 8.6 (1,259,440 votes)'
    )
    expect(screen.getByTestId('imdb-link')).toHaveAttribute(
      'href',
      'https://www.imdb.com/title/tt0076759'
    )
    //this works because next's Link is passing href to <a> tag
  })
  ;[
    {
      description: 'uses fallback picture if Poster is not provided',
      data: { ...fakeMovieData, Poster: '' },
    },
    {
      description: 'uses fallback picture if Poster is "N/A"',
      data: { ...fakeMovieData, Poster: 'N/A' },
    },
  ].forEach(({ description, data }) =>
    it(description, async () => {
      render(<Details data={data} />)

      const poster = screen.getByTestId('poster')
      expect(poster).toBeDefined()
      expect(poster).toHaveAttribute(
        'src',
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      )
    })
  )
})
