import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Slider from "@modules/common/components/slider"

export const metadata: Metadata = {
  title: "Home | BHSwim",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      {/* Category section */}
      <section className="container w-full my-8 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 rounded-lg">
        {/* Left column: single square image */}
        <div className="aspect-square w-full h-full relative">
          {/* Slider Images */}
          <Slider />
        </div>
        {/* Right column: 2x2 grid of images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 h-full">
          {/* Grid 1 */}
          <div className="aspect-square w-full h-full relative group">
            <img
              src="/square-blue.png"
              alt="Grid 1"
              className="object-cover w-full h-full rounded-lg"
            />
            {/* Bottom text, hidden on hover */}
            <div className="absolute bottom-0 left-0 w-full bg-white/70 text-center py-2 rounded-b-lg transition-opacity duration-200 group-hover:opacity-0">
              Đoạn chữ ở cạnh dưới
            </div>
            {/* Popover, shown on hover */}
            <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-white rounded-lg shadow-lg p-3 w-full h-full flex flex-col items-center justify-center border border-gray-200">
                <ul className="space-y-2 w-full text-center">
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 1
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 2
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 3
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 4
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Grid 2 */}
          <div className="aspect-square w-full h-full relative group">
            <img
              src="/square-blue.png"
              alt="Grid 2"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/70 text-center py-2 rounded-b-lg transition-opacity duration-200 group-hover:opacity-0">
              Đoạn chữ ở cạnh dưới
            </div>
            <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-white rounded-lg shadow-lg p-3 w-full h-full flex flex-col items-center justify-center border border-gray-200">
                <ul className="space-y-2 w-full text-center">
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 1
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 2
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 3
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 4
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Grid 3 */}
          <div className="aspect-square w-full h-full relative group">
            <img
              src="/square-blue.png"
              alt="Grid 3"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/70 text-center py-2 rounded-b-lg transition-opacity duration-200 group-hover:opacity-0">
              Đoạn chữ ở cạnh dưới
            </div>
            <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-white rounded-lg shadow-lg p-3 w-full h-full flex flex-col items-center justify-center border border-gray-200">
                <ul className="space-y-2 w-full text-center">
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 1
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 2
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 3
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 4
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Grid 4 */}
          <div className="aspect-square w-full h-full relative group">
            <img
              src="/square-blue.png"
              alt="Grid 4"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/70 text-center py-2 rounded-b-lg transition-opacity duration-200 group-hover:opacity-0">
              Đoạn chữ ở cạnh dưới
            </div>
            <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-white rounded-lg shadow-lg p-3 w-full h-full flex flex-col items-center justify-center border border-gray-200">
                <ul className="space-y-2 w-full text-center">
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 1
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 2
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 3
                  </li>
                  <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                    Option 4
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight products section */}
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
            <div
              key={idx}
              className="flex flex-col items-left bg-white rounded-lg shadow group relative"
            >
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
          ))}
        </div>
      </section>

      {/* Product section */}
      <section className="container w-full my-8">
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
              <div
                key={idx}
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
                    <div className="text-primary font-bold text-base">
                      $49.00
                    </div>
                  </div>
                  {/* Part 3: Add to cart button at bottom */}
                  <div className="mt-auto">
                    <button className="bg-primary text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-primary/90 transition-colors w-full">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="container flex flex-col w-full">
        {/* Heading row */}
        <div className="w-full flex justify-between items-center mb-3 bg-white rounded-lg shadow p-3">
          <h2 className="text-3xl font-bold text-left">Latest Blogs</h2>
          <a
            href="#"
            className="flex items-center text-primary font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
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
          </a>
        </div>
        {/* Blogs */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Blog 1 */}
          <div className="bg-white rounded-lg shadow flex flex-col w-full md:w-1/2 p-4">
            <div className="relative mb-2">
              <img
                src="/square-blue.png"
                alt="Blog 1"
                className="w-full h-48 object-cover rounded-lg"
              />
              {/* Overlay: top left, primary text, white bg, rounded top corners, left aligned */}
              <div className="absolute bottom-0 left-0 font-bold uppercase bg-white px-6 py-3 rounded-tl-lg rounded-tr-lg text-primary text-sm flex items-center justify-start w-fit ml-4">
                April 9, 2024
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="font-semibold text-lg mb-1 line-clamp-2">
                Blog Title 1
              </div>
              <div className="text-gray-600 text-sm mb-3 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
                aliquam nunc, eget aliquam massa nisl quis neque.
              </div>
              <div className="mt-auto w-fit">
                <a
                  href="#"
                  className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-primary/90 transition-colors flex items-center"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Blog 2 */}
          <div className="bg-white rounded-lg shadow flex flex-col w-full md:w-1/2 p-4">
            <div className="relative mb-2">
              <img
                src="/square-blue.png"
                alt="Blog 2"
                className="w-full h-48 object-cover rounded-lg"
              />
              {/* Overlay: top left, primary text, white bg, rounded top corners, left aligned */}
              <div className="absolute bottom-0 left-0 font-bold uppercase bg-white px-6 py-3 rounded-tl-lg rounded-tr-lg text-primary text-sm flex items-center justify-start w-fit ml-4">
                April 10, 2024
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="font-semibold text-lg mb-1 line-clamp-2">
                Blog Title 2
              </div>
              <div className="text-gray-600 text-sm mb-3 line-clamp-3">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi.
              </div>
              <div className="mt-auto w-fit">
                <a
                  href="#"
                  className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-primary/90 transition-colors flex items-center"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands section */}
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
          {[...Array(8)].map((_, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center bg-white rounded-lg shadow aspect-square overflow-hidden group ${
                idx > 1 ? "hidden md:flex" : "flex"
              }`}
            >
              <img
                src="/square-yellow.png"
                alt={`Brand ${idx + 1}`}
                className="object-contain h-full w-full transition-opacity duration-300 group-hover:opacity-50"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
