interface IProps {
  id: number | string
  img: string
  title: string
  description: string
  description2: string
  special: string
}

export default function Card({id, img, title, description, description2, special}: IProps) {
  return (
    <div
      key={id}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
    >
      <div className="h-full w-full relative outline-1 aspect-h-2 aspect-w-3 bg-gray-200 group-hover:opacity-75 sm:h-36">
        {
          special
            ? <div className="absolute bg-white z-10 w-20 flex justify-center items-center h-8 text-sm rounded-br-xl">
              {special}
            </div>
            : null
        }
        <img
          src={img}
          alt="preview"
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <a href={`/tours/${id}`}>
            <span aria-hidden="true" className="absolute inset-0"/>
            {title}
          </a>
        </h3>
        <div className="flex flex-1 flex-col justify-end">
          {
            description
              ? <p className="text-sm italic text-gray-500">{description}</p>
              : null
          }
          {
            description2
              ? <p className="text-base font-medium text-gray-900">{description2}</p>
              : null
          }
        </div>
      </div>
    </div>
  )
}