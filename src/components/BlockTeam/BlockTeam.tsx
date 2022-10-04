import React from "react"

import Image from "next/image"

import { dbTeam } from "@db/team"
import { Text } from "@lib/Text/Text"

import s from "./BlockTeam.module.scss"

export const BlockTeam: React.FC = (): JSX.Element => {
   return (
      <div className={s.block}>

         {dbTeam.content.data.map(item => (
            <div key={item.name} className={s.wrapper}>
               <div className={s.item}>
                  <div className={s.image}>
                     <Image alt={item.name} layout="fill" src={item.image}/>
                  </div>
               </div>
               <Text color="white" component="p" variant="paragraph-lg">
                  {item.name}
               </Text>
               <Text color="600" component="p" variant="paragraph">
                  {item.position}
               </Text>
            </div>
         ))}

      </div>
   )
}