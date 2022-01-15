import { FC } from 'react'
import { Header, Footer } from '@components/common'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
