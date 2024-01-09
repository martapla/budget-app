import './App.css'
import CardAdds from './components/CardAdds'
import CardSeo from './components/CardSeo'
import CardWeb from './components/CardWeb'
import { useState } from 'react';

function App() {

  const [seoShowValue, setSeoShowValue] = useState(false);
  const [addsShowValue, setAddsShowValue] = useState(false);

  const seoPrice = 300;

  const handleSeoClick = () => {
    setSeoShowValue(!seoShowValue);
  };

  const addsPrice = 400;

  const handleAddsClick = () => {
    setAddsShowValue(!addsShowValue);
  };
  

  let totalPrice = 0;

  if (seoShowValue && addsShowValue) {
    totalPrice = seoPrice + addsPrice;

  } else if (seoShowValue) {
    totalPrice = seoPrice;

  } else if (addsShowValue) {
    totalPrice = addsPrice;
  }

 
  return (
    <>
      <main>
        <h1 className="p-8 uppercase text-2xl text-green-700 font-semibold">Build your website with us!</h1>

        <CardSeo
          showValue={seoShowValue}
          onShowClick={handleSeoClick} />

        <CardAdds
        showValue={addsShowValue}
        onShowClick={handleAddsClick}/>

        <CardWeb />
        
      
      </main>

      {(seoShowValue || addsShowValue) && (
        <div className="p-8">
           <p className="text-lg font-semibold text-green-800">Preu Total: {totalPrice} €</p>
        </div>
      )}
      
    </>
  )
}

export default App
