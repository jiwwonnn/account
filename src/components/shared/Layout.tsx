import SEO from './SEO'
import Head from "next/head";

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div>
      <SEO title={'account'} description={'내 자산 관리를 보다 쉽게 !'} image={''} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </div>
  )
}

export default Layout