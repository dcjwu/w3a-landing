import ButtonAction from "./_UI/ButtonAction"

const HeaderBlock = () => {

   return (
      <div className="header">
         <div className="header__wrapper">
            <p>/** blockchain development /*</p>
            <h1 className="header__heading">Web3App<span> .Agency</span></h1>
            <div className="header__image">
               <div className="header__buttons">
                  <ButtonAction type="button">
                     Contact us
                  </ButtonAction>
                  <ButtonAction type="button">
                     Presentation
                  </ButtonAction>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderBlock