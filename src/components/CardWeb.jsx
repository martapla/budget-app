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

  const handleNumPagesChange = (e) => {
    const newNumPages = Number(e.target.value);

    if (!isNaN(newNumPages)) {
      setNumPages(newNumPages);
      const newPagesPrice = newNumPages * 30;
      const newLanguagePrice = numLanguages * 30;
      updatePrices({ pagesPrice: newPagesPrice, languagePrice: newLanguagePrice });
    }
  };
  
  
  const handleNumLanguagesChange = (e) => {
    const newNumLanguages = Number(e.target.value);
    
      setNumLanguages(newNumLanguages);
      const newLanguagePrice = newNumLanguages * 30;
      const newPagesPrice = numPages * 30; 
      updatePrices({ pagesPrice: newPagesPrice, languagePrice: newLanguagePrice });
    
  };

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
    <div className="w-90 mx-auto bg-white rounded-xl shadow-xl overflow-hidden m-5 flex flex-row align-baseline justify-around items-center">
      <div className="p-8 flex ">
        <div className="w-full">
          <div className="uppercase tracking-wide text-sm text-500 font-semibold">Webs</div>
          <p className="mt-1 text-md leading-tight">Programming responsive website</p>
        </div>
      </div>
  
      <div className="p-8 flex">
            <p className="font-medium text-black"> {webShowPanel
             ? `${500}€ + ${numPages * 30}€ per page + ${numLanguages * 30}€ per language = ${
              500 + numPages * 30 + numLanguages * 30
            }`
          : '500€'}
      </p>
      </div>
  
      <div className="p-8 flex ">
        <input onClick={addClick} type="checkbox" className="form-checkbox text-blue-500 h-5 w-5" />
        <label htmlFor="checkbox" className="ml-2">
          Add 
        </label>
      </div>
     
     
        {webShowPanel && (
        <div className="flex flex-col items-start">
            <div className="mt-4 p-8">
                <label htmlFor="numPages" className="block text-sm font-medium text-gray-700">
                Number of Pages
                </label>
                <input
                type="number"
                id="numPages"
                value={numPages}
                min={0}
                onChange={handleNumPagesChange}
                // onChange={(e) => handleInputChange(e, 'pages')}
                className="mt-1 p-2 border border-gray-300 rounded-md"
                />

                <label htmlFor="numLanguages" className="block mt-2 text-sm font-medium text-gray-700">
                Number of Languages
                </label>
                <input
                type="number"
                id="numLanguages"
                value={numLanguages}
                min={0}
                onChange={handleNumLanguagesChange}
                // onChange={(e) => handleInputChange(e, 'languages')}
                className="mt-1 p-2 border border-gray-300 rounded-md"
                />
            </div>
        </div>
        )}
              
    </div>
    </>
  );
};

export default CardWeb;
