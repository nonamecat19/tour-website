'use client'
import IF from '@/utils/If'
import CategoryList from '@/components/CategoryList'
import { useGetCategoryList } from '@/graphql/query'

export default function CategoriesPage() {
  const { data } = useGetCategoryList()
  return (
    <IF condition={data}>
      <CategoryList data={data} />
    </IF>
  )
}
