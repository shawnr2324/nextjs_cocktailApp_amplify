import styles from './layouts.module.css';

export default function CocktailName( {cocktailName} ){
    return <>
        <div>
            <h4 className={`${styles.header} font-bold`}>{cocktailName}</h4>
        </div>
        
    </>
}