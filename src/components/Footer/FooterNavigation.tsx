import React from "react"

import s from "@components/Footer/Footer.module.scss"
import { colorBrand, colorGrey600 } from "@constants/styles"
import { dbLinks } from "@db/links"
import { useDesignHover } from "@hooks/useDesignHover"
import { Text } from "@lib/Text/Text"

export const FooterNavigation: React.FC = (): JSX.Element => {

   const [hasMounted, activeField, wasElementHovered, handleMouseEnter, handleMouseLeave] = useDesignHover()

   const handleGoToBlock = (id: string): void => {
      window.location.href = `#${id}`
   }
   
   return (
      <nav role="presentation" onMouseLeave={handleMouseLeave}>
         <Text isBold color="white" component="p"
               style={{ marginBottom: "1.6rem" }}
               variant="paragraph-lg">
            <span style={{ color: colorBrand }}>G</span>eneral
         </Text>
         <ul className={s.list}>

            {hasMounted && dbLinks.map(link => (
               <Text key={link.id} color="white" component="li"
                        style={{ color: link.id !== activeField && wasElementHovered ? colorGrey600 : "" }}
                        variant="paragraph"
                        onClick={(): void => handleGoToBlock(link.id)}
                        onMouseEnter={(): void => handleMouseEnter(link.id)}>
                  {link.link}
               </Text>
            ))}

         </ul>
      </nav>
   )
}