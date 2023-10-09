/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCocktail = /* GraphQL */ `
  subscription OnCreateCocktail($filter: ModelSubscriptionCocktailFilterInput) {
    onCreateCocktail(filter: $filter) {
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
export const onUpdateCocktail = /* GraphQL */ `
  subscription OnUpdateCocktail($filter: ModelSubscriptionCocktailFilterInput) {
    onUpdateCocktail(filter: $filter) {
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
export const onDeleteCocktail = /* GraphQL */ `
  subscription OnDeleteCocktail($filter: ModelSubscriptionCocktailFilterInput) {
    onDeleteCocktail(filter: $filter) {
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
