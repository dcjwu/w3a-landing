import { useEffect, useState } from "react"

import axios from "axios"

import ButtonAction from "./_UI/ButtonAction"
import Spinner from "./_UI/Spinner"

const Form = ({ title, clearModalForm, showModal, setIsSuccess }) => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")

   const onNameChange = ({ target }) => setName(target.value)
   const onEmailChange = ({ target }) => setEmail(target.value)
   const onMessageChange = ({ target }) => setMessage(target.value)

   const [error, setError] = useState("")
   const [success, setSuccess] = useState("")
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      if (showModal && success) {
         clearModalForm(setSuccess)
      }
   }, [showModal])

   const handleSubmit = e => {
      e.preventDefault()
      if (!name.length && !email.length && !message.length) {
         setError("Please, fill the form.")
         setSuccess("")
      } else if (!name) {
         setError("Please, enter your name.")
      } else if (message.length < 8) {
         setError("Message is too short.")
         setSuccess("")
      } else {
         const data = {
            email,
            name,
            message
         }
         setLoading(true)
         axios.post("/api/sendgrid", data, { headers: { "Content_type": "application/json" } })
            .then(res => {
               if (res.status === 200) {
                  setSuccess("Email sent successfully.")
                  setName("")
                  setEmail("")
                  setMessage("")
                  setError("")
                  setLoading(false)
                  if (setIsSuccess) {
                     setIsSuccess(true)
                  }
               } else {
                  setError("Unexpected Error.")
                  setLoading(false)
               }
            })
            .catch(() => {
               setError("Something went wrong.")
               setSuccess("")
               setLoading(false)
            })
      }
   }
   
   return (
      <form className="form contact" onSubmit={handleSubmit}>
         {title && <h3>{title}</h3>}
         {error && <p className="text-center error contact">{error}</p>}
         {success && <p className="text-center success contact">{success}</p>}
         <div className="form-group contact">
            <input className="form-control" placeholder="Email"
                   type="email" value={email} onChange={onEmailChange}/>
         </div>
         <div className="form-group contact">
            <input className="form-control" placeholder="Name"
                   type="text" value={name} onChange={onNameChange}/>
         </div>
         <div className="form-group contact">
            <textarea className="form-control" placeholder="Message" value={message}
                         onChange={onMessageChange}/>
         </div>
         <ButtonAction disabled={loading} type="submit" >
            {
               loading 
                  ? <Spinner height={15} width={45}/>
                  : "Send"
            }
         </ButtonAction>
      </form>
   )
}

export default Form