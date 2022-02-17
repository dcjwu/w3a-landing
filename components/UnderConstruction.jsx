import Image from "next/image"

import logo from "../assets/images/logo.svg"
import Form from "./Form"

const UnderConstruction = () => {
   return (
      <main className="construction d-flex flex-column align-items-center justify-content-center">
         <div className="construction-heading">
            <div className="heading">
               <div className="img-container">
                  <Image unoptimized alt="logo" height={59}
                         quality={100}
                         src={logo} width={300}/>
               </div>
               <h1>Website is Under Construction</h1>
            </div>
            <div className="about-us">
               <h3>About us</h3>
               <p>We develop high-quality blockchain software, provide maintenance, and guarantee
                  the quality of our work. Our business-oriented approach provides expertise on every stage of
                  blockchain-powered software development along with qualitative customer service. Working with us you
                  get more than a technical implementer - you get a technical partner who strives for your success.</p>
            </div>
         </div>
         <Form title="Contact Us"/>
         <div className="contact">
            <a href="https://www.linkedin.com/company/web3app-agency" rel="noreferrer" target="_blank">
               <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
               </svg>
            </a>
            <a href="https://telegram.me/barcafan95" rel="noreferrer" target="_blank">
               <svg viewBox="0 0 496 512"
                    xmlns="http://www.w3.org/2000/svg">
                  <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/>
               </svg>
            </a>
         </div>
      </main>
   )
}

export default UnderConstruction