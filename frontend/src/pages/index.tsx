import { NextPage } from "next"

import { Col, Container, Grid, Group, Space } from "@mantine/core"

import AssetCard from "@/components/AssetCard"
import HeadMenu from "@/components/HeadMenu"
import Layout from "@/components/Layout"
import SearchInput from "@/components/SearchInput"
import { useAssetsQuery } from "@/generated/graphql"
import { API_ENDPOINT } from "@/lib/apolloClient"

const Index: NextPage = () => {
  const { loading, error, data } = useAssetsQuery()

  if (loading) return <>Loading...</>
  if (error) return <>`Error! ${error.message}`</>

  return (
    <Layout title="Home" header={<HeadMenu />}>
      <>
        <Group position="center">
          <SearchInput />
        </Group>
        <Space h="lg" />
        <Container size="xl" mt="md">
          <Grid gutter={40}>
            {data?.assets?.data.map(({ id, attributes }) => {
              const { name, author, image } = attributes || {}

              const _imageUrl = image?.data?.attributes?.url
              const imageUrl = _imageUrl ? API_ENDPOINT + _imageUrl : ""

              if (!id) return

              return (
                <Col key={id} xs={12} sm={6} md={4} xl={4}>
                  <AssetCard id={id} name={name} author={author} imageUrl={imageUrl} status="New" key={id} />
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
