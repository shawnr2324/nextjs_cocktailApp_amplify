
export default function CocktailGarnish( {cocktailGarnish} ){
    return( <>
        {cocktailGarnish.length > 0 && (
            <>
            <p className={`font-semibold`}>Garnish:</p>
            <div className={`indent-8 text-xs`}>
                <ul>
                    {cocktailGarnish.map( ({name}) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>
            </>
        )}
    </>
    )
}