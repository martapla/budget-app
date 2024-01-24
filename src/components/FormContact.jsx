/* eslint-disable react/prop-types */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const FormContact = ({ seoShowValue, addsShowValue, webShowValue, totalPrice}) => {
    
  const [username, setUserName] = useState('');
  const [submitUsername, setSubmitUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [submitUserEmail, setSubmitUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [submitUserPhone, setSubmitUserPhone] = useState('');
    
  const handleSubmit = (e) => {
    e.preventDefault();
      setSubmitUsername(username);
      setSubmitUserEmail(userEmail);
      setSubmitUserPhone(userPhone);

      setUserName('');
      setUserEmail('');
      setUserPhone('');
  };

  const handleNameChange = (e) => {
      setUserName(e.target.value);
  };
    
  const handleEmailChange = (e) => {
      setUserEmail(e.target.value);
  };
    
  const handlePhoneChange = (e) => {
      setUserPhone(e.target.value);
  };
    
    
  return (
      <>
        <form onSubmit={handleSubmit}>
            <div className="w-full md:w-5/6 mx-auto bg-blue-50 bg-opacity-80 border border-4 border-white rounded-xl shadow-xl overflow-hidden flex flex-col align-baseline justify-around mt-8 md:mt-10">
                  
                <h1 className=" text-xl text-[#3498db] mb-2 md:mb-0 mt-4 flex justify-center  font-mono">Get your Budget now</h1>
               
                <div className="w-full flex flex-col md:flex-row justify-evenly">
                      
                    <div className="pt-3 w-full md:w-auto mx-2 md:mt-2">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-60 md:w-20 lg:w-40 border-2 rounded-lg border-yellow-300  p-1 text-sm text-gray-800 outline-none"
                            name="name"
                            id="name"
                            onChange={handleNameChange}
                            autoComplete="on"
                            value={username}
                        />
                    </div>
                    
                    <div className="pt-3 w-full md:w-auto mx-2 md:mt-2">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-60 md:w-40 lg:w-60 border-2 rounded-lg border-yellow-300 p-1 text-sm text-gray-800 outline-none input-internal-autofill-selected "
                            name="email"
                            id="email"
                            onChange={handleEmailChange}
                            autoComplete="on"
                            value={userEmail}
                            
                        />
                    </div>
                    
                    <div className="pt-3 w-full md:w-auto mx-2 md:mt-2">
                        <input
                            inputMode="numeric"
                            placeholder="Phone"
                            className="w-60 md:w-40 lg:w-40 border-2 rounded-lg border-yellow-300 p-1 text-sm text-gray-800 dark:text-gray-50 dark:bg-white outline-none"
                            name="phone_number"
                            id="phone_number"
                            onChange={handlePhoneChange}
                            autoComplete="on"
                            value={userPhone}
                        />
                    </div>
                    
                    <div className="pt-3 w-full md:w-auto mx-2">
                        <button className=" mb-6 p-2 md:mr-4 border-2 border-yellow-300 text-sm text-blue-400 bg-white rounded-md font-mono custom-box-shadow custom-box-shadow:hover" 
                        type="submit">Ask Budget
                        </button>
                      </div>
                     
                </div>
            </div>
          </form>

          {(submitUsername && submitUserEmail && submitUserPhone) && (
              <div className="w-full md:w-5/6 mx-auto bg-blue-50 bg-opacity-80 border border-2 border-blue-300 rounded-xl shadow-xl overflow-hidden flex flex flex-col align-baseline justify-around mt-8 md:mt-10 ">
                   <p className="mt-2 text-md  text-blue-600 font-semibold">
                                Thanks to Submit {submitUsername}!
                    </p>
                    <p className="my-1 text-sm text-blue-600 font-semibold">
                    You will receive an email with your details:
                  </p>

                  <div className='md:flex md:justify-around'>
                      <div className='flex flex-col items-start mb-2 px-4'>
                            <p className='text-blue-400 md:mb-1'> Contact Info:</p>
                            <p className="text-sm text-blue-500 font-semibold">
                            - Email: {submitUserEmail}
                            </p>
                            
                            <p className="mt-1 text-sm text-blue-500 font-semibold">
                            - Phone: {submitUserPhone}
                            </p>
                        </div>

                        <div className=" flex flex-col items-start px-4 mb-2 text-blue-500 ">
                                <p className='text-blue-400 md:mb-1'> Services Added:</p>
                                {seoShowValue && <p className="text-sm font-semibold"> - SEO </p>}
                                {addsShowValue && <p className="text-sm font-semibold"> - ADS </p>}
                                {webShowValue && <p className="text-sm font-semibold"> - WEB</p>}
                        </div>
                      
                        <div className="mb-3 flex flex-col justify-center text-sm md:text-md text-blue-600 font-semibold">
                            {totalPrice && <span> Total Price: {totalPrice} €</span>}
                        </div>
                  </div>

              </div>
          )}
          
    </>
  )
}

export default FormContact