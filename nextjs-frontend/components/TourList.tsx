import { API_URL } from '@/config/base'
import ListContainer from '@/components/ListContainer'
import Card from '@/components/Card'
import { IGetTourList } from '@/graphql/query/tourList'

interface IProps {
  data: IGetTourList
}

export default function TourList({ data }: IProps) {
  return (
    <ListContainer>
      {data.tours.data.map(({ id, attributes }) => (
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
