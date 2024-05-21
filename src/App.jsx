import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { useForm } from "react-hook-form"
import "./App.css"

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log("sending form");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input 
            type="text" 
            {...register("name")}
          />
          

          <label>Last Name:</label>
            <input 
              type="text"
              {...register("surname")}
            />
        </div>

        <div>
          <label>E-mail Address:</label>
            <input 
              type="email" 
              {...register("email")}
            />
        </div>

        <div>
          <label>Query type:</label>
            <div>
              <span>General Enquiry</span>
              <input 
                type="radio" 
                {...register("query_type")}
              />
            </div>

            <div>
              <span>Support Request</span>
              <input 
                type="radio" 
                {...register("query_type")}
              />
            </div>
        </div>

        <div>
          <label>Message:</label>
            <textarea 
              {...register("message")}
            />
        </div>

        <div>
          <label>Terms:</label>
            <span>Eu concordo com os termos de uso.</span>
            <input 
              type="checkbox" 
              {...register("terms")}
            />
        </div>

        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default App
