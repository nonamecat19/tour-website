export type ICities = IDataList<{
  name: string
}>

export type IPreview = IData<{
  url: string
}>

export interface IData<T> {
  data: {
    attributes: T
  }
}

export interface IDataList<T> {
  data: {
    attributes: T
  }[]
}
