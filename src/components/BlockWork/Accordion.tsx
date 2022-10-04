import React from "react"

import { AccordionItem } from "@components/BlockWork/AccordionItem"
import { dbWork } from "@db/work"

import s from "./Accordion.module.scss"

export const Accordion: React.FC = (): JSX.Element => {

   const [isItemExpanded, setIsItemExpanded] = React.useState<string>("")

   return (
      <div className={s.block} data-aos="fade-down">

         {dbWork.content.map(item => (
            <AccordionItem key={item.battery}
                           battery={item.battery}
                           data={item.data}
                           header={item.header}
                           isItemExpanded={isItemExpanded}
                           setIsItemExpanded={setIsItemExpanded} subheader={item.subheader}/>
         ))}

      </div>
   )
}