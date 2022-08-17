import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div>Home</div>
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
        </>
    )
}

export default Home