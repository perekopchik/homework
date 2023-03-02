import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ErrorBoundary} from "../components/ErrorBoundary";
import {Header} from "../components/Header";
import {Contacts} from "../pages/Contacts";
import {Main} from "../pages/Main";

export function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/contacts" element={<Contacts/>} />
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    )
}