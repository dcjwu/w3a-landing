import Image from "next/image"

import logo from "../../assets/images/logo.svg"

const NavLogo = () => {
   return (
      <div className="nav__logo">
         <Image alt="logo" height={31.46} quality={100}
                src={logo}
                width={160}/>
      </div>
   )
}

export default NavLogo