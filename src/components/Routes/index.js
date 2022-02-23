import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../pages/Home'
import About from '../../pages/About';
import Contact from '../../pages/Contact'
import Programs from '../../pages/Programs'
import Resources from '../../pages/Resources'
import MeetTheITOs from '../../pages/MeetTheITOs'
import TwentyFiveUnderTwentyFiveIP from '../../pages/TwentyFiveUnderTwentyFiveIP';



function ApplicationRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/meettheitos" element={<MeetTheITOs />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/twentyfiveundertwentyfive" element={<TwentyFiveUnderTwentyFiveIP />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRouter
