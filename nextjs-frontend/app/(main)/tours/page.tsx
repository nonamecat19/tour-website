'use client'
import TourList from '@/components/TourList'
import IF from '@/utils/If'
import { useGetTourList } from '@/graphql/query'
import BaseHeading from "@/components/BaseHeading";

export default function ToursPage() {
  const { data } = useGetTourList()
  return (
    <>
      <BaseHeading
        title="Тури"
        description="Список турів по Україні"
      />
      <IF condition={data}>
        <TourList data={data.tours} />
      </IF>
    </>
  )
}
