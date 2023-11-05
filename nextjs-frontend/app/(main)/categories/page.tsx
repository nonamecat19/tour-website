'use client'
import IF from '@/utils/If'
import CategoryList from '@/components/CategoryList'
import { useGetCategoryList } from '@/graphql/query'
import BaseHeading from "@/components/BaseHeading";

export default function CategoriesPage() {
  const { data } = useGetCategoryList()
  return (
    <>
      <BaseHeading
        title="Категорії"
        description="Категорії турів"
      />
      <IF condition={data}>
        <CategoryList data={data} />
      </IF>
    </>
  )
}
