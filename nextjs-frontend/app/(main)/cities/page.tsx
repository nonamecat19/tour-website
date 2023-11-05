'use client'
import { useGetCitiesList } from '@/graphql/query'
import IF from '@/utils/If'
import CityList from '@/components/CityList'
import BaseHeading from "@/components/BaseHeading";

export default function CitiesPage() {
  const { data } = useGetCitiesList()
  return (
    <>
      <BaseHeading
        title="Міста"
        description="Список міст"
      />
      <IF condition={data}>
        <CityList data={data} />
      </IF>
    </>
  )
}
