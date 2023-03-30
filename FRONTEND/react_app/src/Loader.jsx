import React from 'react'

export default function Loader() {
    return (
        <div className='text-center mt-3'>

            <div className="spinner-border text-danger" role="status">
            </div>
            <div className="visible">Please wait...</div>
        </div>
    )
}
