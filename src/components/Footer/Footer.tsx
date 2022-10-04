import React from "react"

import Image from "next/image"

import clutch1 from "@assets/images/footer/clutch1.png"
import clutch2 from "@assets/images/footer/clutch2.png"
import clutch3 from "@assets/images/footer/clutch3.png"
import clutch4 from "@assets/images/footer/clutch4.png"
import { FooterContacts } from "@components/Footer/FooterContacts"
import { FooterNavigation } from "@components/Footer/FooterNavigation"
import { colorBrand } from "@constants/styles"
import { Text } from "@lib/Text/Text"

import s from "./Footer.module.scss"

export const Footer: React.FC = (): JSX.Element => {

   return (
      <footer className={s.wrapper}>
         <div className={s.footer}>
            <div className={s.left}>
               <Text isBold color="white" component="p"
                     style={{ marginBottom: "1.6rem" }} variant="paragraph-lg">
                  <span style={{ color: colorBrand }}>A</span>wards and reviews
               </Text>
               <div className={s.images}>
                  <Image alt="Clutch Top Developers - Eastern Europe 2021" height={95} quality={100}
                         src={clutch1}
                         width={88.48}/>
                  <Image alt="Clutch Top IT Services - Latvia 2021" height={95} quality={100}
                         src={clutch2}
                         width={88.48}/>
                  <Image alt="Clutch Top B2B Companies - Global 2021" height={95} quality={100}
                         src={clutch3}
                         width={110.67}/>
               </div>
               <a href="https://clutch.co/profile/web3app#summary" rel="noreferrer" style={{
                  width: 265,
                  height: 89.98
               }}
                  target="_blank">
                  <Image alt="Clutch Reviews" height={76.39} objectFit="contain"
                         quality={100}
                         src={clutch4}
                         width={225}/>
               </a>
            </div>
            <div className={s.right}>

               <FooterNavigation/>

               <FooterContacts/>

               <div>
                  <Text isBold color="white" component="p"
                        style={{ marginBottom: "1.6rem" }}
                        variant="paragraph-lg">
                     <span style={{ color: colorBrand }}>C</span>ompany Info
                  </Text>
                  <Text color="white" component="p" variant="paragraph">
                     SIA &quot;Web3App&quot;
                  </Text>
                  <Text color="white" component="p" variant="paragraph">
                     Reg Nr: 40103784712
                  </Text>
                  <Text color="white" component="p" variant="paragraph">
                     Riga, Latvia
                  </Text>
               </div>

            </div>
         </div>
      </footer>
   )
}