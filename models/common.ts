import { OMDBAPISuccess } from './omdb'

export type Config = {
  appName: string
  localStorageObjectName: string
  contentEndMessage: string
  imageAlt: string
  proxyUrl: string
  omdbApi: {
    base: string
    search: string
    details: string
  }
}

export type InfinitePage = {
  nextCursor: number | undefined
  result: OMDBAPISuccess & { hasMore: boolean }
}
