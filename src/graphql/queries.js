/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchCocktails = /* GraphQL */ `
  query SearchCocktails(
    $filter: SearchableCocktailFilterInput
    $sort: [SearchableCocktailSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCocktailAggregationInput]
  ) {
    searchCocktails(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        instructions
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getCocktail = /* GraphQL */ `
  query GetCocktail($id: ID!) {
    getCocktail(id: $id) {
      id
      name
      instructions
      garnish {
        name
        __typename
      }
      ingredients {
        type
        name
        amount
        scale
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCocktails = /* GraphQL */ `
  query ListCocktails (
    $id: ID
    $filter: ModelCocktailFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCocktails(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        instructions
        createdAt
        updatedAt
        ingredients {
          type
          name
          amount
          scale
        }
        garnish {
          name
        }
        __typename
      }
      nextToken
      __typename
    }
  }
`;
