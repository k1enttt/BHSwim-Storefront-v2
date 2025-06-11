type Brand = {
  id: string | number;
  name: string;
  imageUrl: string;
};

type BrandsGridProps = {
  brands: Brand[];
};

const BrandsGrid: React.FC<BrandsGridProps> = ({ brands }) => {
  return (
    <section className="container w-full my-8">
      {/* Heading */}
      <div className="w-full flex justify-between items-center mb-3 bg-white rounded-lg shadow p-3">
        <h2 className="text-3xl font-bold text-left">Our Brands</h2>
        <div className="flex gap-2">
          <button
            className="w-10 h-10 rounded-lg bg-gray-100 text-gray-900 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
            aria-label="Previous"
          >
            {/* Left angle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="w-10 h-10 rounded-lg bg-gray-100 text-gray-900 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
            aria-label="Next"
          >
            {/* Right angle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Brands grid */}
      <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
        {brands.slice(0, 8).map((brand, idx) => (
          <div
            key={brand.id}
            className={`flex items-center justify-center bg-white rounded-lg shadow aspect-square overflow-hidden group ${
              idx > 1 ? "hidden md:flex" : "flex"
            }`}
          >
            <img
              src={brand.imageUrl}
              alt={brand.name}
              className="object-contain h-full w-full transition-opacity duration-300 group-hover:opacity-50"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandsGrid
