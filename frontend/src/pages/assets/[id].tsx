import { useRouter } from "next/router"

import { useAssetQuery } from "@/generated/graphql"

const AssetPage = () => {
  const router = useRouter()
  const id = router.query.id as string

  const { loading, error, data } = useAssetQuery({ variables: { id } })

  if (loading) return <>Loading...</>
  if (error) return <>`Error! ${error.message}`</>

  return <div>{JSON.stringify(data)}</div>
}

export default AssetPage
