import React from "react";

function ListaAlumnos({integra}){
    return<p className="center">({integra ? '✔️' : '❌'})</p>
}

export default ListaAlumnos;