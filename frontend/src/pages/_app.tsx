import "../styles/globals.css"
import { ApolloProvider } from "@apollo/client"
import { NextPage } from "next"
import { AppProps } from "next/app"

import { MantineProvider } from "@mantine/core"

import { apolloClient } from "@/lib/apolloClient"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          fontFamily: "Vardana, sans-serif",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ApolloProvider>
  )
}

export default App
