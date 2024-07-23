import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <Link to="/" className='d-flex justify-content-center'>
            <img src="https://support.start.me/hc/article_attachments/12421647432722" alt="" />
        </Link>
    )
}

export default NotFoundPage
