import {ReactNode} from "react";

interface IProps {
  children: ReactNode
}

export default function ListContainer({children}: IProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2
          className="sr-only"
          children="Products"
        />
        <div
          className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-3 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8"
          children={children}
        />
      </div>
    </div>
  )
}