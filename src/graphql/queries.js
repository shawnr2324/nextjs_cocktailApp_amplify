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
        image
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
      image
      instructions
      garnish {
        nextToken
        __typename
      }
      dilution {
        nextToken
        __typename
      }
      accent {
        nextToken
        __typename
      }
      modifier {
        nextToken
        __typename
      }
      base {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCocktails = /* GraphQL */ `
  query ListCocktails(
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
        image
        instructions
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGarnish = /* GraphQL */ `
  query GetGarnish($id: ID!) {
    getGarnish(id: $id) {
      id
      name
      cocktail {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGarnishes = /* GraphQL */ `
  query ListGarnishes(
    $filter: ModelGarnishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGarnishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDilution = /* GraphQL */ `
  query GetDilution($id: ID!) {
    getDilution(id: $id) {
      id
      name
      amount
      scale
      cocktail {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDilutions = /* GraphQL */ `
  query ListDilutions(
    $filter: ModelDilutionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDilutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        amount
        scale
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAccent = /* GraphQL */ `
  query GetAccent($id: ID!) {
    getAccent(id: $id) {
      id
      name
      amount
      scale
      cocktail {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAccents = /* GraphQL */ `
  query ListAccents(
    $filter: ModelAccentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        amount
        scale
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getModifier = /* GraphQL */ `
  query GetModifier($id: ID!) {
    getModifier(id: $id) {
      id
      name
      amount
      scale
      cocktail {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listModifiers = /* GraphQL */ `
  query ListModifiers(
    $filter: ModelModifierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModifiers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        amount
        scale
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBase = /* GraphQL */ `
  query GetBase($id: ID!) {
    getBase(id: $id) {
      id
      name
      amount
      scale
      cocktail {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBases = /* GraphQL */ `
  query ListBases(
    $filter: ModelBaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        amount
        scale
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCocktailGarnish = /* GraphQL */ `
  query GetCocktailGarnish($id: ID!) {
    getCocktailGarnish(id: $id) {
      id
      cocktailId
      garnishId
      cocktail {
        id
        name
        image
        instructions
        createdAt
        updatedAt
        __typename
      }
      garnish {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCocktailGarnishes = /* GraphQL */ `
  query ListCocktailGarnishes(
    $filter: ModelCocktailGarnishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCocktailGarnishes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        garnishId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCocktailDilution = /* GraphQL */ `
  query GetCocktailDilution($id: ID!) {
    getCocktailDilution(id: $id) {
      id
      cocktailId
      dilutionId
      cocktail {
        id
        name
        image
        instructions
        createdAt
        updatedAt
        __typename
      }
      dilution {
        id
        name
        amount
        scale
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCocktailDilutions = /* GraphQL */ `
  query ListCocktailDilutions(
    $filter: ModelCocktailDilutionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCocktailDilutions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        dilutionId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCocktailAccent = /* GraphQL */ `
  query GetCocktailAccent($id: ID!) {
    getCocktailAccent(id: $id) {
      id
      cocktailId
      accentId
      cocktail {
        id
        name
        image
        instructions
        createdAt
        updatedAt
        __typename
      }
      accent {
        id
        name
        amount
        scale
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCocktailAccents = /* GraphQL */ `
  query ListCocktailAccents(
    $filter: ModelCocktailAccentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCocktailAccents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cocktailId
        accentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCocktailModifier = /* GraphQL */ `
  query GetCocktailModifier($id: ID!) {
    getCocktailModifier(id: $id) {
      id
      cocktailId
      modifierId
      cocktail {
        id
        name
        image
        instructions
        createdAt
        updatedAt
        __typename
      }
      modifier {
        id
        name
        amount
        scale
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCocktailModifiers = /* GraphQL */ `
  query ListCocktailModifiers(
    $filter: ModelCocktailModifierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCocktailModifiers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        modifierId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCocktailBase = /* GraphQL */ `
  query GetCocktailBase($id: ID!) {
    getCocktailBase(id: $id) {
      id
      cocktailId
      baseId
      cocktail {
        id
        name
        image
        instructions
        createdAt
        updatedAt
        __typename
      }
      base {
        id
        name
        amount
        scale
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCocktailBases = /* GraphQL */ `
  query ListCocktailBases(
    $filter: ModelCocktailBaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCocktailBases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cocktailId
        baseId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cocktailGarnishesByCocktailId = /* GraphQL */ `
  query CocktailGarnishesByCocktailId(
    $cocktailId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailGarnishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cocktailGarnishesByCocktailId(
      cocktailId: $cocktailId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        garnishId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cocktailGarnishesByGarnishId = /* GraphQL */ `
  query CocktailGarnishesByGarnishId(
    $garnishId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailGarnishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cocktailGarnishesByGarnishId(
      garnishId: $garnishId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        garnishId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cocktailDilutionsByCocktailId = /* GraphQL */ `
  query CocktailDilutionsByCocktailId(
    $cocktailId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailDilutionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cocktailDilutionsByCocktailId(
      cocktailId: $cocktailId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        dilutionId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cocktailDilutionsByDilutionId = /* GraphQL */ `
  query CocktailDilutionsByDilutionId(
    $dilutionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailDilutionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cocktailDilutionsByDilutionId(
      dilutionId: $dilutionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        dilutionId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cocktailAccentsByCocktailId = /* GraphQL */ `
  query CocktailAccentsByCocktailId(
    $cocktailId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailAccentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cocktailAccentsByCocktailId(
      cocktailId: $cocktailId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        accentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cocktailAccentsByAccentId = /* GraphQL */ `
  query CocktailAccentsByAccentId(
    $accentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailAccentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cocktailAccentsByAccentId(
      accentId: $accentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        accentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cocktailModifiersByCocktailId = /* GraphQL */ `
  query CocktailModifiersByCocktailId(
    $cocktailId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailModifierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cocktailModifiersByCocktailId(
      cocktailId: $cocktailId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        modifierId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cocktailModifiersByModifierId = /* GraphQL */ `
  query CocktailModifiersByModifierId(
    $modifierId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailModifierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cocktailModifiersByModifierId(
      modifierId: $modifierId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        modifierId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cocktailBasesByCocktailId = /* GraphQL */ `
  query CocktailBasesByCocktailId(
    $cocktailId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailBaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cocktailBasesByCocktailId(
      cocktailId: $cocktailId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        baseId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cocktailBasesByBaseId = /* GraphQL */ `
  query CocktailBasesByBaseId(
    $baseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailBaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cocktailBasesByBaseId(
      baseId: $baseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cocktailId
        baseId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
