import { useEffect, useState } from "react"

import axios from "axios"
import Image from "next/image"

import logo from "../assets/images/logo.png"
import Spinner from "./_UI/Spinner"

const UnderConstruction = () => {
   const [progressValue, setProgressValue] = useState(0)

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
      setInterval(() => {
         setProgressValue(prevState => prevState + 1)
      }, 5000)
   }, [])

   if (progressValue === 80) {
      setProgressValue(0)
   }

   const handleSubmit = e => {
      e.preventDefault()
      if (message.length < 8) {
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
      <main className="construction d-flex flex-column align-items-center justify-content-center">
         <div className="construction-heading">
            <div className="heading">
               <div className="img-container">
                  <Image unoptimized alt="logo"
                         quality={100} src={logo}/>
               </div>
               <h1>Under Construction</h1>
            </div>
            <h3>Website is nearly ready {`${progressValue}%`}</h3>
         </div>
         <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated"
                 style={{ width: `${progressValue}%` }}/>
         </div>
         <form className="form" onSubmit={handleSubmit}>
            <h3>Contact Us</h3>
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
         <div className="contact">
            <a href="https://www.linkedin.com/company/web3app-agency" rel="noreferrer" target="_blank">
               <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
               </svg>
            </a>
         </div>
      </main>
   )
}

export default UnderConstruction