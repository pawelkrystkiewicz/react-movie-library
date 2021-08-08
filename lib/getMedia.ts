import { QueryFunctionContext } from 'react-query'
import { InfinitePage } from '../models/common'
import { OMDBResult } from '../models/omdb'

export const getMedia =
  (searchPhrase: string) =>
  async ({ pageParam = 1 }: QueryFunctionContext): Promise<InfinitePage> => {
    try {
      const url = `api/search?type=movie&page=${pageParam}&search=${searchPhrase}`
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
