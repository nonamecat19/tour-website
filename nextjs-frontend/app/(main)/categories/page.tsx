'use client'
import IF from "@/utils/If";
import {useGetCategoryList} from "@/graphql/query/category";
import CategoryList from "@/components/CategoryList";

export default function Tours() {
  const { data } = useGetCategoryList()
  return (
    <IF condition={data}>
      <CategoryList data={data}/>
    </IF>
  )
}