import {gql, useSuspenseQuery} from "@apollo/client";
import {ICities} from "@/graphql/dto";

export interface IGetTourList {
  tours: {
    data: {
      id: string
      attributes: {
        name: string
        price: number
        numberOfPeople?: number
        createdAt: Date
        cities: ICities
      }
    }[]
  }
}
export function useGetTourList() {
  return useSuspenseQuery<IGetTourList>(gql`
    query Tours {
        tours {
            data {
                id
                attributes {
                    name
                    price
                    numberOfPeople
                    createdAt
                    cities {
                        data {
                            attributes {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
  `)
}



