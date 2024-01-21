/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ModalLanguages = ({ showModal, closeModal }) => {



  return (
    <>
    {showModal && (
        <div className='bg-gray-400 bg-opacity-75 z-50 absolute top-0 h-full w-full flex items-center justify-center'
                onClick={closeModal}>
                
            <div className='m-4 p-6 bg-gray-100 border-2 rounded-lg border-blue-300'
                onClick={closeModal}>
                
                <h2 className='py-4 text-blue-600 font-bold'> Number of Languages</h2>
                <p className='text-blue-600'> Add quantity of languages you need.</p>
                <p className='text-blue-600'>  Each page has a cost of
                    <span className='text-blue-600 font-bold pl-1'>30€</span>
                </p>
        
            </div>
        </div>
    )}
    </>
  )
};

export default ModalLanguages;