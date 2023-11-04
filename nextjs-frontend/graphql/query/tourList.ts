import {gql} from "@apollo/client";
import {ICities, IPreview} from "@/graphql/dto";

export interface IGetTourList {
  tours: {
    data: {
      id: string
      attributes: {
        name: string
        price: number
        numberOfPeople: number
        createdAt: Date
        cities: ICities
        preview: IPreview
      }
    }[]
  }
}

export const tourListQuery = gql`
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
                    preview {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`


