import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from "./components/pages/HomePage"
import LoginPage from "./components/pages/LoginPage"
import RegisterPage  from "./components/pages/RegisterPage"
import DrawsInfoPage  from "./components/pages/DrawsInfoPage"
import ResultsPage  from "./components/pages/ResultsPage"
import UpcomingResultsPage  from "./components/pages/UpcomingResultsPage"
import Container from '@mui/material/Container';
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/draws-info' element={<DrawsInfoPage/>}/>
            <Route path='/results' element={<ResultsPage/>}/>
            <Route path='/upcoming-results' element={<UpcomingResultsPage/>}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    
  )
}

