import React from 'react'
import "@styles/NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <Link to="/">
                <a className="button" href="#">
                    <i className="icon-home"></i> Go back in initial page, is better.
                </a>
            </Link>
        </div>
    )
}

export default NotFound