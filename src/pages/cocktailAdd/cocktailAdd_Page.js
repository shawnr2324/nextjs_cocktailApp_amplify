import Head from 'next/head';
import Layout from '../../components/layout';
import { useState } from 'react';
import AddCocktailForm from '../../components/forms/addCocktailForm';

import { useFieldArray, useForm } from 'react-hook-form';

export default function AddCocktailPage(){
    

    return <>
        <Layout>
            <Head>
                <title>Cocktail Add Page</title>
            </Head>

            <AddCocktailForm></AddCocktailForm>
        </Layout>
    </>
}