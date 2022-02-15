import Image from "next/image"

import logo from "../../assets/images/logo.svg"

const NavLogo = () => {
   return (
      <div className="nav__logo">
         <Image alt="logo" height={58} quality={100}
                src={logo}
                width={295}/>
      </div>
   )
}

export default NavLogo