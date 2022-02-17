import Image from "next/image"

import logo from "../../assets/images/logo-4.svg"

const NavLogo = () => {
   return (
      <div className="nav__logo">
         <Image alt="logo" height={100} quality={100}
                src={logo}
                width={100}/>
      </div>
   )
}

export default NavLogo