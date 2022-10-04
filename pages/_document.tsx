import NextDocument, { Head, Html, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
   render(): JSX.Element {
      return (
         <Html lang="en">
            <Head>
               <link href="https://fonts.googleapis.com" rel="preconnect"/>
               <link href="https://fonts.gstatic.com" rel="preconnect"/>
               <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap"
                     rel="stylesheet"/>
               <meta content="We create top-notch web and mobile applications, provide support, and consulting. Our business-oriented strategy offers high-quality customer service and expertise at every stage of development. During the past year, we became one of the best software and blockchain development agencies in the Baltic states. Get a technical partner who strives for your success."
                  name="description"/>

               <meta content="Web3App.Agency | High Quality Blockchain Development" property="og:title"/>
               <meta content="We create top-notch web and mobile applications, provide support, and consulting. Our business-oriented strategy offers high-quality customer service and expertise at every stage of development. During the past year, we became one of the best software and blockchain development agencies in the Baltic states. Get a technical partner who strives for your success."
                     property="og:description"/>
               <meta content="https://web3app.agency/logo.png" property="og:image"/>
               <meta content="https://web3app.agency" property="og:url"/>

               <meta content="Web3App.Agency | High Quality Blockchain Development" name="twitter:title"/>
               <meta content="We create top-notch web and mobile applications, provide support, and consulting. Our business-oriented strategy offers high-quality customer service and expertise at every stage of development. During the past year, we became one of the best software and blockchain development agencies in the Baltic states. Get a technical partner who strives for your success."
                     name="twitter:description"/>
               <meta content="https://web3app.agency/logo.png" name="twitter:url"/>
            </Head>
            <body>
               <Main/>
               <NextScript/>
            </body>
         </Html>
      )
   }
}