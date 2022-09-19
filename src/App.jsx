import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage  from "./components/pages/RegisterPage";
import DrawsInfoPage  from "./components/pages/DrawsInfoPage";
import ResultsPage  from "./components/pages/ResultsPage";
import SearchResultsPage  from "./components/pages/SearchResultsPage";
import AddBondsPage  from "./components/pages/AddBondsPage";
import AddBondSeriesPage  from "./components/pages/AddBondSeriesPage";
import UpcomingResultsPage  from "./components/pages/UpcomingResultsPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ApiProvider from "./contexts/ApiProvider";
import UserProvider from "./contexts/UserProvider";
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


export default function App() {
  return (
    <>
    <BrowserRouter>
      <ApiProvider>
        <UserProvider>
          <ScrollToTop/>
            <Navbar/>
                <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/login' element={
                    <PublicRoute><LoginPage/></PublicRoute>
                  }/>
                  <Route path='/register' element={
                    <PublicRoute><RegisterPage/></PublicRoute>
                  }/>
                  <Route path="*" element={
                    <PrivateRoute>
                      <Routes>
                        <Route path='/draws-info' element={<DrawsInfoPage/>}/>
                        <Route path='/search-results' element={<SearchResultsPage/>}/>
                        <Route path='/add-bonds' element={<AddBondsPage/>}/>
                        <Route path='/add-series' element={<AddBondSeriesPage/>}/>
                        <Route path='/results' element={<ResultsPage/>}/>
                        <Route path='/upcoming-results' element={<UpcomingResultsPage/>}/>
                        <Route path="*" element={<Navigate to="/" />} />
                      </Routes>
                    </PrivateRoute>
                  }/>
                </Routes>
          <Footer/>
        </UserProvider>
      </ApiProvider>
    </BrowserRouter>
    </>
    
  )
}

