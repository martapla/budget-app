/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import ModalPages from './ModalPages';
import ModalLanguages from './ModalLanguages';


const CardWeb = ({ onShowClick, updatePrices }) => {
  
  const [webShowPanel, setWebShowPanel] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [numLanguages, setNumLanguages] = useState(0);
  // const [showModal, setShowModal] = useState(false);
  const [showModalPage, setShowModalPage] = useState(false);
  const [showModalLanguages, setShowModalLanguages] = useState(false);
  

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
  
  function displayModalPage() {
    setShowModalPage(true);
  }
  
  function closeModalPage() {
    setShowModalPage(false);
  }
  
  function displayModalLanguages() {
    console.log("Show Modal Languages");
    setShowModalLanguages(true);
  }
  
  function closeModalLanguages() {
    console.log("Close Modal Languages");

    setShowModalLanguages(false);
  }
  

return (
  
    <>
      <div className="w-full bg-blue-50 border border-1 border-[#3498db] rounded-xl shadow-xl overflow-hidden mt-5 flex align-baseline justify-around flex flex-column flex-wrap ">

        <div className="w-full md:w-full items-center flex md:flex-row justify-around">
        
            <div className="md:block p-4 md:p-8 ">

                <div className="uppercase tracking-wide text-md md:text-xl text-blue-700 font-bold text-start">Web</div>
            
                  <p className=" mt-1 text-sm md:text-md font-mono text-start">Programming responsive websites.</p>
            </div> 
      
            <div className="p-3 md:p-4 md:p-8 md:ml-5 flex items-center">
              <p className="text-blue-600 font-bold md:text-lg ">500€</p>
            </div>     
          

            <div className="p-4 md:p-8 flex items-center">
                <input onClick={addClick} type="checkbox" className="form-checkbox text-blue-500 h-5 w-5" />
                <label htmlFor="checkbox" className="ml-1 md:ml-2">
                  Add 
                </label>
            </div>
          
        </div>
     
        {webShowPanel && (
        
        <div className='flex-column items-center justify-center border border-2 border-white shadow-xl rounded-md mb-6 mx-6'> 
          
          {/* Pages Input */}
            <div className="p-6 flex flex-row items-center justify-end">

              <label className="text-xs font-medium text-gray-700 mr-3">
                Number of Pages
                <span onClick={() => displayModalPage()}
                      className="p-1 cursor-pointer">ℹ
                </span>
              </label> 
                  
              <button className="bg-yellow-400 text-white px-2 rounded-md mr-2"
              onClick={() => handleNumPagesChange(+1)}>+</button>
            
              <input
                type="text"
                readOnly
                id="numPages"
                value={numPages}
                min={0}
                onChange={(e) => handleNumPagesChange(Number(e.target.value))}
                className=" p-2 border border-gray-300 rounded-md w-10 text-center"
              />

              <button className="bg-yellow-400 text-white px-2 rounded-md ml-2"
                onClick={() => handleNumPagesChange(-1)}>-</button>
              
            </div>
              

            {/* Languages Input */}
            <div className=" p-6 flex flex-row items-center">

              <label className="block text-xs font-medium text-gray-700 mr-3">
                Number of Languages
                <span className="p-1 cursor-pointer"
                onClick={() => displayModalLanguages()}>ℹ</span>
              </label>

              <button className="bg-yellow-400 text-white px-2 rounded-md mr-2"
                      onClick={() => handleNumLanguagesChange(1)}>+</button>
              <input
                type="text"
                readOnly
                id="numLanguages"
                value={numLanguages}
                min={0}
                onChange={(e) => handleNumLanguagesChange(Number(e.target.value))}
                className=" p-2 border border-gray-300 rounded-md w-10 text-center"
              />

              <button className="bg-yellow-400 text-white px-2 rounded-md ml-2"
                      onClick={() => handleNumLanguagesChange(-1)}>-</button>
            </div>
          </div>
        )}

        <ModalPages showModal={showModalPage} closeModal={closeModalPage} />

        <ModalLanguages showModal={showModalLanguages} closeModal={closeModalLanguages} />

      </div>
    </>
  );
};

export default CardWeb;
