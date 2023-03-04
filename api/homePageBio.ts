import { fetchGraphQL } from "./common";

const HOMEPAGE_BIO_GRAPHQL_FIELDS = `
    name
    content {
      json
    }
`

export async function getHomePageBio() {
  const entry = await fetchGraphQL(
    `query {
      homePageBio(id: "${process.env.RO_BIO_ID}") {
        ${HOMEPAGE_BIO_GRAPHQL_FIELDS}
      }
    }`,
    true
  )
  return extractHomePageBio(entry)
}

function extractHomePageBio(fetchResponse: any) {
  return fetchResponse?.data?.homePageBio;
}