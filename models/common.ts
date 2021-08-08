import { OMDBAPISuccess } from './omdb'

export type Config = {
  appName: string
  localStorageObjectName: string
  contentEndMessage: string
  imageAlt: string
  imageFallback: string
}

export type InfinitePage = {
  nextCursor: number | undefined
  result: OMDBAPISuccess & { hasMore: boolean }
}
