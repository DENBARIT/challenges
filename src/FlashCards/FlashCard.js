import "../FlashCards/styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

// function FlashCards() {
//   return <div className="flashcards">

//     {questions.map((question)=><Question question={question} key={question.id}/>)}

//   </div>;
// }
// function Question({question}){
    
//     const [selected, setSelected] = useState(null);
// function handleClick(id){
//     setSelected(selected==id?null:id);
// }

// return(
//     <div className={`flashcards ${selected == question.id ? "selected" : ""}`} onClick={() => {
      
//       setSelected(()=>handleClick(question.id));
    
//     }}>
       
       
//         {selected==question.id ? <p>{question.answer}</p>:<p>{question.question}</p>}
        
//     </div>
// )

// }
function FlashCards() {
    const [selectedId, setSelectedId] = useState( null);
    function handleClick(id) {
        setSelectedId(selectedId === id ? null : id);
    }
    return (
        <div className="flashcards">
            {questions.map((question) => (
                <div key={question.id} className={question.id === selectedId ? "selected" : ""} onClick={() => handleClick(question.id)}>
                
                 <p>{question.id===selectedId ? question.answer : question.question}</p></div>
            ))}
        </div>
    );
}
    
// remarks here we have to pass a real function ()=>handleClick not a function call handleClick(questionid)