import { QuizType, Quiz } from "../types/quiz_types"

function shuffle(a: any[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const FetchQuizData= async  ( questions: Number,level: string, type: string ): Promise<QuizType[]>=>{
const result = await fetch(`https://opentdb.com/api.php?amount=${questions}&category=9&difficulty=${level}&type=${type}`)
const {results}= await result.json()

const quiz:QuizType[] = results.map((questionObj: Quiz, ind: number)=>{

return {
    question: questionObj.question,
    answer: questionObj.correct_answer,
    option:shuffle(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
    correct_answer: questionObj.correct_answer
    //we did this bcz we just need 3 values out of all the provided values 

}
})
return quiz;
}

export default FetchQuizData;