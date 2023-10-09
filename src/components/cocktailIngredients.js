import CocktailBase from './ingredients/cocktailBase';
import CocktailModifier from './ingredients/cocktailModifier'
import CocktailAccent from './ingredients/cocktailAccent';
import CocktailDilution from './ingredients/cocktailDilution';
import CocktailGarnish from './ingredients/cocktailGarnish';

export default function CocktailIngrdients( {cocktailIngredients, cocktailGarnish} ){
    const baseArray = [];
    const modifierArray = [];
    const accentArray = [];
    const dilutionArray = [];
    cocktailIngredients.forEach( (ingredient) => {
        ingredient.type == 'base' ? baseArray.push(ingredient) : ingredient.type == 'modifier' ? modifierArray.push(ingredient) : ingredient.type == 'accent' ? accentArray.push(ingredient) : dilutionArray.push(ingredient);
    });
    return <>
        <div className={`bg-white p-1 rounded lg:w-2/3 lg:mx-auto`}>
            <CocktailBase cocktailBase={baseArray}></CocktailBase>
            <CocktailModifier cocktailModifier={modifierArray}></CocktailModifier>
            <CocktailAccent cocktailAccent={accentArray}></CocktailAccent>
            <CocktailDilution cocktailDilution={dilutionArray}></CocktailDilution>
            <CocktailGarnish cocktailGarnish={cocktailGarnish}></CocktailGarnish>
        </div> 
    </>
}