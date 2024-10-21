import React from 'react'

const NotFound: React.FC = () => {
  return (
    <div className='w-full h-[calc(100vh-5rem)] flex flex-col bg-notFound_bg'>
      <div className='flex items-center justify-center w-full h-full'>
        <p className='text-8xl mr-14'>404</p>
        <div className='bg-white w-1 h-52'></div>
        <p className='text-4xl ml-14'>This page could not be found.</p>
      </div>

    </div>
  )
}

export default NotFound