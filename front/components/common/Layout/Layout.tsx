import { FC } from 'react'
import { Header, Footer } from '@components/common'

const Layout: FC = ({ children }) => {
  return (
    <body className="flex flex-col min-h-screen">
      <Header />
      <div className="m-10">{children}</div>
      <Footer />
    </body>
  )
}

export default Layout
