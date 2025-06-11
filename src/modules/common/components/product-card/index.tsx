'use client'
type ProductCardProps = {
  index: number
}
const ProductCard = ({ index: idx }: ProductCardProps) => {
  return (
    <div className="flex flex-col items-left bg-white rounded-lg shadow group relative">
      <div className="w-full relative mb-2">
        <img
          src="/square-yellow.png"
          alt={`Product ${idx + 1}`}
          className="w-full aspect-square object-cover rounded-lg"
        />
        {/* Tools overlay - only over the image */}
        <div className="absolute top-0 left-0 w-full h-full flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <div className="w-full flex gap-1 px-2 pb-2">
            <button className="w-1/5 h-8 bg-primary text-white rounded flex items-center justify-center hover:bg-primary/80 transition-colors">
              {/* Heart icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                />
              </svg>
            </button>
            <button className="w-1/5 h-8 bg-primary text-white rounded flex items-center justify-center hover:bg-primary/80 transition-colors">
              {/* Eye icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
            <button className="w-3/5 h-8 bg-secondary text-white rounded flex items-center justify-center hover:bg-secondary/80 transition-colors">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="font-semibold text-left mb-1 p-3">
        Product Title {idx + 1}
      </div>
      <div className="text-primary font-bold text-left p-3">$99.00</div>
    </div>
  )
}

export default ProductCard
