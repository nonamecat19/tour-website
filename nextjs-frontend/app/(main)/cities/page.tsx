'use client'
import { useGetCitiesList } from '@/graphql/query'
import IF from '@/utils/If'
import CityList from '@/components/CityList'

export default function CitiesPage() {
  const { data } = useGetCitiesList()
  return (
    <IF condition={data}>
      <CityList data={data} />
    </IF>
  )
}
