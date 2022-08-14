import { Button, Input } from "@mantine/core"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { HeaderAction } from "../components/HeaderActions"

const Home: NextPage = () => {
  return (
    <div>
      <HeaderAction
        links={[
          { link: "/about", label: "Features" },
          {
            link: "#1",
            label: "Learn",
            links: [
              { link: "/docs", label: "Documentation" },
              { link: "/resources", label: "Resources" },
              { link: "/community", label: "Community" },
              { link: "/blog", label: "Blog" },
            ],
          },
          { link: "/about", label: "About" },
          { link: "/pricing", label: "Pricing" },
          {
            link: "#2",
            label: "Support",
            links: [
              { link: "/faq", label: "FAQ" },
              { link: "/demo", label: "Book a demo" },
              { link: "/forums", label: "Forums" },
            ],
          },
        ]}
      />
      <h1>Book nob</h1>
      <div className="flex gap-2">
        <Input placeholder="your name" />
        <Button>Start</Button>
      </div>
    </div>
  )
}

export default Home
