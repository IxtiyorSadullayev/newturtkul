import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import NewsPage from './pages/newsPage/NewsPage'
import Propertice from './pages/Propertice/Propertice'

function Routing() {
    return (
        <>
            <Routes>
                <Route path='/'  element= { <HomePage />  }/>
                <Route path='/news'  element= { <NewsPage />  }/>
                <Route path='/Propertice' element={<Propertice />} />
                {/* <Route path='/' element={<HomePage />} /> */}
                <Route path='/news' element={<NewsPage />} />
            </Routes>
        </>
    )
}

export default Routing;