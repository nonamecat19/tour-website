import {gql} from "@apollo/client";

export interface IGetCity {
  city: {
    data: {
      attributes: {
        tours: {
          data: Array<{
            id: string
            attributes: {
              name: string
              price: number
              numberOfPeople: number
              cities: {
                data: Array<{
                  id: string
                  attributes: {
                    name: string
                  }
                }>
              }
              preview: {
                data: {
                  attributes: {
                    url: string
                  }
                }
              }
            }
          }>
        }
        name: string
        preview: {
          data: {
            id: string
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
                                    id
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