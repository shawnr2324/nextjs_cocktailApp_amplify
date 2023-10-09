export default function InputField( {id, type, value, onChange, placeholder} ){
    return(
        <>
            <input  type="text" 
                id="cocktail-cocktailName" 
                value={filterCocktail} 
                onChange={(event) => onFilterCocktail(event.target.value)}
                className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} 
                placeholder="Old Fashioned"/>
        </>
    );
}