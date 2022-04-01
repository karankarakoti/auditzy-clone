import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import { theme } from '../styles'
import { Layout } from '../templates'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>    
    </ThemeProvider>
  )
}

export default MyApp
