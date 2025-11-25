'use client'

import { useState } from 'react'

export default function ProductDetail() {
  // Product information - easily changeable
  const productName = 'Kebaya wanita'
  const productDescription = 'Kebaya modern yang elegan dengan desain batik tradisional. Terbuat dari bahan berkualitas tinggi dengan detail lace yang indah. Cocok untuk acara formal maupun semi-formal. Tersedia dalam berbagai ukuran dan warna. Produk ini menggabungkan keindahan tradisional dengan sentuhan modern yang timeless.'
  const pricePerDay = 'Rp 150.000.000' // Change this to update the price

  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Left Column - Product Photo */}
        <div className="w-full">
          <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center overflow-hidden relative">
            <img
              src="/images/foto-kebaya-wanita.jpg"
              alt="Foto Produk - Kebaya wanita"
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
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700">{productName}</p>
          </div>

          {/* Produk Detail */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Produk Detail</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {productDescription}
            </p>
          </div>

          {/* Harga per hari */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Harga per hari</h3>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 break-words">{pricePerDay}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

