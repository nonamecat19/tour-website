import { useGetTour } from '@/graphql/query'

interface IProps {
  params: { id: string }
}

export default async function TourPage({ params }: IProps) {
  const data = await useGetTour(params.id);
  return (
    <>
      {JSON.stringify(data)}
      {/*<TourList data={tours} />*/}
    </>
  )
}
