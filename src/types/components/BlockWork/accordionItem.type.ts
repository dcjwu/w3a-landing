import React from "react"

type Data = {
   challenge: string
   solution: string
}

export type AccordionItemType = {
   isItemExpanded: string
   setIsItemExpanded: React.Dispatch<React.SetStateAction<string>>
   header: string
   subheader: string[]
   battery: string
   data: Data[]
}