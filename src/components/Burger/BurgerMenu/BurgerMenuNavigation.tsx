import React from "react"

import { useRecoilState } from "recoil"

import { isBurgerMenuShown } from "@atoms/isBurgerMenuShown.atom"
import s from "@components/Burger/BurgerMenu/BurgerMenu.module.scss"
import { colorGrey600 } from "@constants/styles"
import { dbLinks } from "@db/links"
import { useDesignHover } from "@hooks/useDesignHover"
import { Heading } from "@lib/Heading/Heading"

export const BurgerMenuNavigation: React.FC = (): JSX.Element => {

   const [, setIsBurgerMenuOpen] = useRecoilState(isBurgerMenuShown)

   const [hasMounted, activeField, wasElementHovered, handleMouseEnter, handleMouseLeave] = useDesignHover()

   const handleGoToBlock = (id: string): void => {
      setIsBurgerMenuOpen(false)
      window.location.href = `#${id}`
   }
   
   return (
      <nav role="presentation" onMouseLeave={handleMouseLeave}>
         <ul className={s.list}>

            {hasMounted && dbLinks.map(link => (
               <Heading key={link.id} color="white" component="li"
                        style={{ color: link.id !== activeField && wasElementHovered ? colorGrey600 : "" }}
                        variant="h1"
                        onClick={(): void => handleGoToBlock(link.id)}
                        onMouseEnter={(): void => handleMouseEnter(link.id)}>
                  {link.link}
               </Heading>
            ))}

         </ul>
      </nav>
   )
}