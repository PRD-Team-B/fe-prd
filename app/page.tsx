'use client'

import Navbar from '@/components/Navbar'
import ProductDetail from '@/components/ProductDetail'
import ReviewSection from '@/components/ReviewSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
        <ProductDetail />
        <ReviewSection />
      </main>
    </div>
  )
}

