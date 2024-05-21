import React from 'react'
import {Link} from 'react-router-dom'


const Card = ({title='For Developers', content='Browse our React jobs and start your career today', buttonContent='Browse Jobs', bg='bg-gray-100', redirectTo='/jobs'}) => {
  return (
    <div className = {`${bg} p-6 rounded-lg shadow-md`} >
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className="mt-2 mb-4">
      {content}
    </p>
    <Link
      to={redirectTo}
      className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
    >
      {buttonContent}
    </Link>
  </div>
  )
}

export default Card