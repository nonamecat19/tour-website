import CityList from '@/components/CityList'
import BaseHeading from '@/components/BaseHeading'
import { useGetCityList } from '@/graphql/query'

export default async function CitiesPage() {
  const data = await useGetCityList()

  return (
    <>
      <BaseHeading title='Міста' description='Список міст' />
      <CityList data={data} />
    </>
  )
}
