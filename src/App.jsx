
import './App.css'
import Datos from './Datos'
function App() {

  const alumno={
    nombre:'Carlos',
    edad:23
  }

  const carrera={
    nombreCarrera:'informática',
    anio:2024
  }

  return (
   
     <Datos alumno={alumno} carrera={carrera} />
  )
}

export default App
