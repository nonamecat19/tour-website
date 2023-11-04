import Link from "next/link";

interface IProps {
  id: number | string
  url: string
  img: string
  title: string
  description: string
  description2: string
  special: string
}

export default function Card({id, url, img, title, description = "", description2 = "", special}: IProps) {
  return (
    <div
      key={id}
      className="group relative flex flex-col overflow-hidden rounded-lg outline outline-gray-200
      hover:outline-indigo-500 hover:outline-2 bg-white duration-500"
    >
      <div className="h-full w-full relative outline-1 aspect-h-2 aspect-w-3 bg-gray-200 sm:h-36 overflow-hidden">
        {
          special
            ? <div className="absolute bg-white z-[1] w-20 flex justify-center items-center h-8 text-sm rounded-br-xl
              group-hover:bg-indigo-500 group-hover:text-white duration-500">
              {special}
            </div>
            : null
        }
        <img
          src={img}
          alt="preview"
          className="h-full w-full object-cover object-center group-hover:scale-110 sm:h-full sm:w-full duration-500"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={url}>
            {title}
          </Link>
        </h3>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm text-gray-500" children={description}/>
          <p className="text-base font-medium text-gray-900" children={description2}/>
        </div>
      </div>
    </div>
  )
}