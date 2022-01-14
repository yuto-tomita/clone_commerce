import { FC } from 'react'
import { Header } from '@components/common'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
