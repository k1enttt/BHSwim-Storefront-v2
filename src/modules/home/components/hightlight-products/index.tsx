import ProductCard from "@modules/common/components/product-card"

const HighlightProducts = () => {
  return (
    <section className="container w-full my-8">
      {/* Heading */}
      <div className="w-full flex justify-center items-center mb-3 bg-white rounded-lg shadow p-3">
        <h2 className="text-3xl font-bold text-center w-full">
          Highlight Products
        </h2>
      </div>
      {/* Products grid */}
      <div className="grid grid-cols-2 grid-rows-6 md:grid-cols-6 md:grid-rows-2 gap-4">
        {[...Array(12)].map((_, idx) => (
          <ProductCard key={idx} index={idx} />
        ))}
      </div>
    </section>
  )
}

export default HighlightProducts
