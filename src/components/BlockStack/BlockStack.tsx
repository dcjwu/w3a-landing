import React from "react"

import Image from "next/image"

import { dbStack } from "@db/stack"
import { Text } from "@lib/Text/Text"

import s from "./BlockStack.module.scss"

export const BlockStack: React.FC = (): JSX.Element => {
   return (
      <div className={s.block} data-aos="fade-up">

         {dbStack.content.data.map(item => (
            <a key={item.name} className={s.item} href={item.url}
               rel="noreferrer" target="_blank">
               <span className={s.itemWrapper}>
                  <span className={s.image}>
                     <Image alt={item.name} layout="fill" objectFit="contain"
                         src={item.image}/>
                  </span>
                  <Text color="1000" component="span" variant="paragraph">
                     {item.name}
                  </Text>
               </span>
            </a>
         ))}

      </div>
   )
}