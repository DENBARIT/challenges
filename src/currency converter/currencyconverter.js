import React, { useState } from "react";
import { useEffect } from "react";
export default function
APP() {
    const [amount, setAmount] =useState("");
   const [convertedAmount, setConvertedAmount] = useState("");
    const [baseCurrency, setBaseCurrency] = useState("USD");
    const [quoteCurrency, setQuoteCurrency] = useState("EUR");
useEffect(() => {
  
    async function getData(){
        const response=await fetch(`https://api.frankfurter.dev/v2/rate/${baseCurrency}/${quoteCurrency}`);
        const data=await response.json();
const exchangeRate = data.rate;
const amountToConvert = (Number(amount)*exchangeRate).toFixed(2);
setConvertedAmount(amountToConvert);
    
    }getData();
  return function cleanup() {
    setConvertedAmount("");
  };
  
}, [baseCurrency, quoteCurrency]);

    return(
    <div>
        <input type="text" placeholder="Enter amount"  value={amount} onChange={(e) => setAmount(e.target.value)} />
        <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
        </select>
          <select value={quoteCurrency} onChange={(e) => setQuoteCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
        </select>
        <p>Output: {convertedAmount}</p>
    </div>
  
)

}
