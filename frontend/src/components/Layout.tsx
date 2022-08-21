import Head from "next/head"
import { FC, ReactNode } from "react"

type Props = {
  title: string
  children: ReactNode
  header?: ReactNode
  footer?: ReactNode
}

const Layout: FC<Props> = ({ children, title = "", header, footer }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>{header}</header>
      <main
      // className="flex flex-col items-center justify-center"
      >
        <>{children}</>
      </main>
      <footer>{footer}</footer>
    </>
  )
}

export default Layout
