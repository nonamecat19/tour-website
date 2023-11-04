import {ReactNode} from "react";

interface IProps {
  children: ReactNode
  condition: any
}
export default function IF({children, condition}: IProps) {
  if (condition) {
    return children;
  }
  return null
}