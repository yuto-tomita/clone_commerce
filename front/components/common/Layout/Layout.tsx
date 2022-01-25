import { FC } from 'react'
import { Header, Footer } from '@components/common'

const Layout: FC = ({ children }) => {
  return (
    <body className="flex min-h-screen flex-col">
      <Header />
      <div className="m-10">{children}</div>
      <Footer />
    </body>
  )
}

export default Layout
