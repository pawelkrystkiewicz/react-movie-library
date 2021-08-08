import { QueryFunctionContext } from 'react-query'
import { OMDBAPIError, OMDBAPISuccessDetails } from '../models/omdb'

export const getDetails =
  (id: string) =>
  async ({}: QueryFunctionContext): Promise<OMDBAPISuccessDetails> => {
    try {
      const url = `api/details?id=${id}`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
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
