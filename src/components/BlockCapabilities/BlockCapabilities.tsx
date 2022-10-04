import React from "react"

import { CapabilitiesItem } from "@components/BlockCapabilities/CapabilitiesItem"
import { dbCapabilities } from "@db/capabilities"
import { FadeLeftRightAnimationEnum } from "@service/aos/aosAnimationTypes"

import s from "./BlockCapabilities.module.scss"

export const BlockCapabilities: React.FC = (): JSX.Element => {
   return (
      <div className={s.block}>

         {dbCapabilities.content.data.map((item, index) => (
            <CapabilitiesItem key={item.header}
                                 aosAnimation={index % 2 !== 0 ? FadeLeftRightAnimationEnum.LEFT : FadeLeftRightAnimationEnum.RIGHT}
                                 header={item.header}
                                 image={item.image}
                                 reverse={index % 2 === 0}
                                 subheader={item.subheader}/>
         ))}

      </div>
   )
}