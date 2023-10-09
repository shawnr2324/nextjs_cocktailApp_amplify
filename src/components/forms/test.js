import styles from '../layouts.module.css';
import utilStyles from '../../../styles/utils.module.css';
import ScaleSelectDropdown from './scaleSelectDropdown';
import IngredientTypeSelectDropdown from './ingredientTypeSelectDropdown';
import { DevTool } from '@hookform/devtools';

import { useForm, useFieldArray } from 'react-hook-form';

export default function AddCocktailForm( {children} ){

    

    const form = useForm({
        defaultValues: {
            addCocktailName: "",
            addCocktailImage: "",
            ingredients: [{
                addIngredientType: "",
                addCocktailIngredientName: "",
                addCocktailIngredientAmount: "",
                addIngredientScale: ""
            }],
            garnish: [{
                name: ""
            }],
            addCocktailInstructions: ""
        }
    });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const { fields } = useFieldArray({
        name: "ingredients",
        control
    })
    //console.log(errors);

    const onFormSubmit = (data) => {
        console.log(data);
    };

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
                            <div className={`w-full md:w-1/2 px-3 mb-6`}>
                                <label className={`block uppercase tracking-wide text-gray-700 font-bold mb-2`} htmlFor="addCocktailName">
                                    Cocktail Name:
                                    <input  type="text"
                                            id="addCocktailName"
                                            {...register("addCocktailName", 
                                                        {required: "What is it called?",})
                                            }
                                            className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                            placeholder="Old Fashioned"/>
                                    <p className={`text-red-600 font-normal text-xs`}>{errors.addCocktailName?.message}</p>
                                </label>
                            </div>
                            <div className={`w-full md:w-1/2 px-3 mb-6`}>
                                <label className={`block uppercase tracking-wide text-gray-700 font-bold mb-2`} htmlFor="addCocktailImage">
                                    Add a Picture:
                                
                                    <input  type="file" 
                                            id="addCocktailImage" 
                                            {...register("addCocktailImage")}
                                            className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`}/>
                                </label>
                            </div>
                        </div>

                        {/* Add Ingredient */}
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <span className={`block uppercase tracking-wide text-gray-700 font-bold mb-2`}>
                                    Ingredients:
                                </span>
                            </div>
                            
                            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor="addIngredientType">
                                    <span className={`font-bold`}>Type</span>
                                
                                    <div className="relative">
                                        <select id="addIngredientType"
                                                    {...register("ingredient.addIngredientType", 
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
                                    <p className={`text-red-600 font-normal`}>{errors.ingredient?.addIngredientType?.message}</p>
                                </label>
                            </div>
                            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor="addCocktailIngredientName">
                                    <span className={`font-bold`}>Name:</span>
                                    
                                    <input  type="text"
                                        id="addCocktailIngredientName" 
                                            {...register("ingredient.addCocktailIngredientName", 
                                                        {required: "What is it called?",})
                                            }
                                        className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                        placeholder="Bourbon"/>
                                        <p className={`text-red-600 font-normal`}>{errors.ingredient?.addCocktailIngredientName?.message}</p>
                                </label>
                            </div>
                            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor="addCocktailIngredientAmount">
                                    <span className={`font-bold`}>Amount:</span>
                                    
                                    <input  type="number" 
                                        id="addCocktailIngredientAmount" 
                                            {...register("ingredient.addCocktailIngredientAmount",  {
                                                        required: "How much?",
                                                        validate: {
                                                            nonNegativeNumber: (fieldValue) => { 
                                                                return fieldValue > 0 || "Amount must be greateer than 0.";
                                                            }
                                                        },
                                                        },)
                                            }
                                        className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                        placeholder="2"/>
                                        <p className={`text-red-600 font-normal`}>{errors.ingredient?.addCocktailIngredientAmount?.message}</p>
                                </label>
                            </div>
                            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor="addIngredientScale">
                                    <span className={`font-bold`}>Scale</span>
                                
                                    <div className="relative">
                                        <select id="addIngredientScale" 
                                                    {...register("ingredient.addIngredientScale", 
                                                                {required: "What is the measurment?",})
                                                    }
                                                className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`}>
                                            <option value="">Scale</option>
                                            <option value="oz">oz</option>
                                            <option value="dash">dash</option>
                                            <option value="splash">splash</option>
                                        </select>
                                    </div>
                                    <p className={`text-red-600 font-normal`}>{errors.ingredient?.addIngredientScale?.message}</p>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <span className={`block uppercase tracking-wide text-gray-700 font-bold mb-2`}>
                                    Ingredients:
                                </span>
                            </div>
                            <div>
                                {
                                    fields.map( (field, index) => {
                                        return (
                                            <div key={field.id}>
                                                {/* Ingredient Type */}
                                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0" >
                                                    <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor="addIngredientType">
                                                        <span className={`font-bold`}>Type</span>
                                                    
                                                        <div className="relative">
                                                            <select id="addIngredientType"
                                                                        {...register(`ingredient.${index}.addIngredientType`, 
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
                                                        <p className={`text-red-600 font-normal`}>{errors.ingredient?.addIngredientType?.message}</p>
                                                    </label>
                                                </div>
                                                
                                                {/* Ingredient Name */}
                                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                                    <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor="addCocktailIngredientName">
                                                        <span className={`font-bold`}>Name:</span>
                                                        
                                                        <input  type="text"
                                                            id="addCocktailIngredientName" 
                                                                {...register(`ingredient.${index}.addCocktailIngredientName`, 
                                                                            {required: "What is it called?",})
                                                                }
                                                            className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                                            placeholder="Bourbon"/>
                                                            <p className={`text-red-600 font-normal`}>{errors.ingredient?.addCocktailIngredientName?.message}</p>
                                                    </label>
                                                </div>
                                                {/* Ingredient Amount */}
                                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                                    <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor="addCocktailIngredientAmount">
                                                        <span className={`font-bold`}>Amount:</span>
                                                        
                                                        <input  type="number" 
                                                            id="addCocktailIngredientAmount" 
                                                                {...register(`ingredient.${index}.addCocktailIngredientAmount`,  {
                                                                            required: "How much?",
                                                                            validate: {
                                                                                nonNegativeNumber: (fieldValue) => { 
                                                                                    return fieldValue > 0 || "Amount must be greateer than 0.";
                                                                                }
                                                                            },
                                                                            },)
                                                                }
                                                            className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                                            placeholder="2"/>
                                                            <p className={`text-red-600 font-normal`}>{errors.ingredient?.addCocktailIngredientAmount?.message}</p>
                                                    </label>
                                                </div>
                                                {/* Ingredient Scale */}
                                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                                    <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor="addIngredientScale">
                                                        <span className={`font-bold`}>Scale</span>
                                                    
                                                        <div className="relative">
                                                            <select id="addIngredientScale" 
                                                                        {...register(`ingredient.${index}.addIngredientScale`, 
                                                                                    {required: "What is the measurment?",})
                                                                        }
                                                                    className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`}>
                                                                <option value="">Scale</option>
                                                                <option value="oz">oz</option>
                                                                <option value="dash">dash</option>
                                                                <option value="splash">splash</option>
                                                            </select>
                                                        </div>
                                                        <p className={`text-red-600 font-normal`}>{errors.ingredient?.addIngredientScale?.message}</p>
                                                    </label>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <button type="button" 
                                        onClick={ () => append({})}
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
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <label className={`block uppercase tracking-wide text-gray-700 text-xs  mb-2`} htmlFor="addCocktailGarnishName">
                                    <span className={`font-bold`}>Name:</span>
                                    <input  type="text" 
                                        id="addCocktailGarnishName" 
                                            {...register("addCocktailGarnishName", {
                                                            pattern: {
                                                                value: /^[A-Za-z ]+$/,
                                                                message: "Invalid Garnish."
                                                                },
                                                        },
                                                        )
                                            }
                                        className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                        placeholder="Orange Peel"/>
                                        <p className={`text-red-600 font-normal`}>{errors.addCocktailGarnishName?.message}</p>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                                <button type="button" 
                                        className={`w-full md:w-1/3 bg-transparent md:hover:bg-red-800 text-red-800 font-semibold md:hover:text-white py-2 px-4 border border-red-800 md:hover:border-transparent rounded text-xs`}>
                                    Another Garnish
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
                                <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor="addCocktailInstructions">
                                    <span className={`font-bold`}>How do we make your drink?</span>
                                    <textarea 
                                        id="addCocktailInstructions"
                                            {...register("addCocktailInstructions", 
                                                        {required: "But how do we make it?",})
                                            }
                                        className={`form-input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`} 
                                        rows={4} 
                                        cols={40}
                                    />
                                    <p className={`text-red-600 font-normal`}>{errors.addCocktailInstructions?.message}</p>
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