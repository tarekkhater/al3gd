import '../styles/globals.css'
import Nav from '../Components/Navbar'
import { Fragment } from 'react'
import Footer from '../Components/Footer'
import { SessionProvider } from 'next-auth/react'
function MyApp({ Component, pageProps:{session ,...pageProps} }) {
  return (
    <SessionProvider session={session}>
     
    <Component {...pageProps} />
     <Footer />
    </SessionProvider>
  )
}

export default MyApp
