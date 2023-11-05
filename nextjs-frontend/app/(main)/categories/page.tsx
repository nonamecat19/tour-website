import IF from '@/utils/If'
import CategoryList from '@/components/CategoryList'
import { useGetCategoryList } from '@/graphql/query'
import BaseHeading from '@/components/BaseHeading'

export default async function CategoriesPage() {
  const data = await useGetCategoryList()
  return (
    <>
      <BaseHeading title='Категорії' description='Категорії турів' />
      <IF condition={data}>
        <CategoryList data={data} />
      </IF>
    </>
  )
}
