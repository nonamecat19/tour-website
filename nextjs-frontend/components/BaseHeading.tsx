import { API_URL } from '@/config/base'
import IF from '@/utils/If'

interface IProps {
  title: string
  description: string
  image?: string
}

export default function BaseHeading({ title, description, image }: IProps) {
  return (
    <div className='flex gap-4 border-b border-gray-200 px-10 py-5'>
      <IF condition={image}>
        <img
          className='hidden h-24 w-72 rounded-2xl object-cover sm:block'
          src={API_URL + image}
          alt='preview'
        />
      </IF>

      <div>
        <h1
          className='text-4xl font-bold tracking-tight text-gray-900'
          children={title}
        />
        <p className='text-base text-gray-500' children={description} />
      </div>
    </div>
  )
}
