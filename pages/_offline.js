import Link from "next/link"

import BlockSupheader from "../components/_UI/BlockSupheader"
import ButtonAction from "../components/_UI/ButtonAction"

export default function Offline() {
   return (
      <div className="offline">
         <BlockSupheader>you're offline</BlockSupheader>
         <Link href="/">
            <a>
               <ButtonAction type="button">Retry</ButtonAction>
            </a>
         </Link>
      </div>
   )
}