

export interface BaseTours {
  data: {
    id: string
    attributes: {
      name: string
      price: number
      numberOfPeople: number
      cities: {
        data: {
          attributes: {
            name: string
          }
        }[]
      }
      preview: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }
  }[]
}
