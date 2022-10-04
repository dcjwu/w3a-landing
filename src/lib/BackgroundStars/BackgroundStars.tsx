import React from "react"

import s from "./BackgroundStars.module.scss"

export const BackgroundStars: React.FC = (): JSX.Element => {
   return (
      <>
         <div className={s.stars}/>
         <div className={s.stars2}/>
         <div className={s.stars3}/>
         <span className={s.fallingStar}/>
      </>
   )
}