import React from 'react'

const Loading = ()=>{
  return(
    <div className="flex justify-center items-center">
      <div className="animate-pulse flex">
        <div className="rounded-full bg-forest w-64 h-64 flex justify-center items-center">
          <h1 className="text-magnolia text-4xl py-16">Loading...</h1>
        </div>
      </div>
    </div>
  )
}

export default Loading