import React from "react"

export type ButtonType = {
   variant: "primary" | "secondary" | "unique"
   ariaLabel: string
   children: React.ReactNode
   loading?: boolean
   success?: string
   error?: string
   [k: string]: unknown
}