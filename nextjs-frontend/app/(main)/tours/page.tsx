import TourList from '@/components/TourList'
import { useGetTourList } from '@/graphql/query'
import BaseHeading from '@/components/BaseHeading'

export default async function ToursPage() {
  const data = await useGetTourList()
  return (
    <>
      <BaseHeading title='Тури' description='Список турів по Україні' />
      <TourList data={data.tours} />
    </>
  )
}
