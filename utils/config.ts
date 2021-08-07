import { Config } from "../models/common"

const config: Config = {
  appName: 'react-movie-library',
  localStorageObjectName: 'favorites',
  contentEndMessage: 'Nothing to show',
  imageAlt: 'This would be a movie but something went wrong :/',
  proxyUrl: 'https://thingproxy.freeboard.io/fetch/',
  omdbApi: {
    base: `https://www.omdbapi.com/?apikey=18c7c06e`,
    search: `&page={{page}}&s={{searchPhrase}}`,
    details: `&i={{id}}`,
  },
}

export default config
