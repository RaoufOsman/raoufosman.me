import { fetchGraphQL } from "./common";

const BIO_GRAPHQL_FIELDS = `
    name
    content {
      json
    }
`

export async function getBio() {
  const entry = await fetchGraphQL(
    `query {
      bio(id: "${process.env.RO_BIO_ID}") {
        ${BIO_GRAPHQL_FIELDS}
      }
    }`,
    true
  )
  return extractBio(entry)
}

function extractBio(fetchResponse: any) {
  return fetchResponse?.data?.bio;
}