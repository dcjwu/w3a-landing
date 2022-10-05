import React, { useRef } from "react"

import classNames from "classnames/bind"

import { useIsElementOnScreen } from "@hooks/useIsElementOnScreen"
import { Arrow } from "@lib/Arrow/Arrow"

import type { ShowArrowUpType } from "@customTypes/components"

import s from "./ShowArrowUpWrapper.module.scss"

const cx = classNames.bind(s)

export const ShowArrowUpWrapper: React.FC<ShowArrowUpType> = ({ children }): JSX.Element => {

   const ref = useRef<HTMLDivElement>(null)
   const buttonRef = useRef<HTMLButtonElement>(null)

   const isArrowShown = useIsElementOnScreen(false, ref)

   const classNamesShowArrowUp = cx(s.wrapper, { show: isArrowShown })

   const handleGoToFirstBlock = (): void => {
      window.location.href = "#home"
      buttonRef.current && buttonRef.current.blur()
   }

   return (
      <>
         <div ref={ref} className={classNamesShowArrowUp}>
            {children}
         </div>

         <Arrow ref={buttonRef} ariaLabel="move-to-top" direction="up"
                variant="black"
                onClick={handleGoToFirstBlock}/>
      </>
   )
}