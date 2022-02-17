import Image from "next/image"

import BlockHeader from "./_UI/BlockHeader"
import Form from "./Form"

const ContactUsBlock = () => {
   return (
      <div className="contact-us">
         <BlockHeader>
            Contact Us
         </BlockHeader>
         <div className="contact-us__wrapper">
            <Form/>
            <div className="contact-us__wrapper--image">
               <Image alt="our strengths" layout="fill" objectFit="cover"
                      quality={100}
                      src="http://avsdata.beget.tech/images/contact1-min.webp"/>
            </div>
         </div>
      </div>
   )
}

export default ContactUsBlock