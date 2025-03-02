import React from 'react'

function PageContainer({ children }) {
    return (
        <div className='sm:w-10/12 max-w-5xl'>
            {children}
        </div>
    )
}

export default PageContainer