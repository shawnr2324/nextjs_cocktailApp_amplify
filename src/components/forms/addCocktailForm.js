import styles from '../layouts.module.css';
import utilStyles from '../../../styles/utils.module.css';
import { DevTool } from '@hookform/devtools';
import { API } from 'aws-amplify';
import { createCocktail } from '../../graphql/mutations';

import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect } from 'react';

export default function AddCocktailForm(){
    const form = useForm({
        defaultValues: {
            name: "",
            ingredients: [{
                type: "",
                name: "",
                amount: "",
                scale: ""
            }],
            instructions: ""
        }
    });
    const { register, control, handleSubmit, formState, getValues, reset } = form;
    const { errors, dirtyFields, isSubmitSuccessful } = formState;
    const { 
        fields: ingredientsFields, 
        append: ingredientAppend, 
        remove: ingredientRemove 
    } = useFieldArray({
        name: "ingredients",
        control
    });

    const { 
        fields: garnishFields, 
        append: garnishAppend, 
        remove: garnishRemove 
    } = useFieldArray({
        name: "garnish",
        control
    });
    //console.log(register("ingredients"));
    //console.log("errors:",errors);

    const dilutionMeasurementNotRequired = (index) => {
        if(getValues(`ingredients.${index}.type`) == 'dilution'){
            return true;
        }
        return false;
    };

    const accentMeasurementNotRequired = (index) => {
        if(getValues(`ingredients.${index}.type`) == 'accent'){
            return true;
        }
        return false;
    };

    const onFormSubmit = async (data) => {
        console.log("Form Data:",data);
        const result = await API.graphql({
            query: createCocktail, 
            variables: {
                input: {
                    name: data.name,
                    ingredients: data.ingredients,
                    garnish: data.garnish,
                    instructions: data.instructions
                }
            }
        })

        console.log("Result:", result);
    };

    useEffect( () => {
        if(isSubmitSuccessful){
            reset();
            window.scrollTo(0, 0);
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <>
            <div className={`${styles.header} mb-2`}>
                <h1 className={`${utilStyles.heading2Xl}`}>Share a Recipe!</h1>
            </div>
            <div className={`w-full border p-2 hover:border-dotted border-gray-200 rounded-md`}>
                <form 
                    onSubmit={handleSubmit(onFormSubmit)}
                    noValidate
                    // add `max-w-lg` class to make form narrower
                    className={`w-full`}>
                        <div className={`flex flex-wrap -mx-3 mb-2`}> 
                            <div className={`w-full px-3 mb-6`}>
                                <label className={`block uppercase tracking-wide text-gray-700 font-bold mb-2`} htmlFor="name">
                                    Cocktail Name:
                                    <input  type="text"
                                            id="name"
                                            {...register("name", 
                                                        {required: "What is it called?",})
                                            }
                                            className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                            placeholder="Old Fashioned"/>
                                    <p className={`text-red-600 font-normal text-xs`}>{errors.name?.message}</p>
                                </label>
                            </div>
                            {/* <div className={`w-full md:w-1/2 px-3 mb-6`}>
                                <label className={`block uppercase tracking-wide text-gray-700 font-bold mb-2`} htmlFor="image">
                                    Add a Picture:
                                
                                    <input  type="file" 
                                            id="image" 
                                            {...register("image")}
                                            className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`}/>
                                </label>
                            </div> */}
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <span className={`block uppercase tracking-wide text-gray-700 font-bold mb-2`}>
                                    Ingredients:
                                </span>
                            </div>
                            <div className={`w-full `}>
                                {
                                    ingredientsFields.map( (ingredientsField, index) => {
                                        return (
                                            <div className={`flex flex-wrap mb-2`} key={ingredientsField.id}>
                                                {/* Ingredient Type */}
                                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0" >
                                                    <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor={`ingredients.${index}.type`}>
                                                        <span className={`font-bold`}>Type</span>
                                                    
                                                        <div className="relative">
                                                            <select id={`ingredients.${index}.type`}
                                                                    {...register(`ingredients.${index}.type`, 
                                                                                {required: "Specify the ingredient type.",})
                                                                    }
                                                                    className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`}>
                                                                <option value="">Type</option>
                                                                <option value="base">Booze</option>
                                                                <option value="modifier">Modifier</option>
                                                                <option value="accent">Accent</option>
                                                                <option value="dilution">Dilution</option>
                                                            </select>
                                                        </div>
                                                        <p className={`text-red-600 font-normal`}>{errors.ingredients?.[index]?.type?.message}</p>
                                                    </label>
                                                </div>
                                                
                                                {/* Ingredient Name */}
                                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                                    <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor={`ingredients.${index}.name`}>
                                                        <span className={`font-bold`}>Name:</span>
                                                        
                                                        <input  type="text"
                                                                id={`ingredients.${index}.name`}
                                                                {...register(`ingredients.${index}.name`, 
                                                                            {required: "What is it called?",})
                                                                }
                                                                className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                                                placeholder="Bourbon"/>
                                                            <p className={`text-red-600 font-normal`}>{errors.ingredients?.[index]?.name?.message}</p>
                                                    </label>
                                                </div>
                                                {/* Ingredient Amount */}
                                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                                    <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor={`ingredients.${index}.amount`}>
                                                        <span className={`font-bold`}>Amount:</span>
                                                        
                                                        <input  type="text" 
                                                                id={`ingredients.${index}.amount`}
                                                                {...register(`ingredients.${index}.amount`,  {
                                                                                validate: {
                                                                                    nonNegativeNumber: (fieldValue) => { 
                                                                                        return (dilutionMeasurementNotRequired(index) || fieldValue > 0) || "Amount must be greateer than 0.";
                                                                                    },
                                                                                },
                                                                            },)
                                                                }
                                                                className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                                                placeholder="2"/>
                                                            <p className={`text-red-600 font-normal`}>{errors.ingredients?.[index]?.amount?.message}</p>
                                                    </label>
                                                </div>
                                                {/* Ingredient Scale */}
                                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                                    <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor={`ingredients.${index}.scale`}>
                                                        <span className={`font-bold`}>Scale</span>
                                                    
                                                        <div className="relative">
                                                            <select id={`ingredients.${index}.scale`}
                                                                    {...register(`ingredients.${index}.scale`, 
                                                                                {required: {
                                                                                    value: !dilutionMeasurementNotRequired(index) && !accentMeasurementNotRequired(index),
                                                                                    message:"What is the measurment?"
                                                                                } ,})
                                                                    }
                                                                    className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`}>
                                                                <option value="">Scale</option>
                                                                <option value="oz">oz</option>
                                                                <option value="dash">dash</option>
                                                                <option value="splash">splash</option>
                                                            </select>
                                                        </div>
                                                        <p className={`text-red-600 font-normal`}>{errors.ingredients?.[index]?.scale?.message}</p>
                                                    </label>
                                                </div>
                                                
                                                {
                                                    index > 0 && (
                                                        <div className="w-full md:w-4/4 px-3 mb-6 md:mb-0 text-end ">
                                                            <div className={``}>
                                                                <button type="button" 
                                                                        onClick={ () => ingredientRemove(index)}
                                                                        className={`w-full md:w-1/12 bg-transparent md:hover:bg-red-800 text-red-800 font-semibold md:hover:text-white py-2 border border-red-800 md:hover:border-transparent rounded text-xs`}>
                                                                    X
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <button type="button" 
                                        onClick={ () => ingredientAppend({
                                                            type: "",
                                                            name: "",
                                                            amount: "",
                                                            scale: ""
                                                        })
                                                }
                                        className={`w-full md:w-1/3 bg-transparent md:hover:bg-red-800 text-red-800 font-semibold md:hover:text-white py-2 px-4 border border-red-800 md:hover:border-transparent rounded text-xs`}>
                                    Another Ingredient
                                </button>
                            </div>
                        </div>

                        {/* Add Garnish */}
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <span className={`block uppercase tracking-wide text-gray-700 font-bold mb-2`}>
                                    Garnish:
                                </span>
                            </div>
                            <div className={`w-full `}>
                                {
                                    garnishFields.map( (garnishField, index) =>{
                                        return(
                                            <div key={garnishField.id}>
                                                <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0" >
                                                    <label className={`block uppercase tracking-wide text-gray-700 text-xs  mb-2`} htmlFor={`garnish.${index}.name`}>
                                                        <span className={`font-bold`}>Name:</span>
                                                        <input  type="text" 
                                                            id={`garnish.${index}.name`}
                                                                {...register(`garnish.${index}.name`, {
                                                                                pattern: {
                                                                                    value: /^[A-Za-z ]+$/,
                                                                                    message: "Invalid Garnish."
                                                                                    },
                                                                            },
                                                                            )
                                                                }
                                                            className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                                            placeholder="Orange Peel"/>
                                                            <p className={`text-red-600 font-normal`}>{errors.garnish?.[index]?.name?.message}</p>
                                                    </label>
                                                </div>
                                                {
                                                    index >= 0 && (
                                                        <div className="w-full md:w-4/4 px-3 mb-6 md:mb-0 text-end ">
                                                            <div className={``}>
                                                                <button type="button" 
                                                                        onClick={ () => garnishRemove(index)}
                                                                        className={`w-full md:w-1/12 bg-transparent md:hover:bg-red-800 text-red-800 font-semibold md:hover:text-white py-2 border border-red-800 md:hover:border-transparent rounded text-xs`}>
                                                                    X
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <button type="button" 
                                        onClick={ () => {
                                            garnishAppend({
                                                name: ""
                                            });

                                        }}
                                        className={`w-full md:w-1/3 bg-transparent md:hover:bg-red-800 text-red-800 font-semibold md:hover:text-white py-2 px-4 border border-red-800 md:hover:border-transparent rounded text-xs`}>
                                    {dirtyFields.garnish?.length ? "Another" : "Add"} Garnish
                                </button>
                            </div>
                        </div>

                        {/* Add Instructions */}
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <span className={`block uppercase tracking-wide text-gray-700 font-bold mb-2`}>
                                    Instructions:
                                </span>
                            </div>
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor="instructions">
                                    <span className={`font-bold`}>How do we make your drink?</span>
                                    <textarea 
                                        id="instructions"
                                            {...register("instructions", 
                                                        {required: "But how do we make it?",})
                                            }
                                        className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                        rows={4} 
                                        cols={40}
                                    />
                                    <p className={`text-red-600 font-normal`}>{errors.instructions?.message}</p>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3 mb-6 md:mb-0">
                                <button type="submit" 
                                        className={`w-full bg-red-800 hover:bg-white text-white font-semibold hover:text-red-800 py-2 px-4 border border-transparent hover:border-red-800 rounded`}>
                                    Add!
                                </button>
                            </div>
                        </div>
                </form>
                <DevTool control={control}/>
            </div>
        </>
    )
}