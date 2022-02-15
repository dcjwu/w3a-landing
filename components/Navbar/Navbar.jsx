import NavBurger from "./NavBurger"
import NavLinks from "./NavLinks"
import NavLogo from "./NavLogo"

const Navbar = () => {

   // TODO: Функционал, чтобы при перезагрузке страницы, если в урле есть https://...agency/#..., попадали на /.

   // TODO: Create an .svg icon as quality literally sucks...

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