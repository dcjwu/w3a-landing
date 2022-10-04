import React from "react"

import { colorBrand, colorGrey600 } from "@constants/styles"

import type { ProcessNextType } from "@customTypes/lib"

import s from "./ProcessNext.module.scss"

export const ProcessNext: React.FC<ProcessNextType> = ({ active }): JSX.Element => {

   const color = React.useMemo(() => {
      return active ? colorBrand : colorGrey600
   }, [active])

   return (
      <svg className={s.item} fill="none" height="32"
           viewBox="0 0 32 32"
           width="32" xmlns="http://www.w3.org/2000/svg">

         <path d="M15.4492 32L32.0009 16L15.4492 -2.38419e-07" stroke={color} strokeLinecap="round"
               strokeLinejoin="round" strokeWidth="1.5"/>

         <path d="M7.72461 32L24.2763 16L7.72461 -2.38419e-07" stroke={color} strokeLinecap="round"
               strokeLinejoin="round" strokeWidth="1.5"/>

         <path d="M0 32L16.5517 16L0 -2.38419e-07" stroke={color} strokeLinecap="round"
               strokeLinejoin="round" strokeWidth="1.5"/>
      </svg>
   )
}