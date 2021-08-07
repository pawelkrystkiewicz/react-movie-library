import config from '../utils/config'
import { OMDBResult } from '../models/omdb'
import { QueryFunctionContext } from 'react-query'
import { Config, InfinitePage } from '../models/common'

export const createMediaQueryURL = (
  { proxyUrl, omdbApi }: Config,
  searchPhrase: string,
  page: number
): string =>
  `${proxyUrl}${omdbApi.base}${omdbApi.search}`
    .replace('{{searchPhrase}}', searchPhrase.split(' ').join('+'))
    .replace('{{page}}', page.toString())

export const getMedia =
  (searchPhrase: string) =>
  async ({ pageParam = 1 }: QueryFunctionContext): Promise<InfinitePage> => {
    try {
      const url = createMediaQueryURL(config, searchPhrase, pageParam)

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })

      const json: OMDBResult = await response.json()

      if (json.Response === 'False') {
        throw json.Error
      }

      const nextCursor = pageParam + 1
      const hasMore = Number(json.totalResults) > nextCursor

      return {
        nextCursor,
        result: { ...json, hasMore },
      }
    } catch (error) {
      throw error
    }
  }
