import ProductCardMini from "@modules/common/components/product-card-mini";

const ProductSection = () => {
  return ( <section className="container w-full my-8">
        {/* Heading */}
        <div className="w-full flex justify-between items-center mb-3 bg-white rounded-lg shadow p-3">
          <h2 className="text-3xl font-bold text-left">Product Section</h2>
          {/* Desktop tool buttons */}
          <div className="hidden md:flex gap-2">
            <button className="bg-primary text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-primary/90 transition-colors">
              Button 1
            </button>
            <button className="bg-gray-100 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-primary hover:text-white transition-colors">
              Button 2
            </button>
            <button className="bg-gray-100 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-primary hover:text-white transition-colors">
              Button 3
            </button>
            <button className="bg-gray-100 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-primary hover:text-white transition-colors">
              Button 4
            </button>
          </div>

          {/* Mobile square buttons with rounded corners */}
          <div className="flex md:hidden gap-2">
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
        {/* Mobile tool buttons: dropdown button fills container */}
        <div className="flex md:hidden w-full relative">
          <select className="w-full rounded-lg bg-primary text-white font-semibold px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-primary mb-3 pr-10 appearance-none">
            <option className="text-gray-900">Button 1</option>
            <option className="text-gray-900">Button 2</option>
            <option className="text-gray-900">Button 3</option>
            <option className="text-gray-900">Button 4</option>
          </select>
          {/* Angle down icon, absolutely positioned */}
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center mb-3">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {/* Row: Image + Product Grid */}
        <div className="flex w-full gap-4 md:flex-row flex-col">
          {/* Image - 1/4 width, hidden on mobile */}
          <div className="w-1/4 hidden md:block">
            <img
              src="/square-red.png"
              alt="Product Section"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>

          {/* Product Grid - 3/4 width on desktop, full width on mobile */}
          <div className="md:grid grid-cols-3 grid-rows-2 gap-4 flex flex-col w-full md:w-3/4">
            {/* Mobile: show only 2 products in 1 column, 2 rows */}
            {[...Array(6)].map((_, idx) => (
              <ProductCardMini key={idx} index={idx} />
            ))}
          </div>
        </div>
      </section> );
}
 
export default ProductSection;