import { StrictMode } from "react";
import { createRoot
 } from "react-dom/client";
// import CurrentApp from "./Part6_Challenges/Date_Counter"
//  import CurrentApp from "./FlashCards/FlashCard"
// import CurrentApp from "./Part6_Challenges/Date_Counter2"
// import CurrentApp from "./Part7Challenges/Accordion"
import CurrentApp from "./TipCalculator/calculator"
 const rootElement=document.getElementById("root");
 const root=createRoot(rootElement);
 root.render(
    <StrictMode>
        <CurrentApp/>
    </StrictMode>
 )
