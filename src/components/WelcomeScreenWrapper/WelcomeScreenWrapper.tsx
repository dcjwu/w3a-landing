import React from "react"

import { useRecoilValue } from "recoil"

import { isBurgerMenuShown } from "@atoms/isBurgerMenuShown.atom"
import { BurgerMenu } from "@components/Burger/BurgerMenu/BurgerMenu"
import { Header } from "@components/Header/Header"
import { Navigation } from "@components/Navigation/Navigation"
import { useIsElementOnScreen } from "@hooks/useIsElementOnScreen"

export const WelcomeScreenWrapper: React.FC = (): JSX.Element => {

   const ref = React.useRef<HTMLDivElement>(null)

   const isElementOnScreen = useIsElementOnScreen(true, ref)

   const isBurgerMenuOpen = useRecoilValue(isBurgerMenuShown)

   return (
      <>
         {!isBurgerMenuOpen && <Navigation removeButton={!isElementOnScreen}/>}

         <Header ref={ref}/>
         
         <BurgerMenu/>
      </>
   )
}