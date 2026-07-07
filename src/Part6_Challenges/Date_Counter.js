import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
export default function App() {
  return (
    <div>
      <div >
        <Step />
      </div>
    </div>
  );
}
function Step() {
  const [step, setStep] = useState(1);
  function stepdown(){
    setStep(step=>step-1)
}
function stepUp(){
    setStep(step=>step+1)
}
  return (
    <>
    <div>
      <button onClick={stepdown}>-</button>
      <p>Step: {step}</p>
      <button onClick={stepUp}>+</button>
    </div>
     <div>
      <Count value={step} />
      </div></>
  );
}


function Count({ value }){
    const [count, setCount] = useState(0);
    const targetDate=new Date(Date.now() + count * 24 * 60 * 60 * 1000);
    const formattedDate=targetDate.toLocaleDateString(

"en-US",{
    month: "long",
    day: "numeric",
    year: "numeric",
}

    );
  return (
    <>
    <div>
      <button onClick={()=>setCount((count)=>count-value)}>-</button>
      <p>Count: {count}</p>
      <button onClick={()=>setCount((count)=>count+value)}>+</button>
    </div>
 {/* <p>{count===0&&`Today is ${formattedDate}`}</p>
    <p>{count>0?`${count}days from today is ${formattedDate}`:`${Math.abs(count)} days ago from today was ${formattedDate}`}</p> */}
       {count === 0 && <p>Today is {formattedDate}</p>}

    {/* Condition 2: Greater than Zero */}
    {count > 0 && <p>{count} days from today is {formattedDate}</p>}

    {/* Condition 3: Less than Zero */}
    {count < 0 && <p>{Math.abs(count)} days ago was {formattedDate}</p>}
  
</>
  ); 
  }


  // Schmedtaman solutions

  // const date=new Date("june 21,2027");
  // it creates the object of date,then the get date extracts the number of the date which is 21,after that  we add count and we set the date by madding the calculated date to the object (example-21+5=26 so the date set to 26)
  // date.setDate(date.getDate()+count);

  // we can use nested ternary
  // {count===0?"Today is":count>0?`${count} days from:``${Math.abs(count)} days ago from today was`}
