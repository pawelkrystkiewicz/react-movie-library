import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { getMedia } from '../lib/getMedia'
import { InfinitePage } from '../models/common'
import { ListedResults } from './ListedResults'
import { Spin, BackTop } from 'antd'
import { Alert } from 'antd'
export interface DataProviderProps {
  searchPhrase: string
}

export const DataProvider = ({
  searchPhrase,
}: DataProviderProps): JSX.Element => {
  const getMediaQuery = getMedia(searchPhrase)

  const { data, error, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery<InfinitePage, Error>(
      ['search', searchPhrase],
      getMediaQuery,
      {
        getNextPageParam: (lastPage: InfinitePage) => lastPage.nextCursor,
      }
    )

  return (
    <>
      {isError && (
        <div className="box-margin">
          <Alert
            message="Error"
            description={error ?? 'An error occurred :/'}
            showIcon
            type="error"
            closable
          />
        </div>
      )}
      {!isLoading && !isError && (
        <>
          <ListedResults
            fetchMore={fetchNextPage}
            pages={data?.pages}
            hasNextPage={hasNextPage}
          />
          <BackTop />
        </>
      )}
      {isLoading && (
        <div className="center">
          <Spin size="large" />
        </div>
      )}
    </>
  )
}
