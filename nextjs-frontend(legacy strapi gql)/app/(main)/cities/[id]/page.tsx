import { useGetCity } from '@/graphql/query'
import TourList from '@/components/TourList'
import BaseHeading from '@/components/BaseHeading'

interface IProps {
  params: { id: string }
}

export default async function CityPage({ params }: IProps) {
  const data = await useGetCity(params.id);
  const { name, preview, tours } = data.city.data.attributes;
  return (
    <>
      <BaseHeading
        title={name}
        description='Список всіх турів'
        image={preview.data.attributes.url}
      />

      <TourList data={tours} />
    </>
  )
}
