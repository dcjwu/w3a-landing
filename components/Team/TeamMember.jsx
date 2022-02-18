import Image from "next/image"

const TeamMember = ({ name, position, role, image, linkedin }) => {
   return (
      <a className="member" href={linkedin} rel="noreferrer"
         target="_blank">
         <div className="image-wrapper">
            <Image alt={position} height={250} quality={100}
                   src={image} width={250}/>
         </div>
         <div className="info-wrapper">
            <p className="member__name">{name}</p>
            <p className="member__role">{position}</p>
            <p className="member__role">{role}</p>
         </div>
      </a>
   )
}

export default TeamMember