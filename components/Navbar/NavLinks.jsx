const NavLinks = ({ handleClickInside }) => {
   return (
      <>
         <li>
            <a href="#home" onClick={handleClickInside}>
               Home
            </a>
         </li>
         <li>
            <a href="#services" onClick={handleClickInside}>
               Services
            </a>
         </li>
         <li>
            <a href="#team" onClick={handleClickInside}>
               Team
            </a>
         </li>
         <li>
            <a href="#contact-us" onClick={handleClickInside}>
               Contact us
            </a>
         </li>
      </>
   )
}

export default NavLinks