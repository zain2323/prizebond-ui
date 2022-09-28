import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { BrowserRouter, Navigate } from 'react-router-dom';
// import { Routes, Route } from "react-router-loading";
import AnimatedRoutes from "./components/AnimatedRoutes"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  )
}

