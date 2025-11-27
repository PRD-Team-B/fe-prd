/**
 * API Service Utility for fetching data from external APIs
 */

const API_BASE_URL = 'https://be-prd-production.up.railway.app'

export interface Review {
  id: number
  name: string
  review: string
  rating: number
}

interface Product {
  id: number
  title: string
  description: string
  price: string
  image: string
  quantity: number
}

interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

/**
 * Fetch reviews from the API
 * @param endpoint - The API endpoint path (default: '/products/1')
 * @returns Promise with reviews data
 */
export async function fetchReviews(endpoint: string = '/products/1'): Promise<Review[]> {
  try {
    const fullUrl = `${API_BASE_URL}${endpoint}`
    console.log('Fetching reviews from:', fullUrl)

    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors', // Explicitly set CORS mode
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`)
    }

    const result = await response.json()
    console.log('Raw API response:', result)

    // Check if the response has the expected structure
    if (result && result.data && result.data.reviews && Array.isArray(result.data.reviews)) {
      // Map API fields to component expected fields
      const mappedReviews: Review[] = result.data.reviews.map((review: any) => ({
        id: review.id,
        name: review.name,
        review: review.comments, // API uses 'comments', component expects 'review'
        rating: review.ratings   // API uses 'ratings', component expects 'rating'
      }))

      console.log('Successfully fetched and mapped reviews from API:', mappedReviews.length, 'reviews')
      return mappedReviews
    } else {
      console.error('Unexpected API response structure:', result)
      throw new Error('API response does not contain reviews data in expected format')
    }
  } catch (error) {
    console.error('Error fetching reviews from API:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })

    // Return fallback data if API fails
    console.log('Using fallback review data due to API failure')
    return [
      {
        id: 1,
        name: 'Sarah',
        review: 'The lace quality is amazing!',
        rating: 5
      },
      {
        id: 2,
        name: 'Michelle',
        review: 'Beautiful design and very comfortable to wear.',
        rating: 4
      },
      {
        id: 3,
        name: 'Yodha',
        review: 'I like the design, It looks elegant and fits perfectly.',
        rating: 5
      }
    ]
  }
}

/**
 * Fetch product details from the API
 * @param endpoint - The API endpoint path (default: '/products/1')
 * @returns Promise with product data
 */
export async function fetchProduct(endpoint: string = '/products/1'): Promise<Product> {
  try {
    const fullUrl = `${API_BASE_URL}${endpoint}`
    console.log('Fetching product from:', fullUrl)

    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
    })

    console.log('Response status:', response.status)

    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`)
    }

    const result = await response.json()
    console.log('Raw API response:', result)

    // Check if the response has the expected structure
    if (result && result.data) {
      // Map API fields to component expected fields
      const product: Product = {
        id: result.data.id,
        title: result.data.title || 'Kebaya wanita',
        description: result.data.description || 'Kebaya modern yang elegan dengan desain batik tradisional.',
        price: result.data.price || 'Rp 150.000.000',
        image: result.data.image || '/images/foto-kebaya-wanita.jpg',
        quantity: result.data.quantity || 1
      }

      console.log('Successfully fetched and mapped product from API:', product)
      return product
    } else {
      console.error('Unexpected API response structure:', result)
      throw new Error('API response does not contain product data in expected format')
    }
  } catch (error) {
    console.error('Error fetching product from API:', error)

    // Return fallback data if API fails
    console.log('Using fallback product data due to API failure')
    return {
      id: 1,
      title: 'Kebaya wanita',
      description: 'Kebaya modern yang elegan dengan desain batik tradisional. Terbuat dari bahan berkualitas tinggi dengan detail lace yang indah. Cocok untuk acara formal maupun semi-formal. Tersedia dalam berbagai ukuran dan warna. Produk ini menggabungkan keindahan tradisional dengan sentuhan modern yang timeless.',
      price: 'Rp 150.000.000',
      image: '/images/foto-kebaya-wanita.jpg',
      quantity: 1
    }
  }
}

/**
 * Generic API fetch function
 * @param endpoint - The API endpoint URL
 * @param options - Fetch options (method, headers, etc.)
 * @returns Promise with API response
 */
export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: ApiResponse<T> = await response.json()
    return result
  } catch (error) {
    console.error('API fetch error:', error)
    return {
      data: null as T,
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
