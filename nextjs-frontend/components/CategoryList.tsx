import {API_URL} from "@/config/base";
import ListContainer from "@/components/ListContainer";
import Card from "@/components/Card";
import {IGetCategoryList} from "@/graphql/query/category";

interface IProps {
  data: IGetCategoryList
}

export default function CategoryList({data}: IProps) {
  return (
    <ListContainer>
      {data.categories.data.map(({id, attributes}) => (
        <Card
          id={id}
          url={`/tours/${id}`}
          img={API_URL + attributes.preview.data.attributes.url}
          title={attributes.name}
        />
      ))}
    </ListContainer>
  )
}
