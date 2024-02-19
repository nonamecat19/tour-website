import { gql } from '@apollo/client'
import { BaseTours } from '@/graphql/dto'

export interface IGetTourList {
  tours: BaseTours
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
