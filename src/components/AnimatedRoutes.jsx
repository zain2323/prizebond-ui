import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DrawsInfoPage from "./pages/DrawsInfoPage";
import ResultsPage from "./pages/ResultsPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import AddBondsPage from "./pages/AddBondsPage";
import AddBondSeriesPage from "./pages/AddBondSeriesPage";
import UpcomingResultsPage from "./pages/UpcomingResultsPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import LoggedInUserLandingPage from "./pages/LoggedInUserLandingPage";
import PrizeResultPage from "./pages/PrizeResultPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<HomePage />} />
                <Route path="/login" element={
                    <PublicRoute><LoginPage /></PublicRoute>
                }>
                </Route>
                <Route path="/register" element={
                    <PublicRoute><RegisterPage /></PublicRoute>
                }>
                </Route>
                <Route path="/draws-info" element={
                    <PublicRoute><DrawsInfoPage /></PublicRoute>
                }>
                </Route>
                <Route path="/results" element={
                    <PublicRoute><ResultsPage /></PublicRoute>
                }>
                </Route>
                <Route path="/upcoming-results" element={
                    <PublicRoute><UpcomingResultsPage /></PublicRoute>
                }>
                </Route>
                <Route path="*" element={
                    <PrivateRoute>
                        <Routes>
                            <Route path='/add-bonds' element={<AddBondsPage />} />
                            <Route path='/add-series' element={<AddBondSeriesPage />} />
                            <Route path='/account-settings' element={<AccountSettingsPage />} />
                            <Route path='/user' element={<LoggedInUserLandingPage />} />
                            <Route path='/search-results' element={<SearchResultsPage />} />
                            <Route path='/prize-result' element={<PrizeResultPage />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </PrivateRoute>
                } />
            </Routes>
        </AnimatePresence>
    )
}