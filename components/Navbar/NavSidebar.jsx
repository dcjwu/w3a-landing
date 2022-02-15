import { useEffect, useRef } from "react"

import classNames from "classnames"

import NavLinks from "./NavLinks"

const NavSidebar = ({ burgerMenuActive, setBurgerMenuActive }) => {
   const outsideClickRef = useRef()
   useEffect(() => {
      const checkIfClickedOutside = event => {
         if (burgerMenuActive && outsideClickRef.current && !outsideClickRef.current.contains(event.target)) {
            setBurgerMenuActive(false)
         }
      }
      console.log()
      document.addEventListener("click", checkIfClickedOutside)
      return () => {
         document.removeEventListener("click", checkIfClickedOutside)
      }
   }, [burgerMenuActive])
   
   return (
      <div ref={outsideClickRef} className={classNames("nav__sidebar", { "active": burgerMenuActive })}>
         <ul>
            <NavLinks/>
         </ul>
      </div>
   )
}

export default NavSidebar