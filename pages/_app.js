import '../styles/globals.css'
import "../styles/navbar.css"
import Layout from "../component/layout"

export default function Myapp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component  {...pageProps} />
      </Layout>
    </>
  )
}
