'use client'

import { useState } from 'react'
import ReviewItem from './ReviewItem'

interface Review {
  id: number
  name: string
  review: string
  rating: number
}

export default function ReviewSection() {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Sari Indah',
      review: 'Produk sangat bagus dan sesuai dengan deskripsi. Kualitas bahan sangat baik dan nyaman dipakai. Kebaya ini sangat cocok untuk acara pernikahan. Detail lace-nya sangat indah dan rapi. Saya sangat puas dengan pembelian ini dan akan merekomendasikan ke teman-teman.',
      rating: 5
    },
    {
      id: 2,
      name: 'Dewi Lestari',
      review: 'Sangat memuaskan!',
      rating: 4
    },
    {
      id: 3,
      name: 'Rina Sari',
      review: 'Kebaya yang sangat elegan dan berkualitas tinggi. Bahan yang digunakan sangat nyaman dan tidak mudah kusut. Desainnya modern namun tetap mempertahankan nilai tradisional. Cocok untuk berbagai acara formal. Pelayanan juga sangat baik dan pengiriman cepat. Saya sangat senang dengan produk ini dan pasti akan order lagi di masa depan untuk acara-acara penting lainnya.',
      rating: 5
    },
    {
      id: 4,
      name: 'Anissa nurhaliza',
      review: 'adadadwKebaya yang sangat elegan dan berkualitas tinggi. Bahan yang digunakan sangat nyaman dan tidak mudah kusut. Desainnya modern namun tetap mempertahankan nilai tradisional. Cocok untuk berbagai acara formal. Pelayanan juga sangat baik dan pengiriman cepat. Saya sangat senang dengan produk ini dan pasti akan order lagi di masa depan untuk acara-acara penting lainnya..',
      rating: 4
    }
  ])

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

