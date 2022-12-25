import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import NewsPage from './pages/newsPage/NewsPage'
import Propertice from './pages/Propertice/Propertice'

function Routing() {
    return (
        <>
            <Routes>
<<<<<<< HEAD
                <Route path='/'  element= { <HomePage />  }/>
                <Route path='/news'  element= { <NewsPage />  }/>
                <Route path='/Propertice' element={<Propertice />} />
=======
                <Route path='/' element={<HomePage />} />
                <Route path='/news' element={<NewsPage />} />
>>>>>>> 2904be7f3ae0b811b7d7c03214e4d5c2ab3d7521
            </Routes>
        </>
    )
}

export default Routing;