import { Config } from '../models/common'

const config: Config = {
  appName: 'Movie Library',
  localStorageObjectName: 'favorites',
  contentEndMessage: 'Nothing to display :/',
  imageAlt: 'This would be a movie but something went wrong :/',
  imageFallback: '/images/poster-fallback.png',
  omdbApi: {
    base: `/api`,
    search: `?apikey=18c7c06e&type=movie&page={{page}}&s={{searchPhrase}}`,
    details: `?apikey=18c7c06e&i={{id}}`,
  },
}

export default config
