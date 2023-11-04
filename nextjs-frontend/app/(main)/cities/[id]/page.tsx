'use client'
import IF from '@/utils/If'
import { useGetCity } from '@/graphql/query'
import City from '@/components/City'
import { useParams } from 'next/navigation'

export default function CityPage() {
  const params = useParams()
  const { data } = useGetCity(params.id as string)
  return (
    <IF condition={data}>
      <City data={data} />
    </IF>
  )
}
