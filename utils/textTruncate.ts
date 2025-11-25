/**
 * Utility function to truncate text and add "Read more" functionality
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation (default: 200)
 * @returns Object with truncated text and full text
 */
export function truncateText(text: string, maxLength: number = 200): {
  truncated: string
  full: string
  isTruncated: boolean
} {
  const full = text.trim()
  const isTruncated = full.length > maxLength
  
  if (!isTruncated) {
    return {
      truncated: full,
      full: full,
      isTruncated: false
    }
  }

  // Truncate at the last space before maxLength to avoid cutting words
  const truncated = full.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
  
  return {
    truncated,
    full,
    isTruncated: true
  }
}

