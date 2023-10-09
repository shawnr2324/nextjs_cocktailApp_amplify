import CocktailName from './cocktailName';
import CocktailIngrdients from './cocktailIngredients';
import CocktailImage from './cocktailImage';
import CocktailInstructions from './cocktailInstructions';
import styles from './layouts.module.css';

export default function CocktailPanel( {cocktail, filterBase, filterIngredients} ){
    return <>
        <div className={`grid grid-cols-1 gap-3 py-5 px-4 border bg-gray-200 mx-auto`}>
            {/* <div className={`flex items-center justify-center`}>
                <CocktailImage  cocktailImage={cocktail.image} 
                                cocktailName={cocktail.name}>
                </CocktailImage>
            </div> */}
            
            <div className={`mb-2`}>
                <CocktailName cocktailName={cocktail.name}></CocktailName>

                <CocktailIngrdients cocktailIngredients={cocktail.ingredients} 
                                    cocktailGarnish={cocktail.garnish}>
                </CocktailIngrdients>
            </div>

            <div className={`md:col-span-2`}>
                <CocktailInstructions cocktailInstrictions={cocktail.instructions}></CocktailInstructions>
            </div>
        </div>
    </>
}