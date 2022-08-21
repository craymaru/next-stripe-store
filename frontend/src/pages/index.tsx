import { gql } from "@apollo/client"
import { NextPage } from "next"

import { Col, Container, Grid, Group, Space } from "@mantine/core"

import { useAssetsQuery } from "../generated/graphql"

import AssetCard from "@/components/AssetCard"
import { HeaderAction } from "@/components/HeaderActions"
import Layout from "@/components/Layout"
import SearchInput from "@/components/SearchInput"
import { API_ENDPOINT } from "@/lib/apolloClient"

const GET_RESTAURANT = gql`
  {
    restaurants {
      data {
        id
        attributes {
          name
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

const Index: NextPage = () => {
  const { loading, error, data } = useAssetsQuery()

  console.log(data)

  if (loading) return <>Loading...</>
  if (error) return <>`Error! ${error.message}`</>

  return (
    <Layout
      title="Home"
      header={
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
      }
    >
      <>
        <Group position="center">
          <SearchInput />
        </Group>
        <Space h="lg" />
        <Container size="lg" mt="md">
          <Grid>
            {data?.assets?.data.map(({ id, attributes }) => {
              const { name, author, image } = attributes || {}

              const _imageUrl = image?.data?.attributes?.url
              const imageUrl = _imageUrl ? API_ENDPOINT + _imageUrl : ""

              return (
                <Col key={id} xs={12} sm={6} md={4} xl={4}>
                  <AssetCard name={name} author={author} imageUrl={imageUrl} status="New" key={id} />
                </Col>
              )
            })}
          </Grid>
        </Container>
      </>
    </Layout>
  )
}

export default Index
