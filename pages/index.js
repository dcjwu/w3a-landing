import Head from "next/head"

import styles from "../styles/Home.module.css"

export default function Home() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Web3App Agency</title>
            <meta content="Web 3 application design, development, testing, deployment and support" name="description" />
            <link href="/favicon.ico" rel="icon" />
         </Head>

         <h1>Main Page...</h1>
      </div>
   )
}
