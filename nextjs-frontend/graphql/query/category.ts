import {gql, useSuspenseQuery} from "@apollo/client";

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

export function useGetCategoryList() {
  return useSuspenseQuery<IGetCategoryList>(gql`
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
  `)
}
