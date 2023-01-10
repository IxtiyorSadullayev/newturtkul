import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './Admin/Form'
import HomePage from './pages/homePage/HomePage'
import News from './pages/News/News'
import Footer from './pages/Propertice/Footer'
import Propertice from './pages/Propertice/Propertice'

function Routing() {
    return (
        <div>
            <Routes>
                <Route path='/'  element= { <HomePage />  }/>
                <Route path='/Propertice' element={<Propertice />} />
                <Route path='/News' element={<News />} />
                <Route path='/admin' element={<Form />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Routing;