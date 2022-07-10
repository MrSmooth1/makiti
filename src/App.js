import logo from './logo.svg';
import './App.css';
import Currency from './components/Currency';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  
  const [amount1, setAmount1] = useState()
  const [amount2, setAmount2] = useState()
  const [currency1, setCurrency1] = useState('EUR')
  const [currency2, setCurrency2] = useState('XAF')
  // const [rates, setRates]= useState([])

  // useEffect(() => {
    
  //   axios.get('https://api.fastforex.io/convert?api_key=705e804dba-31a03ed2b2-rel1s9')
  //   .then(response=>{
  //     setRates(response.data.rates)
  //   })
    
  // }, [])
  
    function handleAmount1Change(amount1) {
      setAmount2(amount1*658.449554/1)
      setAmount1(amount1)
    }

    function handleCurrency1Change(currency1){
      setCurrency2(currency1)
      // setAmount1(amount1)
    }
    function handleAmount2Change(amount2) {
      setAmount1(amount2*1/658.449554)
      setAmount2(amount2)
    }

    function handleCurrency2Change(currency2){
      setCurrency1(currency2)
      
    }

    const rates = [{
      XAF:658.449554,
      EUR:1
    }]

  return (
    <div className="App">
      <h1 className='text-3xl font-bold'>MAKITI CURRENCY CONVERTER (react app)</h1>
      <Currency 
        onAmountChange={handleAmount1Change} 
        onCurrencyChange={handleCurrency1Change} 
        currencies={[rates]} 
        amount={amount1} 
        currency={currency1}
      />
      <Currency 
        onAmountChange={handleAmount2Change} 
        onCurrencyChange={handleCurrency2Change} 
        currencies={[rates]} 
        amount={amount2} 
        currency={currency2}
      />
    </div>
  );
}

export default App;
