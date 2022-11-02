import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

import { Principal } from "../../vistas/publicas/Principal"
import { InicioSesion } from "../../vistas/publicas/InicioSesion"
import { RegistroSesion } from "../../vistas/publicas/RegistroSesion"
import { NoEncontrado } from "../../vistas/compartidas/NoEncontrado"

// rutas modo lazy de principal
const LazyPrincipal = lazy(() =>
  import("../../vistas/publicas/Principal").then(() => ({ default: Principal }))
);

// rutas modo lazy de InicioSesion
const LazyInicioSesion = lazy(() =>
  import("../../vistas/publicas/InicioSesion").then(() => ({
    default: InicioSesion
  }))
)

// rutas modo lazy de RegistroSesion
const LazyRegistroSesion = lazy(() =>
  import("../../vistas/publicas/RegistroSesion").then(() => ({
    default: RegistroSesion
  }))
)

// rutas modo lazy de NoEncontrado
const LazyNoEncontrado = lazy(() =>
  import("../../vistas/compartidas/NoEncontrado").then(() => ({
    default: NoEncontrado
  }))
)

export const RuteoCompleto = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyPrincipal />} />
      <Route path="/login" element={<LazyInicioSesion />} />
      <Route path="/register" element={<LazyRegistroSesion />} />

      <Route path="*" element={<LazyNoEncontrado />} />      
    </Routes>
  )
}
