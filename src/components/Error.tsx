import { PropsWithChildren } from "react"

const Error = ({ children}: PropsWithChildren) => {
  return (
    <p className="font-bold text-red-600 pt-2 pl-2">{ children }</p>
  )
}

export default Error