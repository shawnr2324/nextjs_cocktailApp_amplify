/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCocktail = /* GraphQL */ `
  subscription OnCreateCocktail($filter: ModelSubscriptionCocktailFilterInput) {
    onCreateCocktail(filter: $filter) {
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
export const onUpdateCocktail = /* GraphQL */ `
  subscription OnUpdateCocktail($filter: ModelSubscriptionCocktailFilterInput) {
    onUpdateCocktail(filter: $filter) {
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
export const onDeleteCocktail = /* GraphQL */ `
  subscription OnDeleteCocktail($filter: ModelSubscriptionCocktailFilterInput) {
    onDeleteCocktail(filter: $filter) {
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
export const onCreateGarnish = /* GraphQL */ `
  subscription OnCreateGarnish($filter: ModelSubscriptionGarnishFilterInput) {
    onCreateGarnish(filter: $filter) {
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
export const onUpdateGarnish = /* GraphQL */ `
  subscription OnUpdateGarnish($filter: ModelSubscriptionGarnishFilterInput) {
    onUpdateGarnish(filter: $filter) {
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
export const onDeleteGarnish = /* GraphQL */ `
  subscription OnDeleteGarnish($filter: ModelSubscriptionGarnishFilterInput) {
    onDeleteGarnish(filter: $filter) {
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
export const onCreateDilution = /* GraphQL */ `
  subscription OnCreateDilution($filter: ModelSubscriptionDilutionFilterInput) {
    onCreateDilution(filter: $filter) {
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
export const onUpdateDilution = /* GraphQL */ `
  subscription OnUpdateDilution($filter: ModelSubscriptionDilutionFilterInput) {
    onUpdateDilution(filter: $filter) {
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
export const onDeleteDilution = /* GraphQL */ `
  subscription OnDeleteDilution($filter: ModelSubscriptionDilutionFilterInput) {
    onDeleteDilution(filter: $filter) {
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
export const onCreateAccent = /* GraphQL */ `
  subscription OnCreateAccent($filter: ModelSubscriptionAccentFilterInput) {
    onCreateAccent(filter: $filter) {
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
export const onUpdateAccent = /* GraphQL */ `
  subscription OnUpdateAccent($filter: ModelSubscriptionAccentFilterInput) {
    onUpdateAccent(filter: $filter) {
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
export const onDeleteAccent = /* GraphQL */ `
  subscription OnDeleteAccent($filter: ModelSubscriptionAccentFilterInput) {
    onDeleteAccent(filter: $filter) {
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
export const onCreateModifier = /* GraphQL */ `
  subscription OnCreateModifier($filter: ModelSubscriptionModifierFilterInput) {
    onCreateModifier(filter: $filter) {
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
export const onUpdateModifier = /* GraphQL */ `
  subscription OnUpdateModifier($filter: ModelSubscriptionModifierFilterInput) {
    onUpdateModifier(filter: $filter) {
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
export const onDeleteModifier = /* GraphQL */ `
  subscription OnDeleteModifier($filter: ModelSubscriptionModifierFilterInput) {
    onDeleteModifier(filter: $filter) {
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
export const onCreateBase = /* GraphQL */ `
  subscription OnCreateBase($filter: ModelSubscriptionBaseFilterInput) {
    onCreateBase(filter: $filter) {
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
export const onUpdateBase = /* GraphQL */ `
  subscription OnUpdateBase($filter: ModelSubscriptionBaseFilterInput) {
    onUpdateBase(filter: $filter) {
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
export const onDeleteBase = /* GraphQL */ `
  subscription OnDeleteBase($filter: ModelSubscriptionBaseFilterInput) {
    onDeleteBase(filter: $filter) {
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
export const onCreateCocktailGarnish = /* GraphQL */ `
  subscription OnCreateCocktailGarnish(
    $filter: ModelSubscriptionCocktailGarnishFilterInput
  ) {
    onCreateCocktailGarnish(filter: $filter) {
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
export const onUpdateCocktailGarnish = /* GraphQL */ `
  subscription OnUpdateCocktailGarnish(
    $filter: ModelSubscriptionCocktailGarnishFilterInput
  ) {
    onUpdateCocktailGarnish(filter: $filter) {
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
export const onDeleteCocktailGarnish = /* GraphQL */ `
  subscription OnDeleteCocktailGarnish(
    $filter: ModelSubscriptionCocktailGarnishFilterInput
  ) {
    onDeleteCocktailGarnish(filter: $filter) {
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
export const onCreateCocktailDilution = /* GraphQL */ `
  subscription OnCreateCocktailDilution(
    $filter: ModelSubscriptionCocktailDilutionFilterInput
  ) {
    onCreateCocktailDilution(filter: $filter) {
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
export const onUpdateCocktailDilution = /* GraphQL */ `
  subscription OnUpdateCocktailDilution(
    $filter: ModelSubscriptionCocktailDilutionFilterInput
  ) {
    onUpdateCocktailDilution(filter: $filter) {
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
export const onDeleteCocktailDilution = /* GraphQL */ `
  subscription OnDeleteCocktailDilution(
    $filter: ModelSubscriptionCocktailDilutionFilterInput
  ) {
    onDeleteCocktailDilution(filter: $filter) {
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
export const onCreateCocktailAccent = /* GraphQL */ `
  subscription OnCreateCocktailAccent(
    $filter: ModelSubscriptionCocktailAccentFilterInput
  ) {
    onCreateCocktailAccent(filter: $filter) {
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
export const onUpdateCocktailAccent = /* GraphQL */ `
  subscription OnUpdateCocktailAccent(
    $filter: ModelSubscriptionCocktailAccentFilterInput
  ) {
    onUpdateCocktailAccent(filter: $filter) {
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
export const onDeleteCocktailAccent = /* GraphQL */ `
  subscription OnDeleteCocktailAccent(
    $filter: ModelSubscriptionCocktailAccentFilterInput
  ) {
    onDeleteCocktailAccent(filter: $filter) {
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
export const onCreateCocktailModifier = /* GraphQL */ `
  subscription OnCreateCocktailModifier(
    $filter: ModelSubscriptionCocktailModifierFilterInput
  ) {
    onCreateCocktailModifier(filter: $filter) {
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
export const onUpdateCocktailModifier = /* GraphQL */ `
  subscription OnUpdateCocktailModifier(
    $filter: ModelSubscriptionCocktailModifierFilterInput
  ) {
    onUpdateCocktailModifier(filter: $filter) {
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
export const onDeleteCocktailModifier = /* GraphQL */ `
  subscription OnDeleteCocktailModifier(
    $filter: ModelSubscriptionCocktailModifierFilterInput
  ) {
    onDeleteCocktailModifier(filter: $filter) {
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
export const onCreateCocktailBase = /* GraphQL */ `
  subscription OnCreateCocktailBase(
    $filter: ModelSubscriptionCocktailBaseFilterInput
  ) {
    onCreateCocktailBase(filter: $filter) {
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
export const onUpdateCocktailBase = /* GraphQL */ `
  subscription OnUpdateCocktailBase(
    $filter: ModelSubscriptionCocktailBaseFilterInput
  ) {
    onUpdateCocktailBase(filter: $filter) {
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
export const onDeleteCocktailBase = /* GraphQL */ `
  subscription OnDeleteCocktailBase(
    $filter: ModelSubscriptionCocktailBaseFilterInput
  ) {
    onDeleteCocktailBase(filter: $filter) {
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
