import { gql, useQuery } from "@apollo/client"
import { NextPage } from "next"

import { Col, Container, Grid, Group, Space } from "@mantine/core"

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
  const { loading, error, data } = useQuery(GET_RESTAURANT)

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
            {data.restaurants.data.map((restaurant: any) => {
              const { name, description, image, id } = restaurant.attributes || {}

              const _url = image.data[0].attributes.url
              const imageUrl = _url ? API_ENDPOINT + _url : ""

              return (
                <Col key={id} xs={12} sm={6} md={4} xl={4}>
                  <AssetCard imageUrl={imageUrl} author={description} status="New" title={name} key={id} />
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
