import { gql } from '@apollo/client'
import { BaseTours } from "@/graphql/dto";

export interface IGetCategory {
  category: {
    data: {
      id: string
      attributes: {
        name: string
        preview: {
          data: {
            attributes: {
              url: string
            }
          }
        }
        tours: BaseTours
      }
    }
  }
}

export const categoryQuery = (id: string) => gql`
query Category {
    category(id: ${id}) {
        data {
            id
            attributes {
                name
                preview {
                    data {
                        attributes {
                            url
                        }
                    }
                }
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
        }
    }
}
`
