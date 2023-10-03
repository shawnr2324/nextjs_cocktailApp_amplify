import Image from 'next/image';

export default function CocktailImage( {cocktailImage, cocktailName} ){
    return <>
        <img src={`/images/${cocktailImage}`} className={`rounded-full`} alt={`${cocktailName}`} width="200" height="200"/>
        {/* <Image
            src={`/images/${cocktailImage}`}
            height={200}
            width={200}
            alt={`${cocktailName}`}
            className={`rounded-full`}
        /> */}
    </>
}