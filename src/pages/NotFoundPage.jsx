import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section>
        <h1 className='text-6xl text-center font-bold mb-4'>404 Not Found</h1>
        <p className='text-xl text-center mb-5'>This Page Does Not Exist !</p>
        <Link to='/' className='bg-indigo-700 hover:bg-indigo-900 rounded px-3 py-2 mt-4'>Go Back</Link>
    </section>
  )
}

export default NotFoundPage