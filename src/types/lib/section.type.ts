import React from "react"

export type SectionType = {
   title: string
   subtitle?: string
   bg: "white" | "black"
   id?: string
   isFullScreen?: boolean
   isTitleOnTheLeft?: boolean
   children: React.ReactNode
   [k: string]: unknown
}