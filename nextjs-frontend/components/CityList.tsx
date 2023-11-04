import { API_URL } from '@/config/base'
import ListContainer from '@/components/ListContainer'
import Card from '@/components/Card'
import { IGetCityList } from '@/graphql/query/cityList'

interface IProps {
  data: IGetCityList
}

export default function CityList({ data }: IProps) {
  return (
    <ListContainer>
      {data.cities.data.map(({ id, attributes }) => (
        <Card
          id={id}
          url={`/cities/${id}`}
          img={API_URL + attributes.preview.data.attributes.url}
          title={attributes.name}
        />
      ))}
    </ListContainer>
  )
}
