import If from '@/utils/If'
import Link from 'next/link'

interface IProps {
  id: number | string
  url: string
  img: string
  title: string
  description?: string
  description2?: string
  special?: string
}

export default function Card({
  id,
  url,
  img,
  title,
  description,
  description2,
  special,
}: IProps) {
  return (
    <Link href={url}>
      <div
        key={id}
        className='group relative flex flex-col overflow-hidden rounded-lg bg-white outline
        outline-gray-200 duration-500 hover:outline-2 hover:outline-indigo-500'
      >
        <div className='aspect-h-2 aspect-w-3 relative h-full w-full overflow-hidden bg-gray-200 outline-1 sm:h-36'>
          <If condition={special}>
            <div
              className='absolute z-[1] flex h-8 w-20 items-center justify-center rounded-br-xl bg-white text-sm
              duration-500 group-hover:bg-indigo-500 group-hover:text-white'
            >
              {special}
            </div>
          </If>
          <img
            src={img}
            alt='preview'
            className='h-full w-full object-cover object-center duration-500 group-hover:scale-110 sm:h-full sm:w-full'
          />
        </div>
        <div className='flex flex-1 flex-col p-4'>
          <h3
            className='text-lg font-medium text-gray-900 group-hover:text-indigo-800'
            children={title}
          />
          <div className='flex flex-1 flex-col justify-end'>
            <If condition={description}>
              <p className='text-sm text-gray-500' children={description} />
            </If>
            <If condition={description2}>
              <p className='text-sm text-gray-500' children={description2} />
            </If>
          </div>
        </div>
      </div>
    </Link>
  )
}
