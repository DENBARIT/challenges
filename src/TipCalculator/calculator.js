import React, { useState } from "react";

export default function App() {
return (
 <div>
<Bill/>
 </div>   
)
}

function Bill(){
    const [bill,setBill]=useState(80);
return <div>
    <h2>How much was the bill?</h2>
    <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
</div>


}