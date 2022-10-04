import React from "react"

import classNames from "classnames/bind"
import { useRecoilValue } from "recoil"


import { isBurgerMenuShown } from "@atoms/isBurgerMenuShown.atom"
import { BurgerMenuContacts } from "@components/Burger/BurgerMenu/BurgerMenuContacts"
import { BurgerMenuNavigation } from "@components/Burger/BurgerMenu/BurgerMenuNavigation"
import { BurgerMenuButton } from "@components/Burger/BurgerMenuButton/BurgerMenuButton"

import s from "./BurgerMenu.module.scss"

const cx = classNames.bind(s)

export const BurgerMenu: React.FC = (): JSX.Element => {
   
   const isBurgerMenuOpen = useRecoilValue(isBurgerMenuShown)

   const classNamesMenu = cx(s.menu, { active: isBurgerMenuOpen })

   return (
      <div className={classNamesMenu}>
         <BurgerMenuButton style={{ top: "5.5rem" }}/>
         <div className={s.wrapper}>
            
            <BurgerMenuNavigation/>
            
            <BurgerMenuContacts/>
            
         </div>
      </div>
   )
}