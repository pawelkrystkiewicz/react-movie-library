import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { getMedia } from '../lib/getMedia'
import { List } from './List'
import { InfinitePage } from '../models/common'



export interface DataProviderProps {
  searchPhrase: string
}

export const DataProvider = ({
  searchPhrase,
}: DataProviderProps): JSX.Element => {
  const getMediaQuery = getMedia(searchPhrase)

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery<InfinitePage, Error>(
    ['search', searchPhrase],
    getMediaQuery,
    {
      getNextPageParam: (lastPage: InfinitePage) => lastPage.nextCursor,
    }
  )

  return (
    <>
      {isError && <p>{error}</p>}
      <List
        fetchMore={fetchNextPage}
        pages={data?.pages || []}
        hasNextPage={hasNextPage}
      />
      {isFetching && !isFetchingNextPage && <div> Fetching...</div>}
      {isLoading && <p>Loading...</p>}
    </>
  )
}
