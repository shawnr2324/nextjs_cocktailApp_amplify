import { API } from 'aws-amplify';
import { listCocktails } from '../graphql/queries';

export default async function ListCocktails(){
    const result = await API.graphql({ query: listCocktails})
    return result;
}