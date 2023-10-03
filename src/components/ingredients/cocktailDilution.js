
export default function CocktailDilution( {cocktailDilution} ){
    return <>
        {cocktailDilution.length > 0 && (
            <>
            <p className={`font-semibold`}>Dilution:</p>
            <div className={`indent-8 text-xs`}>
                <ul>
                    {cocktailDilution.map( ({name, amount, scale}) => (
                        <li key={name}>{amount ? amount : ''} {scale} {name}</li>
                    ))}
                </ul>
            </div>
            </>
        )}
    </>
}