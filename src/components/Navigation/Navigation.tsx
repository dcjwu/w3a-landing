import React from "react"

import classNames from "classnames/bind"

import { BurgerMenuButton } from "@components/Burger/BurgerMenuButton/BurgerMenuButton"
import { Button } from "@lib/Button/Button"

import type { NavigationType } from "@customTypes/components"

import s from "./Navigation.module.scss"

const cx = classNames.bind(s)

export const Navigation: React.FC<NavigationType> = ({ removeButton }): JSX.Element => {

   const classNamesNavigation = cx(s.navigation, { removeButton: removeButton })

   const handleGoToTop = (): void => {
      window.location.href = "#home"
   }

   return (
      <div className={classNamesNavigation}>

         <button aria-label="go-to-top" onClick={handleGoToTop}>
            <svg fill="none" height="32"
                 viewBox="0 0 32 32"
                 width="32" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_1123_1827)">
                  <path d="M15.4743 11.4251L11.209 15.5947L12.134 16.541L16.3993 12.3714L15.4743 11.4251Z"
                        fill="white"/>
                  <path d="M31.9993 15.0654L16.925 -0.00195312H15.0649L0.00195312 15.075C0.00195312 15.801 0.00195312 16.2074 0.00195312 16.9325L15.078 31.9954H16.9364L31.9993 16.9185C31.9993 16.1995 31.9993 15.7905 31.9993 15.0654ZM26.5828 17.2801L22.8074 21.0038L20.9333 20.9907L20.9202 22.8657L17.1457 26.5894L13.3957 26.564L4.08646 17.1269L7.8522 13.4146L8.97404 12.2927L8.96791 14.5224L14.846 20.4775L15.7839 20.4837L15.79 19.5466L10.6669 14.3604L14.4422 10.6367L19.5619 15.8273L20.4998 15.8334L20.506 14.8964L14.6226 8.93072L12.4035 8.93685L13.5245 7.81677L17.2998 4.09307L26.6091 13.5302L26.5828 17.2801Z"
                     fill="white"/>
               </g>
               <defs>
                  <clipPath id="clip0_1123_1827">
                     <rect fill="white" height="32" width="32"/>
                  </clipPath>
               </defs>
            </svg>
         </button>

         <BurgerMenuButton/>

         <form action="https://calendly.com/artjoms-jurkevics/15min" rel="noreferrer" target="_blank">
            <Button ariaLabel="book-a-call" variant="unique">
               Let&apos;s discuss your idea
            </Button>
         </form>
      </div>
   )
}