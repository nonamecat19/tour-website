import { useSuspenseQuery } from '@apollo/client'
import { IGetTourList, tourListQuery } from '@/graphql/query/tourList'
import {
  categoryListQuery,
  IGetCategoryList,
} from '@/graphql/query/categoryList'

export function useGetTourList() {
  return useSuspenseQuery<IGetTourList>(tourListQuery)
}

export function useGetCategoryList() {
  return useSuspenseQuery<IGetCategoryList>(categoryListQuery)
}
