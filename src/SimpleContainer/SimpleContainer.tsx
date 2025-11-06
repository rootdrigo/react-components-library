import SimpleContainer.css
import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

const container = ({ children }: Props) => {
  return (
    <>
      <section>{children}</section>
    </>
  )
}

export default container;
