'use client'
type ProductCardProps = {
  index: number
}

const ProductCardMini = ({ index: idx }: ProductCardProps) => {
  return (
    <div
      className={`rounded-lg shadow p-2 flex flex-row gap-2 items-stretch h-52 md:h-40 bg-white 
                  ${idx > 1 ? "hidden md:flex" : "flex"}`}
    >
      {/* Column 1: Image, 1/3 width */}
      <div className="w-2/5 h-full flex items-center justify-center relative">
        <img
          src="/square-blue.png"
          alt={`Product ${idx + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
        {/* Discount overlay */}
        <div className="absolute top-2 left-2 bg-highlight text-highlight-foreground px-3 py-1 rounded-md text-sm font-bold shadow">
          -20%
        </div>
      </div>
      {/* Column 2: Info + Button, 2/3 width */}
      <div className="w-3/5 flex flex-col justify-between">
        {/* Part 2: Name & Price */}
        <div>
          <div className="font-semibold text-lg mb-1">
            Product Card {idx + 1}
          </div>
          <div className="text-primary font-bold text-base">$49.00</div>
        </div>
        {/* Part 3: Add to cart button at bottom */}
        <div className="mt-auto">
          <button className="bg-primary text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-primary/90 transition-colors w-full">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCardMini
