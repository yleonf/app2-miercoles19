function Datos(props){
    const {nombre, edad}=props.alumno;
    const{nombreCarrera,anio}=props.carrera;
    return(
        <div>
            <h1> Datos Estudiante </h1>
            <h1>{nombre}</h1>
            <h1>{edad}</h1>
            <h1>Carrera</h1>
            <h1>{nombreCarrera}</h1>
            <h1>{anio}</h1>
        </div>
   
    )
}
export default Datos;