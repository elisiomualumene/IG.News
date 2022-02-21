import {AppProps} from 'next/app'
import { Header } from '../Components/Header'
import '../Style/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
