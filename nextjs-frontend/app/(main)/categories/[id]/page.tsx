import { useGetCategory } from '@/graphql/query'
import BaseHeading from '@/components/BaseHeading'
import IF from '@/utils/If'
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

      <IF condition={data}>
        <TourList data={tours} />
      </IF>
    </>
  )
}
