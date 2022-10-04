import type { StaticImageData } from "next/image"

export type ProjectsItemType = {
   header: string
   subheader: string[]
   description: string
   color: string
   image: StaticImageData
   url? :string
   reverse: boolean
   aosAnimation: string
}