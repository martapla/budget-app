/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {React, useState } from 'react';


const CardWeb = ({ onShowClick, updatePrices }) => {
  
  const [webShowPanel, setWebShowPanel] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [numLanguages, setNumLanguages] = useState(0);
  
  const webPrice = 500;
 

  const addClick = () => {
    onShowClick();
   
    setWebShowPanel(!webShowPanel);
  };

  const handleNumPagesChange = (amount) => {
    const newNumPages = numPages + amount;
    if (newNumPages >= 0) {
      setNumPages(newNumPages);
      const newPagesPrice = newNumPages * 30;
      const newLanguagePrice = numLanguages * 30;
      updatePrices({ pagesPrice: newPagesPrice, languagePrice: newLanguagePrice });
    }
  };

  const handleNumLanguagesChange = (amount) => {
    const newNumLanguages = numLanguages + amount;
    if (newNumLanguages >= 0) {
      setNumLanguages(newNumLanguages);
      const newLanguagePrice = newNumLanguages * 30;
      const newPagesPrice = numPages * 30;
      updatePrices({ pagesPrice: newPagesPrice, languagePrice: newLanguagePrice });
    }
  };
        //------- Another way ------//
  
  // const handleInputChange = (e, type) => {
  //   const newValue = Number(e.target.value);
   
  //     if (type === 'pages') {
  //       setNumPages(newValue);
  //     } else if (type === 'languages') {
  //       setNumLanguages(newValue);
  //     }

  //     const newPagesPrice = numPages * 30;
  //     const newLanguagePrice = numLanguages * 30;
  //     updatePrices({ pagesPrice: newPagesPrice, languagePrice: newLanguagePrice });
  //   }
  


return (
  
    <>
    <div className="w-90 mx-auto  bg-blue-50 border border-1 border-[#3498db] rounded-xl shadow-xl overflow-hidden m-5 flex flex-column align-baseline justify-around items-center flex-wrap">

      <div className='w-full flex items-center justify-around flex-wrap'>
        
          <div className="p-8 ">
              <div className="uppercase tracking-wide text-lg text-500 font-bold">Web</div>
              <p className=" mt-1 text-md font-mono">Programming responsive website</p>
          </div>
    
          <div className="p-8 flex">
              <p className="font-medium text-black"> {webShowPanel
              ? `${500}€ + ${numPages * 30}€ per page + ${numLanguages * 30}€ per language = ${
                500 + numPages * 30 + numLanguages * 30 }€`
              : '500€'}
              </p>
          </div>
      
          <div className="p-8 flex ">
              <input onClick={addClick} type="checkbox" className="form-checkbox text-blue-500 h-5 w-5" />
              <label htmlFor="checkbox" className="ml-2">
                Add 
              </label>
          </div>
          
      </div>
     
      {webShowPanel && (
        <div className="flex flex-column flex-wrap items-center justify-end mr-14">
         
         {/* Pages Input */}
          <div className=" p-6 flex flex-row items-center ">
            <label htmlFor="numPages"
                   className="text-xs font-medium text-gray-700 mr-3">
                   Num of Pages
            </label>
            
            <button className="bg-yellow-400 text-white px-2 rounded-md mr-2"
             onClick={() => handleNumPagesChange(page=>page+1)}>+</button>
           


            <input
              type="text"
              id="numPages"
              value={numPages}
              min={0}
              onChange={(e) => handleNumPagesChange(Number(e.target.value))}
              className=" p-2 border border-gray-300 rounded-md w-10"
            />

            <button className="bg-yellow-400 text-white px-2 rounded-md ml-2"
              onClick={() => handleNumPagesChange(-1)}>-</button>
            
          </div>
            

          {/* Languages Input */}
          <div className=" p-6 flex flex-row items-center ">
            <label htmlFor="numLanguages"
                   className="block text-xs font-medium text-gray-700 mr-3">
                   Num of Languages
            </label>

            <button className="bg-yellow-400 text-white px-2 rounded-md mr-2"
                    onClick={() => handleNumLanguagesChange(1)}>+</button>
            <input
              type="text"
              id="numLanguages"
              value={numLanguages}
              min={0}
              onChange={(e) => handleNumLanguagesChange(Number(e.target.value))}
              className=" p-2 border border-gray-300 rounded-md w-10"
            />
            <button className="bg-yellow-400 text-white px-2 rounded-md ml-2"
                    onClick={() => handleNumLanguagesChange(-1)}>-</button>
          </div>
        </div>
      )}
              
    </div>
    </>
  );
};

export default CardWeb;
