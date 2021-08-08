import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { ListedResults } from '../components/ListedResults'
import { resultPages } from './_fakes/movie-list'

describe('List displaying component <ListedResults/>', () => {
  const fetchMoreMock = async () => {
    return {}
  }

  beforeAll(() =>
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  )

  it('displays provided data', async () => {
    render(
      <ListedResults
        fetchMore={fetchMoreMock}
        pages={resultPages}
        hasNextPage={true}
      />
    )
    const list = screen.getByTestId('list')
    expect(list).toBeDefined()
    expect(list.getElementsByTagName('a')).toHaveLength(4)
    expect(list.getElementsByTagName('img')).toHaveLength(8) //4 x 2 because of images with fallback
  })

  it('displays info text on empty data', async () => {
    render(
      <ListedResults fetchMore={fetchMoreMock} pages={[]} hasNextPage={false} />
    )
    expect(screen.getByTestId('empty-data-info')).toBeDefined()
  })
})
