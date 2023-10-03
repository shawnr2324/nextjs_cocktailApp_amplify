import Link from 'next/link';
import styles from './layouts.module.css';

export default function CocktailSearchBars( {filterCocktail, onFilterCocktail, filterBase, onFilterBaseChange, filterIngredients, onFilterIngredientsChange} ) {
    return <>
        <p className={`${styles.header}`}>Search for a recipe</p>
        <form className={`p-5`}>
            <div className="flex flex-wrap -mx-3 mb-6"> 
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`} htmlFor="cocktail-base">
                        Cocktail:
                    </label>
                    <input  type="text" 
                            id="cocktail-cocktailName" 
                            value={filterCocktail} 
                            onChange={(event) => onFilterCocktail(event.target.value)}
                            className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} 
                            placeholder="Old Fashioned"/>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`} htmlFor="cocktail-base">
                        Base:
                    </label>
                    <input  type="text" 
                            id="cocktail-base" 
                            value={filterBase} 
                            onChange={(event) => onFilterBaseChange(event.target.value)}
                            className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} 
                            placeholder="Whiskey"/>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`} htmlFor="cocktail-ingredients">
                        Ingredients:
                    </label>
                    <input  type="text" 
                            id="cocktail-ingredients" 
                            value={filterIngredients} 
                            onChange={(event) => onFilterIngredientsChange(event.target.value)}
                            className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            placeholder="Aperol, Vermouth, etc"/>
                </div>
            </div>
        </form>
    </>
}