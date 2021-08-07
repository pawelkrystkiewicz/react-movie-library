import { Config } from '../models/common'

const config: Config = {
  appName: 'Movie Library',
  localStorageObjectName: 'favorites',
  contentEndMessage: 'Nothing to display :/',
  imageAlt: 'This would be a movie but something went wrong :/',
  imageFallback: '/images/poster-fallback.png',
  proxyUrl: 'https://thingproxy.freeboard.io/fetch/',
  omdbApi: {
    base: `https://www.omdbapi.com/?apikey=18c7c06e`,
    search: `&type=movie&page={{page}}&s={{searchPhrase}}`,
    details: `&i={{id}}`,
  },
}

export default config
