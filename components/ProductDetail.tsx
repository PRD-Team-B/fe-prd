'use client'

import { useState, useEffect } from 'react'
import { fetchProduct, Product } from '@/utils/apiService'

export default function ProductDetail() {
  // Product information - easily changeable
  const [product, setProduct] = useState<Product>({
    id: 1,
    title: '',
    description: '',
    price: '',
    image: '',
    quantity: 0,
    averageRating: 0
  })

  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

   useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await fetchProduct()
        setProduct(productData)
      } catch (error) {
        console.error('Failed to load product:', error)
      }
    }
    loadProduct()
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Left Column - Product Photo */}
        <div className="w-full">
          <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center overflow-hidden relative">
            <img
              src={product.image}
              alt={`Foto Produk - ${product.title}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                setImageError(true)
                const target = e.currentTarget
                target.style.display = 'none'
              }}
            />
            {imageError && (
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-gray-500 p-4 sm:p-6 bg-gray-100">
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md mb-2 sm:mb-3">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Foto Produk</p>
                <p className="text-center text-xs text-gray-500">Gambar tidak dapat dimuat</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Product Information */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Nama */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Nama</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700">{product.title}</p>
          </div>

          {/* Deskripsi */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Deskripsi</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Harga */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Harga</h3>
            <p className="text-lg sm:text-xl font-bold text-green-600">{product.price}</p>
          </div>

          {/* Rating Rata-rata */}
          {product.averageRating && (
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Rating Rata-rata</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        star <= Math.floor(product.averageRating!)
                          ? 'text-yellow-400 fill-current'
                          : star <= product.averageRating!
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm sm:text-base font-medium text-gray-700">
                  {product.averageRating.toFixed(1)} / 5.0
                </span>
              </div>
            </div>
          )}

           {/* Quantity */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Quantity</h3>
            <p className="text-lg sm:text-xl font-semibold text-gray-700">{product.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

