import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { BrowserRouter, Navigate } from 'react-router-dom';
// import { Routes, Route } from "react-router-loading";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ApiProvider from "./contexts/ApiProvider";
import UserProvider from "./contexts/UserProvider";
import LoadingBarProvider from "./contexts/LoadingBarProvider";
import FlashProvider from "./contexts/FlashProvider";
import AnimatedRoutes from "./components/AnimatedRoutes"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <ApiProvider>
          <FlashProvider>
            <LoadingBarProvider>
              <UserProvider>
                <ScrollToTop />
                <Navbar />
                <AnimatedRoutes/>
                <Footer />
              </UserProvider>
            </LoadingBarProvider>
          </FlashProvider>
        </ApiProvider>
      </BrowserRouter>
    </>
  )
}

