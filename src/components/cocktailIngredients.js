import CocktailBase from './ingredients/cocktailBase';
import CocktailModifier from './ingredients/cocktailModifier'
import CocktailAccent from './ingredients/cocktailAccent';
import CocktailDilution from './ingredients/cocktailDilution';
import CocktailGarnish from './ingredients/cocktailGarnish';

export default function CocktailIngrdients( {cocktailBase, cocktailModifier, cocktailAccent, cocktailDilution, cocktailGarnish, cocktailName} ){
    return <>
        <div className={`bg-white p-1 rounded`}>
            <CocktailBase cocktailBase={cocktailBase}></CocktailBase>
            <CocktailModifier cocktailModifier={cocktailModifier}></CocktailModifier>
            <CocktailAccent cocktailAccent={cocktailAccent}></CocktailAccent>
            <CocktailDilution cocktailDilution={cocktailDilution}></CocktailDilution>
            <CocktailGarnish cocktailGarnish={cocktailGarnish}></CocktailGarnish>
        </div>
    </>
}