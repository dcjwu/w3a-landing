import React from "react"

import classNames from "classnames/bind"

import type { ArrowType } from "@customTypes/lib"

import s from "./Arrow.module.scss"

const cx = classNames.bind(s)

export const Arrow = React.forwardRef<HTMLButtonElement, ArrowType>(({
   variant,
   direction,
   ariaLabel,
   noDifference,
   ...props
}, ref): JSX.Element => {
   
   const classNamesWrapper = cx(s.wrapper, { noDifference: noDifference })

   const classNamesArrow = cx(s.arrow, {
      [direction]: direction,
      [variant]: variant,
   })

   return (
      <div {...props} className={classNamesWrapper}>
         <button ref={ref} aria-label={ariaLabel} className={classNamesArrow}>
            <svg fill="none" height="24" viewBox="0 0 20 24"
                 width="20" xmlns="http://www.w3.org/2000/svg">
               <path d="M10 1V23" stroke="#9E9E9E" strokeLinecap="round"
                     strokeLinejoin="round" strokeWidth="1.5"/>
               <path d="M1 14L10 23L19 14" stroke="#9E9E9E" strokeLinecap="round"
                     strokeLinejoin="round" strokeWidth="1.5"/>
            </svg>
         </button>
      </div>
   )
})

Arrow.displayName = "Arrow"