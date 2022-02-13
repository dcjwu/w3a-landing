import Head from "next/head"

import styles from "../styles/Home.module.css"

export default function Home() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Web3App Agency | Your Blockchain Development Solution</title>
            <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
            <meta charSet="utf-8" />
            <meta content="en" httpEquiv="content-language"/>
            <meta content="Web3App Agency is a custom software development company that delivers top-level solutions" name="description"/>
            <meta content="Web3App Agency | Your Blockchain Development Solution" property="og:title"/>
            <meta content="website" property="og:type"/>
            <meta content="Web3App Agency is a custom software development company that delivers top-level solutions" property="og:description"/>
            <link href="/favicon.ico" rel="icon" />
         </Head>

         <h1>Main Page...</h1>
      </div>
   )
}
