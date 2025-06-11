import BlogCard from "@modules/common/components/blog-card"

export interface Blog {
  imgSrc: string
  title: string
  description: string
  link: string
  publishedAt: string
}

export interface BlogListProps {
  blogs: Blog[]
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
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
        {blogs.map((blog, idx) => (
          <BlogCard
            key={idx}
            imgSrc={blog.imgSrc}
            title={blog.title}
            description={blog.description}
            link={blog.link}
            publishedAt={blog.publishedAt}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogList
