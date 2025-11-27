'use client'

import { useState, useEffect } from 'react'
import ReviewItem from './ReviewItem'
import { fetchReviews, Review } from '@/utils/apiService'

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true)
        setError(null)
        const reviewsData = await fetchReviews()
        setReviews(reviewsData)
      } catch (error) {
        console.error('Failed to load reviews:', error)
        setError('Failed to load reviews. Please try refreshing the page.')
      } finally {
        setLoading(false)
      }
    }
    loadReviews()
  }, [])

  // Calculate average rating
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '0.0'

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full max-w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0 break-words">Review Section</h2>
        <div className="flex items-center gap-2">
          <span className="text-2xl sm:text-3xl font-bold text-gray-800">Rating: {averageRating}</span>
          <span className="text-sm text-gray-600">({reviews.length} reviews)</span>
        </div>
      </div>
      
      {/* Reviews List */}
      <div className="space-y-3 sm:space-y-4 w-full overflow-hidden">
        {reviews.map((review) => (
          <ReviewItem key={review.id} name={review.name} review={review.review} rating={review.rating} />
        ))}
      </div>
    </div>
  )
}

