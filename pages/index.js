import Head from "next/head"

import AboutBlock from "../components/About/AboutBlock"
import ContactUsBlock from "../components/Contact-usBlock"
import HeaderBlock from "../components/HeaderBlock"
import Navbar from "../components/Navbar/Navbar"

export default function Home() {
   return (
      <>
         <Head>
            <title>Web3App Agency | High Quality Blockchain Development</title>
            <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
                  name="viewport"/>
            <meta charSet="utf-8"/>
            <meta content="en" httpEquiv="content-language"/>
            <meta content="Web3App Agency is a custom software development company that delivers top-level solutions"
                  name="description"/>
            <meta content="High Quality Blockchain Development" property="og:title"/>
            <meta content="website" property="og:type"/>
            <meta content="Web3App Agency is a custom software development company that delivers top-level solutions"
                  property="og:description"/>
         </Head>

         <Navbar/>
         <div className="container">
            <HeaderBlock/>
            <AboutBlock/>
            <ContactUsBlock/>
            {/*<UnderConstruction/>*/}
         </div>
      </>
   )
}
