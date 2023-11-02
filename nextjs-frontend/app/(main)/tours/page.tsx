'use client'
import TourList from "@/components/TourList";
import {useGetTourList} from "@/graphql/query/tours";

export default function Tours() {
  const { data } = useGetTourList()
  if (!data) {
    return null
  }
  return (
    <>
      <TourList data={data}/>
    </>
  )
}