import Head from 'next/head';
import Layout from '../../components/layout';
import ContentLayout from '../../components/contentLayouts';
import CocktailSearchBars from '../../components/cocktailSearchBars';
import CocktailPanel from '../../components/cocktailPanel';
import styles from '../../components/layouts.module.css';
import utilStyles from '../../../styles/utils.module.css';
import listOfCocktails from '../../data/cocktails_v2.json';
import { useState } from 'react';
import { API } from 'aws-amplify';
import { listCocktails } from '../../graphql/queries';

export default function CocktailSearchMain( {cocktails} ) {
    const [filterCocktail, setFilterCocktail] = useState('');
    const [filterBase, setFilterBase] = useState('');
    const [filterIngredients, setFilterIngredients] = useState('');
    const searchedCocktails = [];
    
    cocktails.forEach( (cocktail) => {
        let matchCocktail = filterCocktail == "" ? true : checkMatchCocktail(cocktail.name, filterCocktail);
        let matchBase = filterBase == "" ? true : checkMatch_FirstLetter(cocktail.ingredients, filterBase);
        let matchIngredients = filterIngredients == "" ? true : checkMatch_AnyLetter([...cocktail.ingredients, ...cocktail.garnish], filterIngredients);
        if( ((!matchCocktail || !matchBase || !matchIngredients)) ){
            return;
        }
        searchedCocktails.push(cocktail);
    });

    return <>
        <Layout>
            <Head>
                <title>Cocktail Search Page</title>
            </Head>
            
            <div className={`${styles.header}`}>
                <h1 className={`${utilStyles.heading2Xl}`}>What can I get you?</h1>
            </div>
            
            
            <CocktailSearchBars filterCocktail={filterCocktail}
                                onFilterCocktail={setFilterCocktail}
                                filterBase={filterBase} 
                                onFilterBaseChange={setFilterBase}
                                filterIngredients={filterIngredients}
                                onFilterIngredientsChange={setFilterIngredients}>
            </CocktailSearchBars>

        </Layout>

        <ContentLayout>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3`}>
                {searchedCocktails.map( (cocktail, index) => (
                    <CocktailPanel  key={cocktail.name} 
                                    cocktail={cocktail}
                                    filterCocktail={filterCocktail}
                                    filterBase={filterBase}
                                    filterIngredients={filterIngredients}>
                    </CocktailPanel>
                ))}
            </div>
        </ContentLayout>
    </>
}

export async function getServerSideProps(){
    const result = await API.graphql({ query: listCocktails})
    console.log(result.data.listCocktails.items);

    const cocktailList_API = result.data.listCocktails.items
    console.log(cocktailList_API);

    return{
        props: {
            cocktails: cocktailList_API,
        }
    }
}

export function checkMatchCocktail(cocktailName, filterBase){
    let matchCocktail = cocktailName.toLowerCase().trim().indexOf(filterBase.toLowerCase()) !== -1
    return matchCocktail;
}

export function checkMatch_FirstLetter(objectToMatch, userFilter){
    let match = false
    objectToMatch.forEach( (object) => {
        if(object.type == "base" && object.name.toLowerCase().trim().indexOf(userFilter.toLowerCase()) == 0){
            match = true;
            return;
        }
    });
    return match;
}

export function checkMatch_AnyLetter(objectToMatch, userFilter){
    let match = false
    let matchArray = userFilter.split(',');
    objectToMatch.forEach( (object) => {
        matchArray.forEach( (string) => {
            if(object.type != "base" && object.name.toLowerCase().trim().indexOf(string.toLowerCase().trim() != '' ? string.toLowerCase().trim() :  userFilter) !== -1){
                match = true;
                return;
            }
        });
    });
    return match;
}
