import React from "react";
import {ErrorBoundary} from "../components/ErrorBoundary";
import {Main} from "../pages/Main";

export function App() {
    return (
        <ErrorBoundary>
            <div>
                <Main/>
            </div>
        </ErrorBoundary>
)
}