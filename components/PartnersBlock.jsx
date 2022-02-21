import Image from "next/image"

import capsCoin from "../assets/images/caps-coin.webp"
import BlockHeader from "./_UI/BlockHeader"

const PartnersBlock = () => {
   return (
      <div className="partners">
         <div id="partners"/>
         <BlockHeader>
            Partners
         </BlockHeader>
         <div className="partners__wrapper">
            <div className="partners__item">
               <a href="https://capscoin.io/" rel="noreferrer" target="_blank">
                  <Image alt="CapsCoin" quality={100}
                         src={capsCoin}/>
               </a>
            </div>
         </div>
      </div>
   )
}

export default PartnersBlock