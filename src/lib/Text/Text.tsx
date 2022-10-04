import React from "react"

import classNames from "classnames/bind"

import type { TextType } from "@customTypes/lib/text.type"

import s from "./Text.module.scss"

const cx = classNames.bind(s)

export const Text  = React.forwardRef<HTMLElement, TextType>(({
   component,
   variant,
   color,
   isBold,
   children,
   ...props
}, ref): JSX.Element => {

   const classNamesText = cx(s.text, {
      [`c_${color}`]: `c_${[color]}`,
      [variant]: variant,
      bold: isBold
   })

   const Tag = component as React.ElementType

   return (
      <Tag ref={ref} {...props} className={classNamesText}>{children}</Tag>
   )
})

Text.displayName = "Text"