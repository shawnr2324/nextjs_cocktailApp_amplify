
export default function CocktailModifier( {cocktailModifier} ){
    return <>
        {cocktailModifier.length > 0 && (
            <>
            <p className={`font-semibold`}>Modifiers:</p>
            <div className={`indent-8 text-xs`}>
                <ul>
                {cocktailModifier.map( ({name, amount, scale}) => (
                    <li key={name}> {amount ? amount : ''} {scale} {name}</li>
                ))}
                </ul>
            </div>
            </>
        )}
    </>
}