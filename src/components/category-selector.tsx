'use client'

import { useCategories } from '@/hooks/queries/categories'
import { TagButton } from './tag-button'

export function CategorySelector() {
  const { data: categoriesData } = useCategories()

  const categories = categoriesData?.categories

  if (!categories) {
    return
  }

  return (
    <div className="flex gap-3 flex-wrap">
      <TagButton active={true} text="Tudo" />
      {categories.map((category) => (
        <TagButton key={category.id} text={category.name} />
      ))}
    </div>
  )
}
