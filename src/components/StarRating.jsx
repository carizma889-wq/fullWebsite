
// components/StarRating.jsx
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarOutlineIcon from '@mui/icons-material/StarOutline'

function StarRating({ fullStars, halfStars, emptyStars }) {
  return (
    <div className="stars">
      {Array.from({ length: fullStars }).map((_, i) => (
        <StarIcon key={`full-${i}`} sx={{ color: '#FFAD33' }} />
      ))}
      {Array.from({ length: halfStars }).map((_, i) => (
        <StarHalfIcon key={`half-${i}`} sx={{ color: '#FFAD33' }} />
      ))}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <StarOutlineIcon key={`empty-${i}`} sx={{ color: '#FFAD33' }} />
      ))}
    </div>
  )
}

export default StarRating