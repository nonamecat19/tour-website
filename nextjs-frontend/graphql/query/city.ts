import { BaseTours } from '@/graphql/dto'
import gql from 'graphql-tag'

export interface IGetCity {
  city: {
    data: {
      attributes: {
        tours: BaseTours
        name: string
        preview: {
          data: {
            attributes: {
              url: string
            }
          }
        }
      }
    }
  }
}

export const cityQuery = gql`
  query City($id: ID!) {
    city(id: $id) {
      data {
        attributes {
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
          name
          preview {
            data {
              id
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
