import { gql } from '@apollo/client'

export interface IGetCityList {
  cities: {
    data: {
      attributes: {
        name: string
        preview: {
          data: {
            attributes: {
              url: string
            }
          }
        }
      }
      id: string
    }[]
  }
}

export const cityListQuery = gql`
  query Cities {
    cities {
      data {
        attributes {
          name
          preview {
            data {
              attributes {
                url
              }
            }
          }
        }
        id
      }
    }
  }
`
