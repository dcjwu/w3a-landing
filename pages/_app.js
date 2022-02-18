import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"

import { useEffect } from "react"

import Head from "next/head"

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
            <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&family=Source+Code+Pro:wght@300;400;500;700&display=swap"
               rel="stylesheet"/>
         </Head>
         <Component {...pageProps}/>
      </>
   )
}

export default MyApp
