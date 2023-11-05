"use client";
import IF from "@/utils/If";
import { useGetCity } from "@/graphql/query";
import { useParams } from "next/navigation";
import TourList from "@/components/TourList";
import BaseHeading from "@/components/BaseHeading";

export default function CityPage() {
  const params = useParams();
  const { data } = useGetCity(params.id as string);
  const {name, preview, tours} = data.city.data.attributes;
  return (
    <>
      <BaseHeading
        title={name}
        description="Список всіх турів"
        image={preview.data.attributes.url}
      />

      <IF condition={data}>
        <TourList data={tours} />
      </IF>
    </>
  );
}
