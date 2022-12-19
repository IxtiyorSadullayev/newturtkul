import React from 'react'
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import NewsPage from './pages/newsPage/NewsPage'

function Routing() {
  return (
        <>
            <Routes>
                <Route path='/'  element= { <HomePage />  }/>
                <Route path='/news'  element= { <NewsPage />  }/>
            </Routes>
        </>
    )
}

export default Routing;