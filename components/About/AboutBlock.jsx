import { solutionsCardInfo, stack } from "../../utils/data"
import BlockHeader from "../_UI/BlockHeader"
import SolutionsCard from "./SolutionsCard"
import Stack from "./Stack/Stack"

const AboutBlock = () => {
   const { languages, frameworks, dbms, blockchains } = stack

   return (
      <div className="about">
         {/*<BlockSubheader>*/}
         {/*   Solutions*/}
         {/*</BlockSubheader>*/}
         <BlockHeader>
            Solutions
         </BlockHeader>
         <div className="about__solutions">
            {
               solutionsCardInfo.map((cardData, index) => (
                  <SolutionsCard key={cardData.heading} heading={cardData.heading} number={index + 1}
                                 text={cardData.text}/>
               ))
            }
         </div>
         <BlockHeader>
            Tech Stack
         </BlockHeader>
         <Stack name data={languages} stackName="languages"/>
         <Stack data={frameworks} stackName="frameworks"/>
         <Stack data={dbms} stackName="dbms"/>
         <Stack data={blockchains} stackName="blockchains"/>
      </div>
   )
}

export default AboutBlock