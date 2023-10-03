
export default function CocktailBase( {cocktailBase} ){
    return <>
        {cocktailBase.length > 0 && (
            <>
            <p className={`font-semibold`}>Base:</p>
            <div className={`indent-8 text-xs`}>
                <ul>
                    {cocktailBase.map( ({name, amount, scale}) => (
                        <li key={name}> {amount ? amount : ''} {scale} {name}</li>
                    ))}
                </ul>
            </div>
            </>
        )}
    </>
}