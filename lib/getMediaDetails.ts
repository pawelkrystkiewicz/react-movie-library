import { QueryFunctionContext } from 'react-query'
import { OMDBAPISuccess, OMDBResult } from '../models/omdb'
import config from '../utils/config'
import { Config } from '../models/common'

export const createMediaDetailsQueryURL = (
  { proxyUrl, omdbApi }: Config,
  id: string
): string =>
  `${proxyUrl}${omdbApi.base}${omdbApi.details}`.replace('{{id}}', id)

export const getDetails =
  (id: string) =>
  async ({}: QueryFunctionContext): Promise<OMDBAPISuccess> => {
    try {
      const url = createMediaDetailsQueryURL(config, id)

      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const json: OMDBResult = await response.json()

      if (json.Response === 'False') {
        throw json.Error
      }

      return json
    } catch (error) {
      throw error
    }
  }
