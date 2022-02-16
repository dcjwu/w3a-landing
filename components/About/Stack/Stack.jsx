import BlockSupheader from "../../_UI/BlockSupheader"
import StackCard from "./StackCard"

const Stack = ({ stackName, data }) => {

   return (
      <>
         <BlockSupheader left={true}>
            {stackName}
         </BlockSupheader>
         <div className="about__stack">
            {
               data.map(item => (
                  <StackCard key={item.name} icon={item.icon} link={item.link}
                             name={item.name}/>
               ))
            }
         </div>
      </>
   )
}

export default Stack