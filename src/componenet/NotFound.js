import React from 'react'
import {Link} from 'react-router-dom'
export const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Ooops!!</h2>
            <p>Page Not Found!!!</p>
            <Link to='/'>Back To Home...</Link>
        </div>
    )
}
