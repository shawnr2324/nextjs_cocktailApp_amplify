
export default function CocktailAccent( {cocktailAccent} ){
    return <>
        {cocktailAccent.length > 0 && (
            <>
                <p className={`font-semibold`}>Accent:</p>
                <div className={`indent-8 text-xs`}>
                    <ul>
                        {cocktailAccent.map( ({name, amount, scale}) => (
                            <li key={name}>{amount ? amount : ''} {scale} {name}</li>
                        ))}
                    </ul>
                </div>
            </>
        )}
    </>
}

//{cocktailAccent.length > 0 && (<></>)}