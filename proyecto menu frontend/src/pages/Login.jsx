import "./formulario.css"
import{ useEffect } from "react"
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";
import { useAuth} from "../context/authContext";

const LoginPage= () =>{
    const {
        register,
        handleSubmit,
        formState:{ errors },} = useForm();
    
    
    const { signin, errors: loginErrors, isAuthenticated } = useAuth();
      const navigate = useNavigate();
      
      const onSubmit = (data) => signin(data);
      useEffect(() => {
        if (isAuthenticated) {
          navigate("/");
        }
      }, [isAuthenticated]);
    
    
       
    return(
        <section className="contenedor">
                      <h1>LOGIN</h1>
                
                 <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                        <div className="logo">
                        <img src="./src/assets/logo1.png" style={{width:"140px"}}/>
                        </div>
                        <label>Email</label>
                        <input type="text" placeholder="Escribe tu usuario"  {...register("mail", {required: true})}/>
                        <p className="textoError">{errors.email?.message}</p>
                        <label>Contraseña</label>
                        <input type ="password" placeholder="Escribe tu contraseña"{...register("password", {required: true})}/>
                        <p className="textoError">{errors.password?.message}</p>
                        <button className="boton">Iniciar seccion</button>

                        <p>No tienes cuenta?</p>
                        <Link to="/registro" >Resgistrate</Link>
                       
                        </form>    
     
        </section>
    )

    }
export default LoginPage;