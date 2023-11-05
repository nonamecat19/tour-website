'use client'
import { useGetCategory } from "@/graphql/query";
import BaseHeading from "@/components/BaseHeading";
import IF from "@/utils/If";
import { useParams } from "next/navigation";
import TourList from "@/components/TourList";

export default function CategoryIdPage() {
  const params = useParams();
  const { data } = useGetCategory(params.id as string);
  const { name, preview, tours } = data.category.data.attributes;
  return (
    <>
      <BaseHeading
        title={name}
        description="Список турів по цій категорії"
        image={preview.data.attributes.url}
      />

      <IF condition={data}>
        <TourList data={tours} />
      </IF>
    </>
  );
}
