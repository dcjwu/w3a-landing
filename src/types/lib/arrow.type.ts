export type ArrowType = {
   variant: "brand" | "white" | "black"
   direction: "up" | "down"
   ariaLabel: string
   noDifference?: boolean
   [k: string]: unknown
}