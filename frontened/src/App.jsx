import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usuario,setUsuario] = useState('')
  const [contraseña,setContraseña] = useState('')
  const [logueado,setlogueado] = useState('false')

  function cambiarUsuario(evento){
    setUsuario(evento.target.value)
  }

  function cambiarContraseña(evento){
    setContraseña(evento.target.value)
  }

  function Ingresar (){
    if(usuario === 'fabian' && contraseña === '12345'){
      alert('Ingreso Exitoso')
      setlogueado(true)
    } else{
    alert('Usuario incorrecto')
    }
  }


  return (
    <>
     <h1>Inicio de sesión</h1>
     <input placeholder="usuario" type="text" name='usuario' id='usuario' value={usuario} onChange={cambiarUsuario} />
     <input placeholder='contraseña' type="password" name='contraseña' id='contraseña' value={contraseña} onChange={cambiarContraseña} />
     <button onClick={Ingresar}>Ingresar</button>
    </>
  )
}

export default App
