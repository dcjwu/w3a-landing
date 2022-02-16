import BlockSupheader from "./_UI/BlockSupheader"
import ButtonAction from "./_UI/ButtonAction"

const HeaderBlock = () => {

   return (
      <div className="header">
         <div className="header__wrapper">
            <BlockSupheader>blockchain development</BlockSupheader>
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
               <p className="header__about">
                  We develop high-quality blockchain software, provide maintenance, and guarantee the quality of our work. Our
                  business-oriented approach provides expertise on every stage of blockchain-powered software development
                  along with qualitative customer service. Working with us you get more than a technical implementer - you get
                  a technical partner who strives for your success.
               </p>
            </div>
         </div>
      </div>
   )
}

export default HeaderBlock