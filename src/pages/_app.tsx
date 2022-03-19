import { Header } from '../Components/Header'
import '../Style/global.scss'
import { SessionProvider as NextProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextProvider session={pageProps.session}>
    <Header/>
    <Component {...pageProps} />
    </NextProvider>
  )
}

export default MyApp
