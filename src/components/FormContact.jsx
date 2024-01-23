/* eslint-disable no-unused-vars */
import React from 'react'

const FormContact = () => {
  return (
      <>
        <form>
            <div className="w-full md:w-5/6 mx-auto bg-blue-50 bg-opacity-30 border border-2 border-white rounded-xl shadow-xl overflow-hidden flex flex-col align-baseline justify-around mt-8 md:mt-10">
                  
                <h1 className=" text-xl text-[#3498db] mb-2 md:mb-0 mt-6 flex justify-center font-bold font-mono">Get your budget now</h1>
               
                <div className="w-full flex flex-col md:flex-row justify-evenly">
                      
                    <div className="pt-3 w-full md:w-auto mx-2 md:mt-2">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-60 md:w-20 lg:w-40 border-2 rounded-lg border-yellow-300  p-1 text-sm text-gray-800 dark:text-gray-50 dark:bg-slate-700 outline-none"
                            name="name"
                            id="name"
                        />
                    </div>
                    
                    <div className="pt-3 w-full md:w-auto mx-2 md:mt-2">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-60 md:w-40 lg:w-60 border-2 rounded-lg border-yellow-300 p-1 text-sm text-gray-800 dark:text-gray-50 dark:bg-slate-700 outline-none"
                            name="email"
                            id="email"
                        />
                    </div>
                    
                    <div className="pt-3 w-full md:w-auto mx-2 md:mt-2">
                        <input
                            inputMode="numeric"
                            placeholder="Phone"
                            className="w-60 md:w-40 lg:w-40 border-2 rounded-lg border-yellow-300 p-1 text-sm text-gray-800 dark:text-gray-50 dark:bg-slate-700 outline-none"
                            name="phone_number"
                            id="phone_number"
                        />
                    </div>
                    
                    <div className="pt-3 w-full md:w-auto mx-2">
                        <button className=" mb-6 p-2 md:mr-4 border-2 border-yellow-300 text-sm text-blue-400 bg-yellow rounded-md font-mono custom-box-shadow custom-box-shadow:hover"
                        type="submit">Ask Budget
                        </button>
                    </div>
                </div>
            </div>
       </form>
    </>
  )
}

export default FormContact