import { Layout } from 'antd'
import Head from 'next/head'
import { useState } from 'react'
import { DataProvider } from '../components/DataProvider'
import { ResponsiveRow } from '../components/ResponsiveRow'
import { SearchInput } from '../components/Search'
import config from '../utils/config'
const { Header, Content } = Layout

export default function Home(): JSX.Element {
  const [searchPhrase, setSearchPhrase] = useState<string>('')
  const headerHeight = '15vh'

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Head>
        <title>{config.appName}</title>
        <meta name="description" content="App for viewing movies in OMDB" />
      </Head>
      <Header
        style={{
          position: 'fixed',
          width: '100%',
          height: headerHeight,
          minHeight: 110,
          zIndex: 10,
        }}
      >
        <ResponsiveRow>
          <div className="center-text">
            <span className="app-title">OMDB Search Engine</span>
          </div>
          <SearchInput setSearchPhrase={setSearchPhrase} />
        </ResponsiveRow>
      </Header>
      <Content style={{ paddingTop: headerHeight }}>
        <ResponsiveRow>
          {!!searchPhrase ? (
            <DataProvider searchPhrase={searchPhrase} />
          ) : (
            <p className="center center-text box-margin">
              Nothing here yet. <br />
              Start typing!
            </p>
          )}
        </ResponsiveRow>
      </Content>
    </Layout>
  )
}
