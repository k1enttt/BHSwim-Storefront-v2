'use client'
export type CategoryGridItemProps = {
  imgSrc: string
  title: string
  link?: string
  options: {
    title: string
    link: string
  }[]
}

const CategoryGridItem = ({ imgSrc, title, link, options }: CategoryGridItemProps) => {
  return (
    <div className="aspect-square w-full h-full relative group">
      <img
        src={imgSrc}
        alt={title}
        className="object-cover w-full h-full rounded-lg"
      />
      {/* Bottom text, hidden on hover */}
      <div className="absolute bottom-0 left-0 w-full bg-white/70 text-center py-2 rounded-b-lg transition-opacity duration-200 group-hover:opacity-0">
        {title}
      </div>
      {/* Popover, shown on hover */}
      <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-white rounded-lg shadow-lg p-3 w-full h-full flex flex-col items-center justify-center border border-gray-200">
          <ul className="space-y-2 w-full text-center">
            {options.map((option, idx) => (
              <li
                key={idx}
                className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer"
                onClick={() => window.location.href = option.link}
              >
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default CategoryGridItem;