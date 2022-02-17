import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"

import Head from "next/head"

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <link href="/favicon.ico" rel="icon"/>
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
