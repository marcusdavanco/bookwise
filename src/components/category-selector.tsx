'use client'

import { useCategories } from '@/hooks/queries/categories'
import { TagButton } from './tag-button'

interface CategorySelectorProps {
  currentCategory: string
  selectFn: (category: string) => void
}

export function CategorySelector({
  currentCategory,
  selectFn,
}: CategorySelectorProps) {
  const { data: categoriesData } = useCategories()

  const categories = categoriesData?.categories

  if (!categories) {
    return
  }

  return (
    <div className="flex gap-3 flex-wrap">
      <TagButton
        active={currentCategory === ''}
        text="Tudo"
        onClick={() => selectFn('')}
      />
      {categories.map((category) => (
        <TagButton
          key={category.id}
          text={category.name}
          active={currentCategory === category.id}
          onClick={() => selectFn(category.id)}
        />
      ))}
    </div>
  )
}
