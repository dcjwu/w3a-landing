import React from "react"

import classNames from "classnames/bind"

import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import type { SectionType } from "@customTypes/lib"

import s from "./Section.module.scss"

const cx = classNames.bind(s)

export const Section = React.forwardRef<HTMLDivElement, SectionType>(({
   title,
   subtitle,
   bg,
   id,
   isFullScreen,
   isTitleOnTheLeft,
   children,
   ...props
}, ref): JSX.Element => {

   const classNamesSection = cx(s.section, {
      [bg]: bg,
      fullScreen: isFullScreen
   })
   const classNamesDiv = cx(s.wrapper, { titleLeft: isTitleOnTheLeft })

   const getTitleColor = (): "white" | "1000" => {
      if (bg === "white") return "1000"
      return "white"
   }

   return (
      <section ref={ref} id={id} {...props}
               className={classNamesSection}>
         <div className={classNamesDiv}>
            <div className={s.title}>
               <Heading color={getTitleColor()} component="h2"
                        variant="h1">
                  {title}
               </Heading>

               {subtitle && <Text color="600" component="p" style={{
                  textAlign: "center",
                  marginTop: ".8rem"
               }}
                                  variant="paragraph">
                  {subtitle}
               </Text>}

            </div>
            {children}
         </div>
      </section>
   )
})

Section.displayName = "Section"