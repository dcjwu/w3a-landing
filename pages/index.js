import { useRef } from "react"

import Head from "next/head"

import AboutBlock from "../components/About/AboutBlock"
import ContactUsBlock from "../components/Contact-usBlock"
import Footer from "../components/Footer"
import HeaderBlock from "../components/HeaderBlock"
import Navbar from "../components/Navbar/Navbar"
import PartnersBlock from "../components/PartnersBlock"
import TeamBlock from "../components/Team/TeamBlock"

export default function Home() {

   return (
      <>
         <Head>
            <title>Web3App Agency | Blockchain Software Development Company</title>
            <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
                  name="viewport"/>
            <meta charSet="utf-8"/>
            <meta content="en" httpEquiv="content-language"/>
            <meta content="Web3App Agency is a custom software development company that delivers top-level blockchain solutions"
                  name="description"/>
            <meta content="Blockchain Software Development Company" property="og:title"/>
            <meta content="website" property="og:type"/>
            <meta content="Web3App Agency is a custom software development company that delivers top-level blockchain solutions"
                  property="og:description"/>
            <meta content="https://web3app.agency/icon/icon-big.png" property="og:image:secure_url"/>
            <meta content="https://web3app.agency/icon/facebook-icon.png" property="og:image"/>
            <meta content="image/png" property="og:image:type"/>
            <meta content="summary_large_image" name="twitter:card"/>
            <meta content="Web3App Agency | Blockchain Software Development Company" name="twitter:title"/>
            <meta content="Web3App Agency is a custom blockchain software development company that delivers top-level blockchain solutions"
                  name="twitter:description"/>
            <meta content="https://web3app.agency/icon/facebook-icon.png" name="twitter:image"/>
         </Head>

         <Navbar/>
         <div className="container">
            <HeaderBlock/>
            <AboutBlock/>
            <TeamBlock/>
            <PartnersBlock/>
            <ContactUsBlock/>
         </div>
         <Footer/>
      </>
   )
}
