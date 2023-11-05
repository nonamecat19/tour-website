import { useGetCategory } from '@/graphql/query'
import BaseHeading from '@/components/BaseHeading'
import TourList from '@/components/TourList'

interface IProps {
  params: { id: string }
}

export default async function CategoryIdPage({ params }: IProps) {
  const data = await useGetCategory(params.id)
  const { name, preview, tours } = data.category.data.attributes
  return (
    <>
      <BaseHeading
        title={name}
        description='Список турів по цій категорії'
        image={preview.data.attributes.url}
      />

      <TourList data={tours} />
    </>
  )
}
