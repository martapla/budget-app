/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const CardAdds = ({onShowClick}) => {

    const addClick = () => {
        onShowClick();
    }
  return (
    <div className="w-full md:w-5/6 mx-auto bg-blue-50 border border-2 border-blue-300 rounded-xl shadow-xl overflow-hidden flex align-baseline justify-around mt-3 md:mt-5">
          
      <div className="p-4 md:p-8">
        
        <div className="uppercase tracking-wide md:ml-2 text-md md:text-xl text-blue-500 font-bold text-start">Ads</div>
        
        <p className="mt-1 md:ml-2 text-sm md:text-md font-mono text-start">Strategic advertising research.</p>
      </div>

    <div className="p-3 md:p-4 md:p-8 md:ml-5 flex items-center">
      <p className="text-blue-600 font-bold md:text-lg">400€</p>
    </div>     

    <div className="p-4 md:p-8 flex items-center">
      <input onClick={addClick} type="checkbox" className="form-checkbox text-blue-500 h-5 w-5"/>
      <label htmlFor="checkbox" className="ml-1 md:ml-2">Add</label>
    </div>

  </div>
  )
}

export default CardAdds