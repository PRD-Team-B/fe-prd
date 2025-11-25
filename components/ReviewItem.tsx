'use client'

import { useState } from 'react'
import { truncateText } from '@/utils/textTruncate'

interface ReviewItemProps {
  name: string
  review: string
  rating: number
}

export default function ReviewItem({ name, review, rating }: ReviewItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { truncated, full, isTruncated } = truncateText(review, 200)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200 overflow-hidden w-full">
      <div className="flex items-start justify-between mb-1 sm:mb-2">
        <h4 className="text-sm sm:text-base font-semibold text-gray-800 break-words">{name}</h4>
        <span className="text-sm sm:text-base font-semibold text-gray-700 ml-2 flex-shrink-0">Rating: {rating}</span>
      </div>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words overflow-wrap-anywhere word-break-break-word">
        {isExpanded ? full : truncated}
      </p>
      {isTruncated && (
        <button
          onClick={handleToggle}
          className="mt-2 text-sm sm:text-base text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded py-1"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Read less' : 'Read more'}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  )
}

