export default function ScaleSelectDropdown({id, name, label}){
    return (
        <>
            <label className={`block uppercase tracking-wide text-gray-700 text-xs mb-2`} htmlFor={id}>
                <span className={`font-bold`}>{label}</span>
            
                <div className="relative">
                    <select id={id} name={name} className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs`}>
                        <option value="oz">oz</option>
                        <option value="dash">dash</option>
                        <option value="splash">splash</option>
                    </select>
                </div>
            </label>
        </>
    )
}