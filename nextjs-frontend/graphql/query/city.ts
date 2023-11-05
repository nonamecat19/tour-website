import { gql } from '@apollo/client'
import { BaseTours } from '@/graphql/dto'

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

export const cityQuery = (id: string) => gql`
query City {
    city(id: ${id}) {
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
