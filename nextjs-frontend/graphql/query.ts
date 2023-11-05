import { useSuspenseQuery } from '@apollo/client'
import { IGetTourList, tourListQuery } from '@/graphql/query/tourList'
import {
  categoryListQuery,
  IGetCategoryList,
} from '@/graphql/query/categoryList'
import { cityListQuery, IGetCityList } from '@/graphql/query/cityList'
import { cityQuery, IGetCity } from '@/graphql/query/city'
import { categoryQuery, IGetCategory } from "@/graphql/query/category";

export function useGetTourList() {
  return useSuspenseQuery<IGetTourList>(tourListQuery)
}

export function useGetCategoryList() {
  return useSuspenseQuery<IGetCategoryList>(categoryListQuery)
}

export function useGetCitiesList() {
  return useSuspenseQuery<IGetCityList>(cityListQuery)
}

export function useGetCity(id: string) {
  return useSuspenseQuery<IGetCity>(cityQuery(id))
}

export function useGetCategory(id: string) {
  return useSuspenseQuery<IGetCategory>(categoryQuery(id))
}