import Image from 'next/image';

export default function CocktailImage( {cocktailImage, cocktailName} ){
    return <>
        <Image
            src={`/images/${cocktailImage}`}
            height={200}
            width={200}
            alt={`${cocktailName}`}
            className={`rounded-full`}
        />
    </>
}