import React from "react"

import classNames from "classnames/bind"

import { Heading } from "@lib/Heading/Heading"

import type { BlockJourneyItemType } from "@customTypes/components"

import s from "./BlockJourneyItem.module.scss"

const cx = classNames.bind(s)

export const BlockJourneyItem: React.FC<BlockJourneyItemType> = ({ isActive, number, header, handleActivateItem }): JSX.Element => {

   const classNamesItem = cx(s.item, { active: isActive })
   const classNamesItemWrapper = cx(s.itemWrapper, { active: isActive })
   
   return (
      <div className={classNamesItemWrapper}>
         <button className={classNamesItem} onClick={(): void => handleActivateItem(header)}>
            <Heading color="white" component="span" variant="h1">
               {number}
            </Heading>
         </button>
         <Heading color="600" component="span" variant="h2">
            {header}
         </Heading>
      </div>
   )
}