import Image from "next/image"

import capsCoin from "../assets/images/caps-coin.webp"
import weLaunch from "../assets/images/welaunch.png"
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
                  <Image alt="CapsCoin" height={200} quality={100}
                         src={capsCoin}
                         width={200}/>
               </a>
               <a href="http://welaunch.tech/" rel="noreferrer" target="_blank">
                   <Image alt="welaunch" height={200} quality={100}
                          src={weLaunch}
                          width={400}/>
               </a>
            </div>
         </div>
      </div>
   )
}

export default PartnersBlock