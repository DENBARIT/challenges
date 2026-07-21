import React, { useState } from "react";
import { useEffect } from "react";
export default function
APP() {
    const [amount, setAmount] =useState("");
   const [convertedAmount, setConvertedAmount] = useState("");
    const [baseCurrency, setBaseCurrency] = useState("USD");
    const [quoteCurrency, setQuoteCurrency] = useState("EUR");
    const [isLoading, setIsLoading] = useState(false);
useEffect(() => {
    if(!amount||isNaN(amount)){
        setConvertedAmount("");
        return;
    }
     if (baseCurrency === quoteCurrency) {
      setConvertedAmount(Number(amount).toFixed(2));
      return;
    }
const abortController = new AbortController();
    async function convert(){
        try{
            setIsLoading(true);
        const response=await fetch(`https://api.frankfurter.dev/v2/rate/${baseCurrency}/${quoteCurrency}`,{signal: abortController.signal});
        const data=await response.json();
const exchangeRate = data.rate;
const amountToConvert = (Number(amount)*exchangeRate).toFixed(2);
setConvertedAmount(amountToConvert);
    setIsLoading(false);
    }catch(error){
if(error.name !== "AbortError"){
    console.error("Fetch error: ", error);
          setIsLoading(false);
    }}}
    convert();
  return function cleanup() {
    abortController.abort();
    setConvertedAmount("");
  };
  
}, [amount,baseCurrency, quoteCurrency]);

    return(
    <div>
        <input type="text" placeholder="Enter amount"  value={amount} onChange={(e) => setAmount(e.target.value)} disabled={isLoading} />
        <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)} disabled={isLoading}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
        </select>
          <select value={quoteCurrency} onChange={(e) => setQuoteCurrency(e.target.value) } disabled={isLoading}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
        </select>
        {convertedAmount &&
        <p>Output: {convertedAmount} {quoteCurrency}</p>}
    </div>
  
)

}
