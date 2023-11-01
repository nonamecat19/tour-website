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
      {JSON.stringify(data)}
      <TourList data={data}/>
    </>
  )
}