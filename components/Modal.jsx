import { useEffect, useRef, useState } from "react"

import Form from "./Form"

const Modal = ({ showModal, setShowModal, handleShowModal }) => {
   const [isSuccess, setIsSuccess] = useState(false)

   const clearModalForm = (setSuccess) => {
      setSuccess("")
      setIsSuccess(false)
   }

   useEffect(() => {
      if (showModal) {
         document.body.style.overflow = "hidden"
      } else {
         document.body.style.overflow = "visible"
      }
   }, [showModal])

   const outsideClickRef = useRef()
   useEffect(() => {
      const checkIfClickedOutside = event => {
         if (showModal && isSuccess && outsideClickRef.current && !outsideClickRef.current.contains(event.target)) {
            setShowModal(false)
         }
      }
      document.addEventListener("click", checkIfClickedOutside)
      return () => {
         document.removeEventListener("click", checkIfClickedOutside)
      }
   }, [showModal, isSuccess])

   return (
      <div ref={outsideClickRef} className={`modal-win${showModal ? " view" : ""}`}
           tabIndex="-1">
         <div className="modal__header">
            <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" onClick={() => handleShowModal()}>
               <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/>
            </svg>
         </div>
         <div className="modal__form">
            <Form clearModalForm={clearModalForm} setIsSuccess={setIsSuccess} showModal={showModal}/>
         </div>
      </div>
   )
}

export default Modal