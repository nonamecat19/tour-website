import { useSuspenseQuery } from '@apollo/client'
import { IGetTourList, tourListQuery } from '@/graphql/query/tourList'
import {
  categoryListQuery,
  IGetCategoryList,
} from '@/graphql/query/categoryList'
import {cityListQuery, IGetCityList} from "@/graphql/query/cityList";

export function useGetTourList() {
  return useSuspenseQuery<IGetTourList>(tourListQuery)
}

export function useGetCategoryList() {
  return useSuspenseQuery<IGetCategoryList>(categoryListQuery)
}

export function useGetCitiesList() {
  return useSuspenseQuery<IGetCityList>(cityListQuery)
}
