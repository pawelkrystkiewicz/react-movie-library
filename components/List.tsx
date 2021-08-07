import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import config from '../utils/config'
import { OMDBRecord } from '../models/omdb'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'
import { InfinitePage } from '../models/common'

const EndMessage = () => (
  <p className="content--centered">{config.contentEndMessage}</p>
)

interface ListProps {
  fetchMore: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<InfinitePage, Error>>
  pages: InfinitePage[]
  hasNextPage: boolean | undefined
}

export const List = ({
  fetchMore,
  pages,
  hasNextPage,
}: ListProps): JSX.Element => (
  <div>
    <div>
      <InfiniteScroll
        dataLength={pages.length}
        next={fetchMore}
        hasMore={!!hasNextPage}
        loader={<p>Loading...</p>}
        endMessage={<EndMessage />}
      >
        {pages &&
          pages.map((page: InfinitePage, idx: number) => (
            <React.Fragment key={idx}>
              {page.result.Search &&
                page.result.Search.map((record: OMDBRecord) => (
                  <div key={record.imdbID}>{JSON.stringify(record)}</div>
                ))}
            </React.Fragment>
          ))}
      </InfiniteScroll>
    </div>
  </div>
)
