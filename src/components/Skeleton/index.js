import React from 'react'
import StyledSkeleton from './style'

function Skeleton({ type = "mini-card" } = {}) {

  const MiniCardSkeleton = () => {
    return (
      <div className="w-64 h-32 m-4 my-8 p-4 bg-white rounded-lg">
        <div className="my-2 rounded-full w-1/3 h-4 bg-gray-400"></div>
        <div className="my-2 rounded-full w-1/2 h-4 bg-gray-400"></div>
        <div className="my-2 rounded-full w-full h-4 bg-gray-400"></div>
        <div className="my-2 rounded-full w-1/2 h-4 bg-gray-400"></div>
      </div>
    )
  }

  const CardSkeleton = () => {
    return (
      <div className="p-4 flex flex-col justify-end bg-white rounded-lg" style={{ width: 400, height: 400 }}>

        <div className="my-2 rounded w-full h-64 bg-gray-400"></div>
        <div className="my-2 rounded-full w-1/3 h-4 bg-gray-400"></div>
        <div className="my-2 rounded-full w-1/2 h-4 bg-gray-400"></div>
        <div className="my-2 rounded-full w-full h-4 bg-gray-400"></div>
        <div className="my-2 rounded-full w-1/2 h-4 bg-gray-400"></div>
      </div>
    )
  }

  const SkeletonTemplate = () => {
    if (type === "mini-card") {
      return <MiniCardSkeleton />
    } else if (type === "card") {
      return <CardSkeleton />
    }
    throw Error("No supported Skeleton template")
  }

  // const SkeletonTemplateRepeater = () => {
  //   return [...Array(repeat)].map(index => <SkeletonTemplate key={index} />)
  // }

  return (
    <StyledSkeleton>
      <SkeletonTemplate />
    </StyledSkeleton>
  )
}

export default Skeleton