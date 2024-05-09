import React, { useState } from 'react'
import { QuestionProptype } from '../types/quiz_types'
import './QuestionCard.css'

export const QuestionCard: React.FC<QuestionProptype> = ({question, options, answer, callBack, result }) => {
const [selection, setselection]= useState('')
const handleSelection =(e: any)=>{
  setselection(e.target.value)
}

function refresh(){
  window. location. reload();
}
  return (
    <div className='main'>
      <div className='question-container'>
      <h2> {question}</h2>

        <form >    
          {options.map((opt: string, ind: Number)=>{
            return<label className="options" >
                <input
            type='radio'
            value={opt}
            name="opt"
            required
            checked={selection=== opt}
            onChange={handleSelection}
            >
              
            </input>
            {opt} 
            </label>
           
          })}
        <button className='sub_btn'  type="submit" name="sButton" value="Invia"  onClick={(e: React.FormEvent<EventTarget>)=>callBack(e, selection)} >Submit and Next</button>

        </form>

        <div className='fixed-bottom'>
        <h2>Your score: {result}</h2>
          <button className='sub_btn reload'  onClick={refresh}>start again</button>
        </div>
        
      </div>

   

    </div>

  )
}
export default QuestionCard