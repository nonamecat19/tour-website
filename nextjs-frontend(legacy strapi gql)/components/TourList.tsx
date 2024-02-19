import { API_URL } from '@/config/base'
import ListContainer from '@/components/ListContainer'
import Card from '@/components/Card'
import { BaseTours } from '@/graphql/dto'

interface IProps {
  data: BaseTours
}

export default function TourList({ data }: IProps) {
  return (
    <ListContainer>
      {data.data.map(({ id, attributes }) => (
        <Card
          key={id}
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
