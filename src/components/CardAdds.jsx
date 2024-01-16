/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const CardAdds = ({onShowClick}) => {

    const addClick = () => {
        onShowClick();
    }
  return (
    <div className="w-90 mx-auto  bg-blue-50 border border-1 border-[#3498db] rounded-xl shadow-xl overflow-hidden  m-5 flex align-baseline justify-around">
          
    <div className="p-8 ">
      <div className="uppercase tracking-wide text-lg text-500 font-bold">Ads</div>
      <p className=" mt-1 text-md font-mono">Programming responsive website</p>
    </div>

    <div className="p-8 flex items-center">
      <p className="font-medium text-black">400€</p>
    </div>     

    <div className="p-8 flex items-center">
      <input onClick={addClick} type="checkbox" className="form-checkbox text-blue-500 h-5 w-5"/>
      <label htmlFor="checkbox" className="ml-2">Add</label>
    </div>

  </div>
  )
}

export default CardAdds