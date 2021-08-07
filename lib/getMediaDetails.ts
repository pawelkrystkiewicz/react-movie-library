import { QueryFunctionContext } from 'react-query'
import { Config } from '../models/common'
import { OMDBAPIError, OMDBAPISuccessDetails } from '../models/omdb'
import config from '../utils/config'

export const createMediaDetailsQueryURL = (
  { proxyUrl, omdbApi }: Config,
  id: string
): string =>
  `${proxyUrl}${omdbApi.base}${omdbApi.details}`.replace('{{id}}', id)

export const getDetails =
  (id: string) =>
  async ({}: QueryFunctionContext): Promise<OMDBAPISuccessDetails> => {
    try {
      const url = createMediaDetailsQueryURL(config, id)

      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const json: OMDBAPISuccessDetails | OMDBAPIError = await response.json()

      if (json.Response === 'False') {
        throw json.Error
      }

      return json
    } catch (error) {
      throw error
    }
  }
