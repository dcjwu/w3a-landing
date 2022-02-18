import Image from "next/image"
import Link from "next/link"

import logo from "../../assets/images/logo-4.svg"

const NavLogo = () => {
   return (
      <Link href="/">
         <a className="nav__logo">
            <Image alt="logo" height={100} quality={100}
                   src={logo}
                   width={100}/>
         </a>
      </Link>
   )
}

export default NavLogo