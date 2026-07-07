import React, { useState } from "react";

export default function App() {
     const [bill,setBill]=useState(80);
         const [tip1,setTip1]=useState(0.1);
const [tip2,setTip2]=useState(0.2);
function handleReset(){
setBill("");
setTip1(0);
setTip2(0);
}
const avaTip=bill*(tip1+tip2)/2/100;
return (

 <div>
<Bill bill={bill} setBill={setBill} />
<ServiceQuality tip={tip1} setTip={setTip1}>How did you like the service?</ServiceQuality>
<ServiceQuality tip={tip2} setTip={setTip2}>How did your friend like the service?</ServiceQuality>
{bill>0&&(
    <><h3>you pay {`💲${bill+avaTip}`} ({`💲${bill}`} + {`💲${avaTip}`} tip)</h3>
    <button onClick={handleReset }>Reset</button></>
)}
 </div>   
)
}

function Bill({ bill, setBill }) {
   
return <div>
    <label>How much was the bill?</label>
    <input type="text" placeholder="Enter bill amount" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
</div>

}
function ServiceQuality({children, tip, setTip}) {
return <div>
    <h2>{children}</h2>
    <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
                <option value="0">Dissatisfied (0%)</option>

        <option value="5">Poor (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="15">Great (15%)</option>
        <option value="20">Absolutely amazing (20%)</option>
    </select>

</div>

}

