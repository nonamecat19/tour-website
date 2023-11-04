'use client'
import TourList from "@/components/TourList";
import {useGetTourList} from "@/graphql/query/tours";
import IF from "@/utils/If";

export default function Tours() {
  const { data } = useGetTourList()
  return (
    <IF condition={data}>
      <TourList data={data}/>
    </IF>
  )
}