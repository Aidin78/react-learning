import { useState, useEffect, useMemo } from 'react'
import './App.css'
import { InputBox } from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const calculatedAmount = useMemo(() => {
    if (currencyInfo && currencyInfo[to] && amount) {
      return Math.ceil(amount * currencyInfo[to]);
    }
    return 0;
  }, [currencyInfo, to, amount]);

  useEffect(() => {
    setConvertedAmount(calculatedAmount);
  }, [calculatedAmount]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-blur bg-no-repeat' style={{ backgroundImage: `url(https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg)` }}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => { e.preventDefault();}}>
            <div className='w-full mb-1'>
              <InputBox
                amount={amount}
                label="from"
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                onAmountChange={(amount) => {
                  setAmount(amount)
                }}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-0.5'
                onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
                amount={convertedAmount}
                label="to"
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            {/* <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert</button> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
