import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"

import { useEffect } from "react"

import Head from "next/head"
import { Helmet } from "react-helmet"

function MyApp({ Component, pageProps }) {
   useEffect(() => {
      if (typeof window !== "undefined") {
         window.history.scrollRestoration = "manual"
      }
   }, [])
   return (
      <>
         <Head>
            <meta content="#333333" name="theme-color"/>
            <meta content="yes" name="apple-mobile-web-app-capable"/>
            <link href="/icon/icon-180x180.png" rel="apple-touch-icon"/>
            <link href="/favicon.ico" rel="icon"/>
            <link href="/manifest.json" rel="manifest"/>
            <link href="https://fonts.googleapis.com" rel="preconnect"/>
            <link crossOrigin="true" href="https://fonts.gstatic.com" rel="preconnect"/>
            <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;700&family=Montserrat:wght@300;400;500&family=Roboto:wght@300;400;500&family=Source+Code+Pro:wght@300;400;500&display=swap"
               rel="stylesheet"/>
         </Head>
         <Component {...pageProps}/>
      </>
   )
}

export default MyApp
