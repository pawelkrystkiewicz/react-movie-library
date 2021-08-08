import { List, Spin } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { capitalize } from '../lib/capitalize'
import { InfinitePage } from '../models/common'
import config from '../utils/config'

const EndMessage = () => (
  <p className="center-text box-margin" data-testid="empty-data-info">
    {config.contentEndMessage}
  </p>
)

interface ListProps {
  fetchMore: () => Promise<any>
  pages?: InfinitePage[]
  hasNextPage: boolean | undefined
}

const imageRatio = 2 / 3
const imageHeight = 150

export const ListedResults = ({
  fetchMore,
  pages,
  hasNextPage,
}: ListProps): JSX.Element => (
  <InfiniteScroll
    dataLength={pages?.length ?? 0}
    next={fetchMore}
    hasMore={!!hasNextPage}
    loader={
      <div className="center-text">
        <Spin size="large" />
      </div>
    }
    style={{ overflow: 'hidden' }}
    endMessage={<EndMessage />}
  >
    {pages &&
      pages.map((page: InfinitePage, idx: number) => (
        <List
          key={idx}
          itemLayout="horizontal"
          data-testid="list"
          dataSource={page.result.Search}
          renderItem={item => {
            const imgSource =
              item.Poster && item.Poster !== 'N/A'
                ? item.Poster
                : config.imageFallback
            return (
              <List.Item
                extra={
                  <Image
                    src={imgSource}
                    alt={item.Title ?? config.imageAlt}
                    height={imageHeight}
                    width={imageHeight * imageRatio}
                  />
                }
              >
                <List.Item.Meta
                  title={
                    <Link href={`/details?id=${item.imdbID}`} passHref>
                      <a className="bold">{item.Title}</a>
                    </Link>
                  }
                  description={`${capitalize(item.Type)}, ${item.Year}`}
                />
              </List.Item>
            )
          }}
        />
      ))}
  </InfiniteScroll>
)
