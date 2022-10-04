import React from "react"

import classNames from "classnames/bind"
import Image from "next/image"

import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import type { ProjectsItemType } from "@customTypes/components"

import s from "./ProjectsItem.module.scss"

const cx = classNames.bind(s)

export const ProjectsItem: React.FC<ProjectsItemType> = ({
   header,
   subheader,
   description,
   color,
   image,
   url,
   reverse,
   aosAnimation
}): JSX.Element => {

   const classNamesItem = cx(s.item, { reverse: reverse })

   return (
      <div className={classNamesItem} data-aos={aosAnimation}>

         <a href={url} rel="noreferrer" target="_blank">
            <div className={s.image} style={{ backgroundColor: color }}>
               <Image alt={header} layout="fill" objectFit="contain"
                      src={image}/>
            </div>
         </a>

         <div>
            <Heading color="1000" component="h3" style={{ marginBottom: ".8rem" }}
                     variant="h2">
               {header}
            </Heading>
            <ul className={s.list}>

               {subheader.map((item, index) => (
                  <Text key={item + index} color="600" component="li"
                        variant="label">
                     {item}
                  </Text>
               ))}

            </ul>
            <Text color="800" component="p" style={{ whiteSpace: "pre-wrap" }}
                  variant="paragraph">
               {description}
            </Text>
         </div>
      </div>
   )
}