import { FC } from 'react'
import { Header } from '../Header/Header'

type Props = {
  children: React.ReactNode
}
export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
