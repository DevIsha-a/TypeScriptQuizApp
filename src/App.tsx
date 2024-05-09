import React, { useEffect, useState } from 'react';
import FetchQuizData from './services/quiz-services';
import { QuizType } from './types/quiz_types';
import QuestionCard from './components/QuestionCard';
import './App.css'

function App() {
  const [quiz, setQuiz] = useState<QuizType[]>([])
  var [currentInd, updateInd] = useState(0)
  var [result, setResult]= useState(0)
  

  const handleSubmit = (e:React.FormEvent<EventTarget>, userAns: string) => {
   e.preventDefault()
   let currentQues= quiz[currentInd]
   console.log("User selection "+ userAns + " actual ans is "+ currentQues.correct_answer)

   if (currentInd!== quiz.length-1)
   {
    if(userAns===currentQues.correct_answer)
    {
      setResult(++result)
    updateInd(currentInd+1);
    }
    else{
      updateInd(currentInd+1);
    }
    
   }
    else 
    {
      alert("quiz completed")
      updateInd(0)
      setResult(0)
    }
    console.log(result)
    console.log(currentInd)
    

  }
  async function fetchData() {
    const question: QuizType[] = await FetchQuizData(5, 'medium', 'multiple')

    setQuiz(question)

  }
  useEffect(() => {
    fetchData()
    

  }, [])

  if (!quiz.length) {
    return <h3>Loading...</h3>
  }
  return (
    <div className="App">
      <h1 id='logo'>Quiz APP</h1>
      <QuestionCard question={quiz[currentInd].question} options={quiz[currentInd].option} answer={quiz[currentInd].answer}
        callBack={handleSubmit} result={result}
      ></QuestionCard>

    </div>
  );
}

export default App;


// API 
//https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple