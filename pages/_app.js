import '../styles/globals.css'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <meta name="theme-color" content="#6366f1"></meta>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
