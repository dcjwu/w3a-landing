import BlockSubheader from "../_UI/BlockSubheader"
import SolutionsCard from "./SolutionsCard"

const cardInfo = [
   {
      heading: "Smart contracts",
      text: "ETH, EOS, TRON, and other blockchains smart contract development and audition."
   },
   {
      heading: "Crypto wallets",
      text: "Crypto wallet creation for any platform, feature or currency, favouring client's needs."
   },
   {
      heading: "DeFi",
      text: "Development of assets tokenization platforms, P2P lending or Neobanks."
   }
]

const AboutBlock = () => {
   return (
      <div className="about">
         <BlockSubheader>
            Solutions
         </BlockSubheader>
         <div className="about__solutions">
            {
               cardInfo.map((cardData, index) => (
                  <SolutionsCard key={cardData.heading} heading={cardData.heading} number={index + 1}
                                 text={cardData.text}/>
               ))
            }
         </div>
      </div>
   )
}

export default AboutBlock