export default function IngredientTypeSelectDropdown({id, name, label}){
    return (
        <>
            <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor={id}>
                <span className={`font-bold`}>{label}</span>
            
                <div className="relative">
                    <select id={id} name={name} className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`}>
                        <option value="base">Booze</option>
                        <option value="modifier">Modifier</option>
                        <option value="accent">Accent</option>
                        <option value="dilution">Dilution</option>
                    </select>
                </div>
            </label>
        </>
    )
}