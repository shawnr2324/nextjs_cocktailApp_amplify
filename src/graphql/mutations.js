/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCocktail = /* GraphQL */ `
  mutation CreateCocktail(
    $input: CreateCocktailInput!
    $condition: ModelCocktailConditionInput
  ) {
    createCocktail(input: $input, condition: $condition) {
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
export const updateCocktail = /* GraphQL */ `
  mutation UpdateCocktail(
    $input: UpdateCocktailInput!
    $condition: ModelCocktailConditionInput
  ) {
    updateCocktail(input: $input, condition: $condition) {
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
export const deleteCocktail = /* GraphQL */ `
  mutation DeleteCocktail(
    $input: DeleteCocktailInput!
    $condition: ModelCocktailConditionInput
  ) {
    deleteCocktail(input: $input, condition: $condition) {
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
