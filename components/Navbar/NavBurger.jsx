import {useEffect, useState} from "react"

import classNames from "classnames"

import NavSidebar from "./NavSidebar"

const NavBurger = () => {
   const [burgerMenuActive, setBurgerMenuActive] = useState(false)

   const handleBurgerMenu = () => setBurgerMenuActive(true)
   
   useEffect(() => {
      if (burgerMenuActive) {
         document.body.style.overflow = "hidden"
      } else {
         document.body.style.overflow = "visible"
      }
   }, [burgerMenuActive])
   
   return (
      <div className="nav__burger">
         <div className={classNames("icon", { "active": burgerMenuActive })}
              onClick={handleBurgerMenu}>
            <span/>
            <span/>
            <span/>
         </div>
         <NavSidebar burgerMenuActive={burgerMenuActive} setBurgerMenuActive={setBurgerMenuActive}/>
      </div>
   )
}

export default NavBurger