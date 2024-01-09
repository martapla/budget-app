/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'


const CardSeo = ({ onShowClick }) => {
    
    const addClick = () => {
    
        onShowClick();
    }


  return (
    <div className="w-90 mx-auto bg-white rounded-xl shadow-xl overflow-hidden  m-5 flex align-baseline justify-around">
          
          <div className="p-8 ">
            <div className="uppercase tracking-wide text-sm text-500 font-semibold">Seo</div>
            <p className=" mt-1 text-md leading-tight ">Programming responsive website</p>
          </div>
    
          <div className="p-8 flex items-center">
            <p className="font-medium text-black">300€</p>
          </div>     

          <div className="p-8 flex items-center">
            <input type="checkbox" onClick={addClick}className="form-checkbox text-blue-500 h-5 w-5"/>
            <label htmlFor="checkbox" className="ml-2">Add</label>
          </div>

    </div>
  )
}

export default CardSeo