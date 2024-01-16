import './App.css'
import CardAdds from './components/CardAdds'
import CardSeo from './components/CardSeo'
import CardWeb from './components/CardWeb'
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <header>
           <Link to={"/"}>
               <button type="button">Go Back</button>
           </Link>
        </header>
        <main>
          <h1 className="p-8 text-blue-600 text-2xl font-bold">Calculate your Budget Now</h1>

          <CardSeo
            onShowClick={handleSeoClick} />

          <CardAdds
            onShowClick={handleAddsClick} />

          <CardWeb
            onShowClick={handleWebClick}
            updatePrices={handleWebPriceUpdate}
          />
          
        
          {(seoShowValue || addsShowValue || webShowValue) && (

            <div className="p-8">
              <p className="text-[#3498db] text-xl font-bold">Total Price: {totalPrice} €</p>
          
            </div>
          )}
        </main>


      </>
    )
  }


  export default App;
