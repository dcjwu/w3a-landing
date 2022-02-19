import { useState } from "react"

import Image from "next/image"
import Link from "next/link"

import error404 from "../assets/images/404.svg"
import BlockHeader from "../components/_UI/BlockHeader"
import BlockSupheader from "../components/_UI/BlockSupheader"
import ButtonAction from "../components/_UI/ButtonAction"
import Modal from "../components/Modal"

export default function Custom404() {
   const [showModal, setShowModal] = useState(false)
   const handleShowModal = () => setShowModal(prevState => !prevState)
   return (
      <div className="four-o-four">
         <div className="container">
            <div className="four-o-four__wrapper">
               <div className="four-o-four__text">
                  <BlockHeader>404</BlockHeader>
                  <BlockSupheader>It looks like this page doesn't exist.</BlockSupheader>
                  <Link href="/">
                     <a>
                        <ButtonAction type="button">Go home</ButtonAction>
                     </a>
                  </Link>
                  <BlockSupheader>or just</BlockSupheader>
                  <ButtonAction type="button" onClick={() => handleShowModal()}>Contact us</ButtonAction>
               </div>
               <div className="image__wrapper">
                  <Image alt="page not found" height={600} quality={100}
                         src={error404} width={501}/>
               </div>
            </div>
            <Modal handleShowModal={handleShowModal} setShowModal={setShowModal} showModal={showModal}/>
         </div>
      </div>
   )
}