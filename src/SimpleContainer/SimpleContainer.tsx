import './SimpleContainer.css'
import { ReactNode } from "react"

interface Props {
  rows: int;
  cols: int;
  gap: int;
  children: ReactNode;
}

const container = ({ rows, cols, gap, children }: Props) => {
  return (
    <>
      <section className={'sc-grid sc-grid-rows-'+rows+' sc-grid-cols-'+cols+' sc-grid-gap-'+gap}>
        { children }
      </section>
    </>
  )
}

export default container;
