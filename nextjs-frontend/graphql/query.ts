import { IGetTourList, tourListQuery } from '@/graphql/query/tourList'
import {
  categoryListQuery,
  IGetCategoryList,
} from '@/graphql/query/categoryList'
import { cityQuery, IGetCity } from '@/graphql/query/city'
import { categoryQuery, IGetCategory } from '@/graphql/query/category'
import { cityListQuery, IGetCityList } from '@/graphql/query/cityList'
import { graphqlClient } from '@/graphql/graphqlClient'

export function useGetTourList() {
  return graphqlClient.request<IGetTourList>(tourListQuery)
}

export function useGetCategoryList() {
  return graphqlClient.request<IGetCategoryList>(categoryListQuery)
}

export function useGetCityList() {
  return graphqlClient.request<IGetCityList>(cityListQuery)
}

export function useGetCity(id: string) {
  return graphqlClient.request<IGetCity>(cityQuery(id))
}

export function useGetCategory(id: string) {
  return graphqlClient.request<IGetCategory>(categoryQuery(id))
}
