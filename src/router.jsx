import React from "react"
import{
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Filme from "./Pages/Filme"
import Home from "./Pages/Home"


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                path="/home"
                element={<Home />}
                />
                <Route
                path="/filme"
                element={<Filme/>}      
                />         
            </Routes>
        </BrowserRouter>
    )
}

export default Router