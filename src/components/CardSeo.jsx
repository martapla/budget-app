/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'


const CardSeo = ({ onShowClick }) => {
    
    const addClick = () => {
    
        onShowClick();
    }


  return (
    <div className="w-full md:w-5/6 mx-auto bg-blue-50 border border-1 border-[#3498db] rounded-xl shadow-xl overflow-hidden flex align-baseline justify-around ">
          
      <div className="p-4 md:p-8">
        
         <div className="uppercase tracking-wide md:ml-2 text-md md:text-xl text-blue-700 font-bold text-start">Seo</div>
        
         <p className="mt-1 md:ml-2 text-sm md:text-md font-mono text-start">Visibility with strategic content.</p>
      </div>
    
          <div className="p-3 md:p-4 md:p-8 flex items-center">
            <p className="text-blue-600 font-bold md:text-lg ">300€</p>
          </div>     

          <div className="p-4 md:p-8 flex items-center">
            <input type="checkbox" onClick={addClick} className="form-checkbox text-blue-500 h-5 w-5"/>
            <label htmlFor="checkbox" className="ml-1 md:ml-2">Add</label>
          </div>

    </div>
  )
}

export default CardSeo