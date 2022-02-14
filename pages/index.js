import Head from "next/head"

import UnderConstruction from "../components/UnderConstruction"

export default function Home() {
   return (
      <>
         <Head>
            <title>Web3App Agency | Your Blockchain Development Solution</title>
            <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
                  name="viewport"/>
            <meta charSet="utf-8"/>
            <meta content="en" httpEquiv="content-language"/>
            <meta content="Web3App Agency is a custom software development company that delivers top-level solutions"
                  name="description"/>
            <meta content="Your Blockchain Development Solution" property="og:title"/>
            <meta content="website" property="og:type"/>
            <meta content="Web3App Agency is a custom software development company that delivers top-level solutions"
                  property="og:description"/>
         </Head>

         <div className="container">
            <UnderConstruction/>
         </div>
      </>
   )
}
