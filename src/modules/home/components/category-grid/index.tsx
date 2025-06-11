import CategoryGridItem, { CategoryGridItemProps } from "../category-grid-item"

export type CategoryGridProps = {
  categoryList: CategoryGridItemProps[]
}

const CategoryGrid = ({ categoryList }: CategoryGridProps) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 h-full">
      {categoryList.map((item, idx) => (
        <CategoryGridItem key={idx} {...item} />
      ))}
    </div>
  )
}

export default CategoryGrid
