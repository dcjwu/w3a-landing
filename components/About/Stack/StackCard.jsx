import Image from "next/image"

const StackCard = ({ name, icon, link }) => {
   return (
      <a className="stack" href={link} rel="noreferrer"
         target="_blank">
         <Image alt={name} height={60} loading="eager"
                quality={100}
                src={icon} width={60}/>
         <p>{name}</p>
      </a>
   )
}

export default StackCard