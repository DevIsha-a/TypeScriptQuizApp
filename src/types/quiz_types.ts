import React from "react"
export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
    incorrect_answer: string[]
}
export type QuizType={
question: string
answer: string
option: string[]
correct_answer:string
}
export type QuestionProptype={
    question: string,
    options:string[],
    answer: string,
    result: any,
    callBack: (e: React.FormEvent<EventTarget>, userAns: string)=>any
   }