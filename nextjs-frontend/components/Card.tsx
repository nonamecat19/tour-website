import If from "@/utils/If";
import Link from "next/link";

interface IProps {
  id: number | string
  url: string
  img: string
  title: string
  description?: string
  description2?: string
  special?: string
}

export default function Card({id, url, img, title, description, description2, special}: IProps) {
  return (
    <Link href={url}>
      <div
        key={id}
        className="group relative flex flex-col overflow-hidden rounded-lg outline outline-gray-200
        hover:outline-indigo-500 hover:outline-2 bg-white duration-500"
      >
        <div className="h-full w-full relative outline-1 aspect-h-2 aspect-w-3 bg-gray-200 sm:h-36 overflow-hidden">
          <If condition={special}>
            <div className="absolute bg-white z-[1] w-20 flex justify-center items-center h-8 text-sm rounded-br-xl
              group-hover:bg-indigo-500 group-hover:text-white duration-500">
              {special}
            </div>
          </If>
          <img
            src={img}
            alt="preview"
            className="h-full w-full object-cover object-center group-hover:scale-110 sm:h-full sm:w-full duration-500"
          />
        </div>
        <div className="flex flex-1 flex-col p-4">
          <h3
            className="text-lg font-medium text-gray-900 group-hover:text-indigo-800"
            children={title}
          />
          <div className="flex flex-1 flex-col justify-end">
            <If condition={description}>
              <p className="text-sm text-gray-500" children={description}/>
            </If>
            <If condition={description2}>
              <p className="text-sm text-gray-500" children={description2}/>
            </If>
          </div>
        </div>
      </div>
    </Link>
  )
}