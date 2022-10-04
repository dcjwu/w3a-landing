import React from "react"

import { ProjectsItem } from "@components/BlockProjects/ProjectsItem"
import { dbProjects } from "@db/projects"
import { FadeLeftRightAnimationEnum } from "@service/aos/aosAnimationTypes"

import s from "./BlockProjects.module.scss"

export const BlockProjects: React.FC = (): JSX.Element => {
   return (
      <div className={s.block}>

         {dbProjects.content.data.map((item, index) => (
            <ProjectsItem key={item.header}
                          aosAnimation={index % 2 === 0 ? FadeLeftRightAnimationEnum.LEFT : FadeLeftRightAnimationEnum.RIGHT}
                          color={item.color}
                          description={item.description}
                          header={item.header}
                          image={item.image} reverse={index % 2 !== 0}
                          subheader={item.subheader} url={item.url}/>
         ))}

      </div>
   )
}