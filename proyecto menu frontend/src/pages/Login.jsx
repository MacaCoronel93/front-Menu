import "./formulario.css"
import{ useState } from "react"
export function LoginPage(){
  
      const [nombre,setNombre] = useState("")
      const [contraseña, setContraseña] = useState("")
       const [error,setError] = useState(false)

       const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(nombre === "" || contraseña === ""){
            setError(true)
            return
        }
       }
    return(
        <section className="contenedor">
                      <h1>LOGIN</h1>
                
                 <form className="formulario">
                        <div className="logo">
                        <img src="./src/assets/logo1.png" style={{width:"140px"}}/>
                        </div>
                        <label>Email</label>
                        <input type="text" placeholder="Escribe tu usuario"/>
                        <label>Contraseña</label>
                        <input type ="password" placeholder="Escribe tu contraseña"/>
                        <button className="boton">Iniciar seccion</button>

                        <p>No tienes cuenta?</p>
                        <a href="#">Resgistrate</a>
                       
                        </form>    
     
        </section>
    )
}