import {gql} from "@apollo/client";

export interface IGetCategoryList {
  categories: {
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

export const categoryListQuery = gql`
    query Categories {
      categories {
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
