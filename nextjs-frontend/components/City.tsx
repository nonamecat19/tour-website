import { API_URL } from '@/config/base'
import ListContainer from '@/components/ListContainer'
import Card from '@/components/Card'
import { IGetCity } from '@/graphql/query/city'

interface IProps {
  data: IGetCity
}

export default function City({ data }: IProps) {
  return (
    <ListContainer>
      {data.city.data.attributes.tours.data.map(({ id, attributes }) => (
        <Card
          id={id}
          url={`/tours/${id}`}
          img={API_URL + attributes.preview.data.attributes.url}
          title={attributes.name}
          description={attributes.cities.data
            .map((el) => el.attributes.name)
            .join(' - ')}
          description2={`${attributes.numberOfPeople} людей`}
          special={`${attributes.price} грн`}
        />
      ))}
    </ListContainer>
  )
}