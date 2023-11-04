'use client'
import TourList from "@/components/TourList";
import IF from "@/utils/If";
import {useGetTourList} from "@/graphql/query";

export default function ToursPage() {
  const { data } = useGetTourList()
  return (
    <IF condition={data}>
      <TourList data={data}/>
    </IF>
  )
}