import React from "react"

import classNames from "classnames/bind"
import Image from "next/image"

import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import type { CapabilitiesItemType } from "@customTypes/components"

import s from "./CapabilitiesItem.module.scss"

const cx = classNames.bind(s)

export const CapabilitiesItem: React.FC<CapabilitiesItemType> = ({
   header,
   subheader,
   image,
   reverse,
   aosAnimation
}): JSX.Element => {

   const classNamesItem = cx(s.item, { reverse: reverse })

   return (
      <div className={classNamesItem} data-aos={aosAnimation}>
         <div className={s.image}>
            <Image alt={subheader}
                   layout="fill"
                   src={image}/>
         </div>
         <div className={s.text}>
            <Heading color="white" component="h3"
                     style={{ marginBottom: "1.6rem" }}
                     variant="h2">
               {header}
            </Heading>
            <Text color="300" component="p" variant="paragraph">
               {subheader}
            </Text>
         </div>
      </div>
   )
}