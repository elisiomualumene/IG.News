//import {AppProps} from 'next/app'
import { Header } from '../Components/Header'
import '../Style/global.scss'
import { SessionProvider as NextProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <NextProvider>
    <Header/>
    <Component {...pageProps} />
    </NextProvider>
  )
}

export default MyApp
