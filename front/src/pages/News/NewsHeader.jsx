import React from 'react'
import { Link } from 'react-router-dom'

function NewsHeader() {
    return (
        <div>
            <header>
                <div className="header">
                    <span>
                        <h1>Propertice</h1>
                        <span><Link to='/'>Home</Link>/<Link to='/'>Properties</Link></span>
                    </span>
                </div>
            </header>
        </div>
    )
}

export default NewsHeader