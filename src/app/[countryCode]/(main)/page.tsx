import { Metadata } from "next"

import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Slider from "@modules/common/components/slider"
import ProductSection from "@modules/home/components/product-section"
import CategoryGrid from "@modules/home/components/category-grid"
import HightlightProducts from "@modules/home/components/hightlight-products"
import BlogList from "@modules/home/components/blog-list"
import BrandsGrid from "@modules/home/components/brand-grid"

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
      {/* Category section */}
      <section className="container w-full my-8 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 rounded-lg">
        <div className="aspect-square w-full h-full relative">
          <Slider />
        </div>
        <CategoryGrid
          categoryList={[
            {
              imgSrc: "/square-blue.png",
              title: "Đoạn chữ ở cạnh dưới",
              options: [
                { title: "Option 1", link: "/option1" },
                { title: "Option 2", link: "/option2" },
                { title: "Option 3", link: "/option3" },
                { title: "Option 4", link: "/option4" },
              ],
            },
            {
              imgSrc: "/square-blue.png",
              title: "Đoạn chữ ở cạnh dưới",
              options: [
                { title: "Option 1", link: "/option1" },
                { title: "Option 2", link: "/option2" },
                { title: "Option 3", link: "/option3" },
                { title: "Option 4", link: "/option4" },
              ],
            },
            {
              imgSrc: "/square-blue.png",
              title: "Đoạn chữ ở cạnh dưới",
              options: [
                { title: "Option 1", link: "/option1" },
                { title: "Option 2", link: "/option2" },
                { title: "Option 3", link: "/option3" },
                { title: "Option 4", link: "/option4" },
              ],
            },
            {
              imgSrc: "/square-blue.png",
              title: "Đoạn chữ ở cạnh dưới",
              options: [
                { title: "Option 1", link: "/option1" },
                { title: "Option 2", link: "/option2" },
                { title: "Option 3", link: "/option3" },
                { title: "Option 4", link: "/option4" },
              ],
            },
          ]}
        />
      </section>
      <HightlightProducts />

      <ProductSection />

      <BlogList
        blogs={[
          {
            imgSrc: "/square-blue.png",
            title: "Blog Title 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.",
            link: "#",
            publishedAt: "April 9, 2024",
          },
          {
            imgSrc: "/square-blue.png",
            title: "Blog Title 2",
            description:
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
            link: "#",
            publishedAt: "April 10, 2024",
          },
        ]}
      />

      <BrandsGrid
        brands={[
          {
            id: 1,
            name: "Brand 1",
            imageUrl: "/square-yellow.png",
          },
          {
            id: 2,
            name: "Brand 2",
            imageUrl: "/square-yellow.png",
          },
          {
            id: 3,
            name: "Brand 3",
            imageUrl: "/square-yellow.png",
          },
          {
            id: 4,
            name: "Brand 4",
            imageUrl: "/square-yellow.png",
          },
          {
            id: 5,
            name: "Brand 5",
            imageUrl: "/square-yellow.png",
          },
          {
            id: 6,
            name: "Brand 6",
            imageUrl: "/square-yellow.png",
          },
          {
            id: 7,
            name: "Brand 7",
            imageUrl: "/square-yellow.png",
          },
          {
            id: 8,
            name: "Brand 8",
            imageUrl: "/square-yellow.png",
          },
        ]}
      />
    </>
  )
}
