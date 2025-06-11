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
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
