import { useState } from "react"

import axios from "axios"

import Spinner from "./_UI/Spinner"

const Form = ({ title }) => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message, setMessage] = useState("")

   const onNameChange = ({ target }) => setName(target.value)
   const onEmailChange = ({ target }) => setEmail(target.value)
   const onMessageChange = ({ target }) => setMessage(target.value)

   const [error, setError] = useState("")
   const [success, setSuccess] = useState("")
   const [loading, setLoading] = useState(false)

   const handleSubmit = e => {
      e.preventDefault()
      if (message.length < 8) {
         setError("Message is too short.")
         setSuccess("")
      } else if (!name) {
         setError("Please, enter your name.")
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
      <form className="form" onSubmit={handleSubmit}>
         {title && <h3>{title}</h3>}
         {error && <p className="text-center error">{error}</p>}
         {success && <p className="text-center success">{success}</p>}
         <div className="form-group">
            <input className="form-control" placeholder="Email"
                   type="email" value={email} onChange={onEmailChange}/>
         </div>
         <div className="form-group">
            <input className="form-control" placeholder="Name"
                   type="text" value={name} onChange={onNameChange}/>
         </div>
         <div className="form-group">
            <textarea className="form-control" placeholder="Message" value={message}
                         onChange={onMessageChange}/>
         </div>
         <button className="btn" disabled={loading} type="submit">
            {
               loading
                  ? <Spinner height={15} width={45}/>
                  : "Send"
            }
         </button>
      </form>
   )
}

export default Form