export interface BlogCardProps {
  imgSrc: string
  title: string
  description: string
  link: string
  publishedAt: string
}

const BlogCard = ({ imgSrc, title, description, link, publishedAt }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow flex flex-col w-full md:w-1/2 p-4">
      <div className="relative mb-2">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
        {/* Overlay: top left, primary text, white bg, rounded top corners, left aligned */}
        <div className="absolute bottom-0 left-0 font-bold uppercase bg-white px-6 pt-3 pb-2 rounded-tl-lg rounded-tr-lg text-primary text-sm flex items-center justify-start w-fit ml-4">
          {publishedAt}
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="font-semibold text-lg mb-1 line-clamp-2">
          {title}
        </div>
        <div className="text-gray-600 text-sm mb-3 line-clamp-3">
          {description}
        </div>
        <div className="mt-auto w-fit">
          <a
            href={link}
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
  )
}

export default BlogCard
