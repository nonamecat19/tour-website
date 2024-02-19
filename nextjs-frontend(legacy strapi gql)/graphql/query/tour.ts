import gql from 'graphql-tag'

export interface IGetTour {
  tour: {
    data: {
      attributes: {
        name: string
        text: string
        price: number
        numberOfPeople: number
        cities: {
          data: Array<{
            attributes: {
              name: string
            }
            id: string
          }>
        }
        preview: {
          data: {
            attributes: {
              url: string
            }
          }
        }
        category: {
          data: {
            attributes: {
              name: string
            }
            id: string
          }
        }
        createdAt: string
      }
    }
  }
}

export const tourQuery = gql`
  query Tour($id: ID!) {
    tour(id: $id) {
      data {
        attributes {
          name
          text
          price
          numberOfPeople
          cities {
            data {
              attributes {
                name
              }
              id
            }
          }
          preview {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
              id
            }
          }
          createdAt
        }
      }
    }
  }
`
