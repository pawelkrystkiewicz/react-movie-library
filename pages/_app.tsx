import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
export default MyApp
