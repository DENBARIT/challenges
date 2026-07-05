import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {useState} from "react";

export default function App(){
           const [range,setRange]=useState(1);
const [value,setValue]=useState(0);
const date=new Date("june 1,2023");
date.setDate(date.getDate()+value);
function reset(){
    setValue(0);
    setRange(1);
}
    return (
        <div>
            <input type="range" min="1" max="10" value={range} onChange={(e)=>setRange(Number(e.target.value))} />
            {range}
            <div>
            <button  onClick={()=>setValue((v)=>v-(range))}>-</button> 
             <input type="text" value={value}  onChange={(e)=>setValue(Number(e.target.value))} />
          
            <button  onClick={()=>setValue((v)=>v+(range) )}>+</button>
</div>
<p>

    
  <span> {value===0?"Today is":value>0?`${value} days from today is `:`${Math.abs(value)} days ago from today was`}
</span>
  <span>{date.toDateString()}</span>
</p>

{value!==0 || range!==1 ? <button onClick={reset}>Reset</button> : null}
        </div>
    )
}