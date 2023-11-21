import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Illustration, Music, Other, Videogames, Art3D } from './components';


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
		<BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/illustration" element={<Illustration />}/>
                <Route path="/videogames" element={<Videogames />} />
                <Route path="/music" element={<Music />} />
                <Route path="/other" element={<Other />} />
                <Route path="/art3D" element={<Art3D />} />
            </Routes>
			
        </BrowserRouter>
    </React.StrictMode>,
)
