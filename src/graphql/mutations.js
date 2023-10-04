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
export const updateCocktail = /* GraphQL */ `
  mutation UpdateCocktail(
    $input: UpdateCocktailInput!
    $condition: ModelCocktailConditionInput
  ) {
    updateCocktail(input: $input, condition: $condition) {
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
export const deleteCocktail = /* GraphQL */ `
  mutation DeleteCocktail(
    $input: DeleteCocktailInput!
    $condition: ModelCocktailConditionInput
  ) {
    deleteCocktail(input: $input, condition: $condition) {
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
export const createGarnish = /* GraphQL */ `
  mutation CreateGarnish(
    $input: CreateGarnishInput!
    $condition: ModelGarnishConditionInput
  ) {
    createGarnish(input: $input, condition: $condition) {
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
export const updateGarnish = /* GraphQL */ `
  mutation UpdateGarnish(
    $input: UpdateGarnishInput!
    $condition: ModelGarnishConditionInput
  ) {
    updateGarnish(input: $input, condition: $condition) {
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
export const deleteGarnish = /* GraphQL */ `
  mutation DeleteGarnish(
    $input: DeleteGarnishInput!
    $condition: ModelGarnishConditionInput
  ) {
    deleteGarnish(input: $input, condition: $condition) {
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
export const createDilution = /* GraphQL */ `
  mutation CreateDilution(
    $input: CreateDilutionInput!
    $condition: ModelDilutionConditionInput
  ) {
    createDilution(input: $input, condition: $condition) {
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
export const updateDilution = /* GraphQL */ `
  mutation UpdateDilution(
    $input: UpdateDilutionInput!
    $condition: ModelDilutionConditionInput
  ) {
    updateDilution(input: $input, condition: $condition) {
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
export const deleteDilution = /* GraphQL */ `
  mutation DeleteDilution(
    $input: DeleteDilutionInput!
    $condition: ModelDilutionConditionInput
  ) {
    deleteDilution(input: $input, condition: $condition) {
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
export const createAccent = /* GraphQL */ `
  mutation CreateAccent(
    $input: CreateAccentInput!
    $condition: ModelAccentConditionInput
  ) {
    createAccent(input: $input, condition: $condition) {
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
export const updateAccent = /* GraphQL */ `
  mutation UpdateAccent(
    $input: UpdateAccentInput!
    $condition: ModelAccentConditionInput
  ) {
    updateAccent(input: $input, condition: $condition) {
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
export const deleteAccent = /* GraphQL */ `
  mutation DeleteAccent(
    $input: DeleteAccentInput!
    $condition: ModelAccentConditionInput
  ) {
    deleteAccent(input: $input, condition: $condition) {
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
export const createModifier = /* GraphQL */ `
  mutation CreateModifier(
    $input: CreateModifierInput!
    $condition: ModelModifierConditionInput
  ) {
    createModifier(input: $input, condition: $condition) {
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
export const updateModifier = /* GraphQL */ `
  mutation UpdateModifier(
    $input: UpdateModifierInput!
    $condition: ModelModifierConditionInput
  ) {
    updateModifier(input: $input, condition: $condition) {
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
export const deleteModifier = /* GraphQL */ `
  mutation DeleteModifier(
    $input: DeleteModifierInput!
    $condition: ModelModifierConditionInput
  ) {
    deleteModifier(input: $input, condition: $condition) {
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
export const createBase = /* GraphQL */ `
  mutation CreateBase(
    $input: CreateBaseInput!
    $condition: ModelBaseConditionInput
  ) {
    createBase(input: $input, condition: $condition) {
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
export const updateBase = /* GraphQL */ `
  mutation UpdateBase(
    $input: UpdateBaseInput!
    $condition: ModelBaseConditionInput
  ) {
    updateBase(input: $input, condition: $condition) {
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
export const deleteBase = /* GraphQL */ `
  mutation DeleteBase(
    $input: DeleteBaseInput!
    $condition: ModelBaseConditionInput
  ) {
    deleteBase(input: $input, condition: $condition) {
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
export const createCocktailGarnish = /* GraphQL */ `
  mutation CreateCocktailGarnish(
    $input: CreateCocktailGarnishInput!
    $condition: ModelCocktailGarnishConditionInput
  ) {
    createCocktailGarnish(input: $input, condition: $condition) {
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
export const updateCocktailGarnish = /* GraphQL */ `
  mutation UpdateCocktailGarnish(
    $input: UpdateCocktailGarnishInput!
    $condition: ModelCocktailGarnishConditionInput
  ) {
    updateCocktailGarnish(input: $input, condition: $condition) {
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
export const deleteCocktailGarnish = /* GraphQL */ `
  mutation DeleteCocktailGarnish(
    $input: DeleteCocktailGarnishInput!
    $condition: ModelCocktailGarnishConditionInput
  ) {
    deleteCocktailGarnish(input: $input, condition: $condition) {
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
export const createCocktailDilution = /* GraphQL */ `
  mutation CreateCocktailDilution(
    $input: CreateCocktailDilutionInput!
    $condition: ModelCocktailDilutionConditionInput
  ) {
    createCocktailDilution(input: $input, condition: $condition) {
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
export const updateCocktailDilution = /* GraphQL */ `
  mutation UpdateCocktailDilution(
    $input: UpdateCocktailDilutionInput!
    $condition: ModelCocktailDilutionConditionInput
  ) {
    updateCocktailDilution(input: $input, condition: $condition) {
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
export const deleteCocktailDilution = /* GraphQL */ `
  mutation DeleteCocktailDilution(
    $input: DeleteCocktailDilutionInput!
    $condition: ModelCocktailDilutionConditionInput
  ) {
    deleteCocktailDilution(input: $input, condition: $condition) {
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
export const createCocktailAccent = /* GraphQL */ `
  mutation CreateCocktailAccent(
    $input: CreateCocktailAccentInput!
    $condition: ModelCocktailAccentConditionInput
  ) {
    createCocktailAccent(input: $input, condition: $condition) {
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
export const updateCocktailAccent = /* GraphQL */ `
  mutation UpdateCocktailAccent(
    $input: UpdateCocktailAccentInput!
    $condition: ModelCocktailAccentConditionInput
  ) {
    updateCocktailAccent(input: $input, condition: $condition) {
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
export const deleteCocktailAccent = /* GraphQL */ `
  mutation DeleteCocktailAccent(
    $input: DeleteCocktailAccentInput!
    $condition: ModelCocktailAccentConditionInput
  ) {
    deleteCocktailAccent(input: $input, condition: $condition) {
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
export const createCocktailModifier = /* GraphQL */ `
  mutation CreateCocktailModifier(
    $input: CreateCocktailModifierInput!
    $condition: ModelCocktailModifierConditionInput
  ) {
    createCocktailModifier(input: $input, condition: $condition) {
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
export const updateCocktailModifier = /* GraphQL */ `
  mutation UpdateCocktailModifier(
    $input: UpdateCocktailModifierInput!
    $condition: ModelCocktailModifierConditionInput
  ) {
    updateCocktailModifier(input: $input, condition: $condition) {
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
export const deleteCocktailModifier = /* GraphQL */ `
  mutation DeleteCocktailModifier(
    $input: DeleteCocktailModifierInput!
    $condition: ModelCocktailModifierConditionInput
  ) {
    deleteCocktailModifier(input: $input, condition: $condition) {
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
export const createCocktailBase = /* GraphQL */ `
  mutation CreateCocktailBase(
    $input: CreateCocktailBaseInput!
    $condition: ModelCocktailBaseConditionInput
  ) {
    createCocktailBase(input: $input, condition: $condition) {
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
export const updateCocktailBase = /* GraphQL */ `
  mutation UpdateCocktailBase(
    $input: UpdateCocktailBaseInput!
    $condition: ModelCocktailBaseConditionInput
  ) {
    updateCocktailBase(input: $input, condition: $condition) {
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
export const deleteCocktailBase = /* GraphQL */ `
  mutation DeleteCocktailBase(
    $input: DeleteCocktailBaseInput!
    $condition: ModelCocktailBaseConditionInput
  ) {
    deleteCocktailBase(input: $input, condition: $condition) {
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
