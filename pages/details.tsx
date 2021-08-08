import { Layout, Spin } from 'antd'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { Details } from '../components/Details'
import { Return } from '../components/ReturnButton'
import { MissingIdWarning } from '../components/MissingIdWarning'
import { ResponsiveRow } from '../components/ResponsiveRow'
import { getDetails } from '../lib/getMediaDetails'
import { OMDBAPISuccessDetails } from '../models/omdb'
import config from '../utils/config'

const { Header, Content } = Layout

export default function MediaDetails(): JSX.Element {
  const router = useRouter()
  const { id } = router.query
  const getDetailsQuery = getDetails(String(id))

  const { data, isLoading } = useQuery<OMDBAPISuccessDetails, Error>(
    ['details', id],
    getDetailsQuery
  )

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Head>
        <title>
          {config.appName} | {data?.Title ?? id}
        </title>
        <meta name="description" content="App for viewing movies in OMDB" />
      </Head>
      {!id ? (
        <MissingIdWarning />
      ) : (
        <>
          <Header>
            <ResponsiveRow leftColumn={<Return />}>
              {!isLoading && data && (
                <div className="center-text">
                  <span className="app-title">
                    {data.Title} ({data.Year})
                  </span>
                </div>
              )}
            </ResponsiveRow>
          </Header>
          <Content style={{ padding: '20px 40px' }}>
            {!isLoading && data ? (
              <Details data={data} />
            ) : (
              <div className="center">
                <Spin size="large" />
              </div>
            )}
          </Content>
        </>
      )}
    </Layout>
  )
}
