import team from "../../utils/team.json"
import BlockHeader from "../_UI/BlockHeader"
import TeamMember from "./TeamMember"

const TeamBlock = () => {

   return (
      <div className="team">
         <div id="team"/>
         <BlockHeader>
            Team
         </BlockHeader>
         <div className="team__wrapper">
            {
               team.map(member => (
                  <TeamMember key={member.name} image={member.image} linkedin={member.linkedin}
                              name={member.name} position={member.position}
                              role={member.role}/>
               ))
            }
         </div>
      </div>
   )
}

export default TeamBlock