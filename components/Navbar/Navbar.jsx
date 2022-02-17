import NavBurger from "./NavBurger"
import NavLinks from "./NavLinks"
import NavLogo from "./NavLogo"

const Navbar = () => {
   return (
      <nav className="nav">
         <div className="container">
            <div className="nav__wrapper">
               <NavLogo/>
               <ul className="nav__links">
                  <NavLinks/>
               </ul>
               <NavBurger/>
            </div>
         </div>
      </nav>
   )
}

export default Navbar