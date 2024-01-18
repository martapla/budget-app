/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';

const Welcome = () => {


    return (
      <>
        <div className="mt-20 pt-10 flex flex-col items-center justify-center">
                
            <h1 className="mt-20 text-blue-600 text-3xl mb-10 font-bold">
                Welcome to our Studio Web
            </h1>

            <div className="text-lg text-[#3498db] mb-6 font-bold font-mono">
                <p className="mb-4 ">We can make your Professional Website</p>
                <p className="mb-4">Check our Services,</p>
                <p className="mb-4">and tell us what you need.</p>
            </div>

            <Link to={"/home"}>
                <button className="mt-10 p-2 border-2 border-yellow-300 text-blue-400 bg-yellow rounded-md font-mono custom-box-shadow custom-box-shadow:hover"
                        type="button">Let's Start</button>
           </Link>
        

                
        </div>
      </>
  );
};

export default Welcome;