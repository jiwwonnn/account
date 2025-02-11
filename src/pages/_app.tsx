import type { AppProps } from "next/app";
import { Global} from "@emotion/react";
import {QueryClientProvider, QueryClient, Hydrate} from 'react-query'
import globalStyles from '@styles/globalStyles'
import Layout from '@shared/Layout'

const client = new QueryClient({})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={globalStyles}/>
      <QueryClientProvider client={client}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Layout>
  )
}
