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
import AccountSettingsPage  from "./components/pages/AccountSettingsPage";
import LoggedInUserLandingPage  from "./components/pages/LoggedInUserLandingPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ApiProvider from "./contexts/ApiProvider";
import UserProvider from "./contexts/UserProvider";
import FlashProvider from "./contexts/FlashProvider";
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


export default function App() {
  return (
    <>
    <BrowserRouter>
      <ApiProvider>
        <FlashProvider>
          <UserProvider>
            <ScrollToTop/>
              <Navbar/>
                  <Routes>
                  <Route path='/' element={<HomePage/>}/>
                    <Route path="/login" element={
                      <PublicRoute><LoginPage/></PublicRoute>
                      }>
                    </Route>
                    <Route path="/register" element={
                      <PublicRoute><RegisterPage/></PublicRoute>
                      }>
                    </Route>
                    <Route path="/draws-info" element={
                      <PublicRoute><DrawsInfoPage/></PublicRoute>
                      }>
                    </Route>
                    <Route path="/results" element={
                      <PublicRoute><ResultsPage/></PublicRoute>
                      }>
                    </Route>
                    <Route path="/upcoming-results" element={
                      <PublicRoute><UpcomingResultsPage/></PublicRoute>
                      }>
                    </Route>
                    <Route path="*" element={
                      <PrivateRoute>
                        <Routes>
                          <Route path='/add-bonds' element={<AddBondsPage/>}/>
                          <Route path='/add-series' element={<AddBondSeriesPage/>}/>                        
                          <Route path='/account-settings' element={<AccountSettingsPage/>}/>
                          <Route path='/user' element={<LoggedInUserLandingPage/>}/>
                          <Route path='/search-results' element={<SearchResultsPage/>}/>
                          <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                      </PrivateRoute>
                    }/>
                  </Routes>
            <Footer/>
          </UserProvider>
        </FlashProvider> 
      </ApiProvider>
    </BrowserRouter>
    </>
  )
}

