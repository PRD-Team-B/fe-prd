/**
 * Data Service Utility for Product & Review API
 */

export interface Review {
  id: number
  name: string
  review: string
  rating: number
}

export interface Product {
  id: number
  title: string
  description: string
  price: string
  image: string
  quantity: number
  averageRating?: number
  reviews?: Review[]        // optional jika API ikut mengirimkan review
}

const API_BASE_URL = "https://be-prd-production.up.railway.app/products/1"

/**
 * Fetch Reviews Data from API
 */
export async function fetchReviews(): Promise<Review[]> {
  const res = await fetch(API_BASE_URL, {
    cache: "no-store", // selalu ambil data terbaru
  })

  if (!res.ok) {
    throw new Error("Failed to fetch reviews")
  }

  const result = await res.json()

  // API return: { message: "success", data: { ..., reviews: [...] } }
  if (result.data && result.data.reviews) {
    return result.data.reviews.map((review: any) => ({
      id: review.id,
      name: review.name,
      review: review.comments,
      rating: review.ratings
    }))
  }

  return []
}

/**
 * Fetch Product Data from API
 */
export async function fetchProduct(): Promise<Product> {
  const res = await fetch(API_BASE_URL, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }

  const result = await res.json()

  // API return: { message: "success", data: {...} }
  if (result.data) {
    return {
      id: result.data.id,
      title: result.data.title,
      description: "Kebaya modern yang elegan dengan desain batik tradisional. Terbuat dari bahan berkualitas tinggi dengan detail lace yang indah. Cocok untuk acara formal maupun semi-formal. Tersedia dalam berbagai ukuran dan warna. Produk ini menggabungkan keindahan tradisional dengan sentuhan modern yang timeless.",
      price: "Rp 150.000.000",
      image: result.data.photo,
      quantity: result.data.quantity,
      averageRating: result.data.averageRating
    }
  }

  throw new Error("No data available from API")
}
