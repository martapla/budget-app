import CardAdds from './components/CardAdds'
import CardSeo from './components/CardSeo'
import CardWeb from './components/CardWeb'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormContact from './components/FormContact';

function App() {

  const [seoShowValue, setSeoShowValue] = useState(false);
  const [addsShowValue, setAddsShowValue] = useState(false);
  const [webShowValue, setWebShowValue] = useState(false);

  const [pagesPrice, setPagesPrice] = useState(0);
  const [languagePrice, setLanguagePrice] = useState(0);
 
  const seoPrice = 300;
  const addsPrice = 400;
  const webPrice = 500;

 
  const handleSeoClick = () => {
    setSeoShowValue(!seoShowValue);
  };

  
  const handleAddsClick = () => {
    setAddsShowValue(!addsShowValue);
  };

  const handleWebClick = () => {
    setWebShowValue(!webShowValue);
  };

  const handleWebPriceUpdate = ({ pagesPrice, languagePrice }) => {
    setPagesPrice(pagesPrice);
    setLanguagePrice(languagePrice);
  };

    let totalPrice = 0;

  
    if (seoShowValue) {
      totalPrice += seoPrice;
    }

    if (addsShowValue) {
      totalPrice += addsPrice;
    }

    if (webShowValue) {
      totalPrice += webPrice + pagesPrice + languagePrice;
    }

  
    return (
      <>
        <header className='flex justify-start text-blue-500 text-sm md:text-md font-semibold md:ml-6'>
           <Link to={"/"}>
               <button type="button"> ≺ Go Back</button>
           </Link>
        </header>
        <main>
          <h1 className="p-4 md:p-0 md:pb-8 text-blue-600 text-xl md:text-2xl font-semibold">Calculate your Budget </h1>

          <CardSeo
            onShowClick={handleSeoClick} />

          <CardAdds
            onShowClick={handleAddsClick} />

          <CardWeb
            onShowClick={handleWebClick}
            updatePrices={handleWebPriceUpdate}
          />
          
        
          {(seoShowValue || addsShowValue || webShowValue) && (

            <div className="pt-4 pr-3 md:pr-20 lg:pr-28 xl:mr-8 flex justify-end">
              <p className="text-blue-500 md:text-lg font-semibold">Total Price: {totalPrice} €</p>
          
            </div>
          )}


        </main>

        <FormContact
          seoShowValue={seoShowValue} addsShowValue={addsShowValue} webShowValue={webShowValue}
          totalPrice={totalPrice}
         />
      </>
    )
  }


  export default App;
